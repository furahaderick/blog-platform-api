import express from "express";

import startDB from "./configs/database.config.js";
import userRouter from "./routers/user.router.js";

const app = express();
const PORT = process.env.PORT || 5000;

startDB();

app.use(express.json());

app.use("/api/users", userRouter);

// test route
app.get("/api/test", (req, res) => {
	res.send("Your connection is Alive");
});

app.listen(PORT, () => {
	console.log(`Listening on *:${PORT}`);
});
