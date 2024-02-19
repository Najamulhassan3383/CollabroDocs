import mongoose from "mongoose";

const versionSchema = mongoose.Schema({
  description: {
    type: String,
  },}
  ,{
    timestamps: true,
  }
);


const documentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
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
    versions: [versionSchema],
    
  },
  {
    timestamps: true,
  }
);

const Document = mongoose.model("Document", documentSchema);


export default Document
