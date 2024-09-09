import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
	{
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		text: {
			type: String,
		},
		blogPost: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "BlogPost",
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("Comment", commentSchema);
