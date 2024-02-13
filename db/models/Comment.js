import mongoose from "mongoose";

const { Schema, models, model } = mongoose;

const commentSchema = new Schema({
  title: { type: String },
  text: { type: String },
  rating: { type: Number },
});

const Comment = models.Comment || model("Comment", commentSchema);

export default Comment;
