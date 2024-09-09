import mongoose from "mongoose";

async function startDB() {
	try {
		const connection = await mongoose.connect(process.env.MONGO_URI);
		if (connection) {
			console.log("Started database server successfully");
		}
	} catch (error) {
		console.error("Error connecting to MongoDB: ", error);
	}
}

export default startDB;
