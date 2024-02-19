import { RoomProvider } from "../../liveblocks.config";
import { Editor } from "./Editor";
import { ClientSideSuspense } from "@liveblocks/react";
import "react-quill/dist/quill.snow.css"; // for snow theme

export default function EditScreen() {
  console.log("EditScreen");
  return (
    <>
      <RoomProvider id="my-room" initialPresence={{}}>
        <ClientSideSuspense fallback="Loading…">
          {() => <Editor />}
        </ClientSideSuspense>
      </RoomProvider>
    </>
  );
}
