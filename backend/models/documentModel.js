import mongoose from "mongoose";

const versionSchema = mongoose.Schema(
  {
    document: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Document",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Version = mongoose.model("Version", versionSchema);

const documentSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: Object,
    },
    // room id from liveblock
    roomId: {
      type: String,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    collaborators: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    readAccess: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    writeAccess: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    versions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Version",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Document = mongoose.model("Document", documentSchema);

export default Document;
