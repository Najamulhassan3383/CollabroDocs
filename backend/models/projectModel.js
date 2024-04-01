import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  collaborators: [
    {
      // stores the id of the collaborator
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  documents: [
    {
      type: Schema.Types.ObjectId,
      ref: "Document",
    },
  ],
});

const Project = mongoose.model("Project", ProjectSchema);
export default Project;
