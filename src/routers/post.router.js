import express from "express";

import {
	createNewPost,
	fetchAllBlogPosts,
	fetchSingleBlogPost,
	updatePost,
	deletePost,
} from "../controllers/post.controller.js";
import authenticateUser from "../middleware/auth.middleware.js";

const postRouter = express.Router();

postRouter.route("/").post(authenticateUser, createNewPost);
postRouter.route("/").get(fetchAllBlogPosts);
postRouter.route("/:id").get(fetchSingleBlogPost);
postRouter.route("/:id").put(authenticateUser, updatePost);
postRouter.route("/:id").delete(authenticateUser, deletePost);

export default postRouter;
