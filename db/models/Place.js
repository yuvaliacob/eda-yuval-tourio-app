import mongoose from "mongoose";
// import Comment from "../models/Comment";

const { Schema, models, model } = mongoose;

const placeSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  mapURL: { type: String, required: true },
  description: { type: String, required: true },
  //   comments: { type: [Schema.Types.ObjectId], ref: "Comment" },
});

const Place = models.Place || model("Place", placeSchema);

// const Comment =
//   mongoose.models.Comment || mongoose.model("Comment", commentSchema);
export default Place;
