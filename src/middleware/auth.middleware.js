import * as jwt from "jsonwebtoken";

function authenticateUser(req, res, next) {
	const header = req.headers.authorization;
	if (!header) {
		return res
			.status(401)
			.json({ message: "Unauthorized. Token is missing" });
	}

	const token = header.split(" ")[1];

	try {
		const verifiedUser = jwt.verify(token, process.env.JWT_SECRET);
		req.user = verifiedUser;
		next();
	} catch (error) {
		res.status(400).json({ message: "Invalid token" });
	}
}
