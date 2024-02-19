import Quill from "quill";
import ReactQuill from "react-quill";
import QuillCursors from "quill-cursors";
import { QuillBinding } from "y-quill";
import * as Y from "yjs";
import LiveblocksProvider from "@liveblocks/yjs";
import { useRoom } from "../../liveblocks.config";
import { useCallback, useEffect, useRef, useState } from "react";
import "react-quill/dist/quill.snow.css"; // for snow theme

Quill.register("modules/cursors", QuillCursors);

// Collaborative text editor with simple rich text, live cursors, and live avatars
export function Editor() {
  console.log("Editor");
  const room = useRoom();
  const [text, setText] = useState("Loading…");
  const [provider, setProvider] = useState(null);

  // Set up Liveblocks Yjs provider
  useEffect(() => {
    const yDoc = new Y.Doc();
    const yText = yDoc.getText("quill");
    const yProvider = new LiveblocksProvider(room, yDoc);
    setText(yText);
    setProvider(yProvider);

    return () => {
      yDoc?.destroy();
      yProvider?.destroy();
    };
  }, [room]);

  if (!text || !provider) {
    return null;
  }

  return <QuillEditor yText={text} provider={provider} />;
}

function QuillEditor({ yText, provider }) {
  console.log("QuillEditor props", { yText, provider });
  const reactQuillRef = useRef(null); // Use useRef instead of a string

  // Set up Yjs and Quill
  useEffect(() => {
    let quill;
    let binding;

    if (!reactQuillRef.current) {
      console.log("reactQuillRef is not set");
      return;
    }

    quill = reactQuillRef.current.getEditor();
    console.log("Quill", quill);
    binding = new QuillBinding(yText, quill, provider.awareness);
    return () => {
      binding?.destroy?.();
    };
  }, [yText, provider]);

  return (
    <ReactQuill
      placeholder="Start typing here…"
      ref={reactQuillRef} // Assign the ref here
      theme="snow"
      modules={{
        cursors: true,
        history: {
          // Local undo shouldn't undo changes from remote users
          userOnly: true,
        },
      }}
    />
  );
}
