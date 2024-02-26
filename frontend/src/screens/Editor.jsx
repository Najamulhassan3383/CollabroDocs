import Quill from "quill";
import ReactQuill from "react-quill";
import QuillCursors from "quill-cursors";
import { QuillBinding } from "y-quill";
import * as Y from "yjs";
import LiveblocksProvider from "@liveblocks/yjs";
import { useRoom } from "../../liveblocks.config";
import { useCallback, useEffect, useRef, useState } from "react";
import "react-quill/dist/quill.snow.css"; // for snow theme
import { useUpdateDocumentMutation } from "../slices/documentsSlice";

Quill.register("modules/cursors", QuillCursors);

// Collaborative text editor with simple rich text, live cursors, and live avatars
export function Editor({ document, id }) {
  console.log("Editor");
  const room = useRoom();
  const [text, setText] = useState(document);
  console.log("text", text);
  const [provider, setProvider] = useState(null);

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

  return <QuillEditor yText={text} provider={provider} id={id} />;
}

function QuillEditor({ yText, provider, id }) {
  const [updateDocument, { isLoading, error }] = useUpdateDocumentMutation();
  console.log("QuillEditor props", { yText, provider });
  const reactQuillRef = useRef(null); // Use useRef instead of a string
  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];
  // handle save button click
  const handleClick = useCallback(() => {
    console.log(id, yText.toString(), "printing");
    updateDocument({ data: { content: yText.toString() }, id });
  }, [updateDocument, yText, id]);
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
    <div>
      <ReactQuill
        placeholder="Start typing here…"
        ref={reactQuillRef} // Assign the ref here
        theme="snow"
        modules={{
          toolbar: toolbarOptions,
          cursors: true,
          history: {
            // Local undo shouldn't undo changes from remote users
            userOnly: true,
          },
        }}
      />
      <button onClick={handleClick}>Save</button>
    </div>
  );
}
