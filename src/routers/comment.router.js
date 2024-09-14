import express from "express";

import {
	createComment,
	getAllComments,
	getSingleComment,
	updateComment,
	deleteComment,
} from "../controllers/comment.controller.js";
import authenticateUser from "../middleware/auth.middleware.js";

const commentRouter = express.Router();

commentRouter.route("/").post(authenticateUser, createComment);
commentRouter.route("/").get(getAllComments);
commentRouter.route("/:id").get(getSingleComment);
commentRouter.route("/:id").put(authenticateUser, updateComment);
commentRouter.route("/:id").delete(authenticateUser, deleteComment);

export default commentRouter;
