import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
		},
		email: {
			type: String,
		},
		password: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("User", userSchema);
