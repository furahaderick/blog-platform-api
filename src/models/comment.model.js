import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
	{
		author: {
			type: String,
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
