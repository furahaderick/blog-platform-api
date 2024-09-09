import expressAsyncHandler from "express-async-handler";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

import User from "../models/user.model.js";

export const registerUser = expressAsyncHandler(async (req, res) => {
	const { username, email, password } = req.body;
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);
	const newUser = await User.create({
		username,
		email,
		password: hashedPassword,
	});

	if (newUser) {
		const token = await jwt.sign(
			{ userId: newUser._id },
			process.env.JWT_SECRET,
			{ expiresIn: "1h" }
		);

		res.json({ token, newUser });
	}
});

export const loginUser = expressAsyncHandler(async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	if (!user) {
		return res.status(404).json({ message: "User not found" });
	}

	const isPasswordCorrect = await bcrypt.compare(password, user.password);
	if (!isPasswordCorrect) {
		return res.status(400).json({ message: "Invalid credentials" });
	}

	const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
		expiresIn: "1h",
	});

	res.json({ token, user });
});
