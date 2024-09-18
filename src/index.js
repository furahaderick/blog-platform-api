import express from "express";

import startDB from "./configs/database.config.js";
import userRouter from "./routers/user.router.js";
import postRouter from "./routers/post.router.js";
import commentRouter from "./routers/comment.router.js";
import APILimiter from "./middleware/limit.middleware.js";

const app = express();
const PORT = process.env.PORT || 5000;

startDB();

app.use(express.json());
app.use(APILimiter);

app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/comments", commentRouter);

// test route
app.get("/api/test", (req, res) => {
	res.send("Your connection is Alive");
});

app.listen(PORT, () => {
	console.log(`Listening on *:${PORT}`);
});
