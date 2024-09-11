import expressAsyncHandler from "express-async-handler";

import Comment from "../models/comment.model.js";

export const createComment = expressAsyncHandler(async (req, res) => {
	const { text, blogPost } = req.body;
	try {
		const newComment = await Comment.create({
			author: req.user.userId,
			text,
			blogPost,
		});
		res.json(newComment);
	} catch (error) {
		res.status(400).json(error);
	}
});

export const getAllComments = expressAsyncHandler(async (req, res) => {
	try {
		const allComments = await Comment.find().populate("blogPost");
		res.json(allComments);
	} catch (error) {
		res.status(500).json(error);
	}
});

export const getSingleComment = expressAsyncHandler(async (req, res) => {
	const id = req.params.id;
	try {
		const comment = await Comment.findById(id).populate("blogPost");
		if (!comment) {
			return res.status(404).json({ message: "Comment not found" });
		}
		res.json(comment);
	} catch (error) {}
});

export const updateComment = expressAsyncHandler(async (req, res) => {
	const id = req.params.id;
	try {
		const comment = await Comment.findById(id);
		if (!comment) {
			return res.status(404).json({ message: "Comment not found" });
		}
		const updatedComment = await Comment.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		res.json(updatedComment);
	} catch (error) {
		res.status(400).json(error);
	}
});

export const deleteComment = expressAsyncHandler(async (req, res) => {
	const id = req.params.id;
	try {
		const comment = await Comment.findById(comment);
		if (!comment) {
			return res.status(404).json({ message: "Comment not found" });
		}
		const deletedComment = await Comment.findByIdAndDelete(id);
		res.json({ message: "Comment deleted" });
	} catch (error) {
		res.status(400).json(error);
	}
});
