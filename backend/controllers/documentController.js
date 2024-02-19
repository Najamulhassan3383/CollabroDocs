import asyncHandler from "../middleware/asyncHandler.js";
import Document from "../models/documentModel.js";

// Get documents by project
export const getDocumentsByProject = asyncHandler(async (req, res, next) => {
  console.log(req.params.id);
  const documents = await Document.find({ project: req.params.id });
  res.status(200).json({ success: true, data: documents });
});

// Get a single document
export const getDocument = asyncHandler(async (req, res, next) => {
  const document = await Document.findById(req.params.documentId);
  if (!document) {
    return res
      .status(404)
      .json({ success: false, message: "Document not found" });
  }
  res.status(200).json({ success: true, data: document });
});

// Create a new document
export const createDocument = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  const document = await Document.create({
    ...req.body,
    projectId: req.params.projectId,
    versions: [{ description: req.body.description }],
  });

  res.status(201).json({ success: true, data: document });
});

// Update a document
// export const updateDocument = asyncHandler(async (req, res, next) => {
//   let document = await Document.findById(req.params.documentId);
//   if (!document) {
//     return res
//       .status(404)
//       .json({ success: false, message: "Document not found" });
//   }
//   document = await Document.findByIdAndUpdate(req.params.documentId, req.body, {
//     new: true,
//     runValidators: true,
//   });

//   res.status(200).json({ success: true, data: document });
// });
export const updateDocument = asyncHandler(async (req, res, next) => {
  console.log(req.params.id, "updating now");

  let document = await Document.findById(req.params.id);
  console.log(document, "document");
  if (!document) {
    return res
      .status(404)
      .json({ success: false, message: "Document not found" });
  }

  document.description = req.body.description;
  document.versions.push({ description: req.body.description });

  const updatedDocument = await document.save();

  res.status(200).json({ success: true, data: updatedDocument });
});

// Delete a document
export const deleteDocument = asyncHandler(async (req, res, next) => {
  const document = await Document.findById(req.params.documentId);
  if (!document) {
    return res
      .status(404)
      .json({ success: false, message: "Document not found" });
  }
  await document.remove();
  res.status(200).json({ success: true, data: {} });
});
// Create a new version of a document
export const createVersion = asyncHandler(async (req, res) => {
  const document = await Document.findById(req.params.id);
  const description = document.description;

  if (document) {
    const lastVersion = document.versions[document.versions.length - 1];

    if (
      lastVersion &&
      lastVersion.timestamp.getTime() === document.updatedAt.getTime()
    ) {
      res.json({ message: "Timestamps are equal" });
    } else {
      document.versions.push(description);

      const updatedDocument = await document.save();

      res.json(updatedDocument);
    }
  } else {
    res.status(404);
    throw new Error("Document not found");
  }
});

// Get all versions of a document
export const getVersions = asyncHandler(async (req, res) => {
  const document = await Document.findById(req.params.id);

  if (document) {
    res.json(document.versions);
  } else {
    res.status(404);
    throw new Error("Document not found");
  }
});
// get previous version of a document
export const getPreviousVersion = asyncHandler(async (req, res) => {
  const document = await Document.findById(req.params.id);
  const version = document.versions[document.versions.length - 1];
  if (document) {
    res.json(version);
  } else {
    res.status(404);
    throw new Error("Document not found");
  }
});
