import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema(
	{
		title: {
			type: String,
		},
		content: {
			type: String,
		},
		tags: [String],
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("BlogPost", blogPostSchema);
