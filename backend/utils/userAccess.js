// __shouldUserHaveAccess__(user._id, room);

import Document from "../models/documentModel.js";

// each document has roomId, owner, and collaborators. The roomId is the room id from Liveblocks. The owner is the user who created the document, and the collaborators are the users who have access to the document. We can use the __shouldUserHaveAccess__ function to check if a user has access to a document. The function takes the user id and room id as arguments and returns true if the user has access to the room, and false otherwise. We can use this function to implement access control for documents in our application.

export const __shouldUserHaveAccess__ = async (userId, roomId) => {
  const document = await Document.findOne({ roomId });
  console.log(document.content, "document");
  if (!document) {
    return false;
  }
  return document.owner === userId || document.collaborators.includes(userId);
};
