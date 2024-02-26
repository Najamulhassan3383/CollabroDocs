import { RoomProvider } from "../../liveblocks.config";
import { Editor } from "./Editor";
import { ClientSideSuspense } from "@liveblocks/react";
import "react-quill/dist/quill.snow.css"; // for snow theme
import { useParams } from "react-router-dom";
import { useGetDocumentQuery } from "../slices/documentsSlice";

export default function EditScreen() {
  const { documentId } = useParams();
  const { data, error, isLoading } = useGetDocumentQuery(documentId);

  if (isLoading) {
    return <div>Loading…</div>;
  }

  if (error || !data) {
    return <div>Error loading document.</div>;
  }

  const documentContent = data.data.content; // Assuming content is the property you want to access
  const roomId = data.data.roomId;

  return (
    <>
      <RoomProvider id={roomId} initialPresence={{}}>
        <ClientSideSuspense fallback="Loading…">
          {() => <Editor document={documentContent} id={documentId} />}
        </ClientSideSuspense>
      </RoomProvider>
    </>
  );
}
