import mongoose from "mongoose";

const branchSchema = new mongoose.Schema({
  name: String
});

export default mongoose.model("Branch", branchSchema);
