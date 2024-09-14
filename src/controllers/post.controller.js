import expressAsyncHandler from "express-async-handler";

import BlogPost from "../models/post.model.js";

export const createNewPost = expressAsyncHandler(async (req, res) => {
	const { title, content, tags } = req.body;
	const newBlogPost = await BlogPost.create({
		title,
		content,
		tags,
		author: req.user.userId,
	});

	if (newBlogPost) {
		res.json(newBlogPost);
	} else {
		res.status(400).json({ message: "Error while creating new blog post" });
	}
});

export const fetchAllBlogPosts = expressAsyncHandler(async (req, res) => {
	const query = req.query; // Filter blog posts based on a single, or many parameters

	// Populate the result with actual User object instead of an ObjectId
	BlogPost.find(query)
		.populate("author")
		.then((post) => res.json(post))
		.catch((err) => res.status(400).json(err));
	// try {
	// 	const blogPosts = await BlogPost.find(query).populate("author");
	// 	res.json(blogPosts);
	// } catch (error) {
	// 	res.status(400).json(error);
	// }
});

export const fetchSingleBlogPost = expressAsyncHandler(async (req, res) => {
	const id = req.params.id;
	try {
		const blogPost = await BlogPost.findById(id).populate("author");
		res.json(blogPost);
	} catch (error) {
		res.status(400).json(error);
	}
});

export const updatePost = expressAsyncHandler(async (req, res) => {
	const id = req.params.id;
	try {
		const blogPost = await BlogPost.findById(id);
		if (!blogPost) {
			return res.status(404).json({ message: "Post not found" });
		}
		const updatedPost = await BlogPost.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		res.json(updatedPost);
	} catch (error) {
		res.status(400).json(error);
	}
});

export const deletePost = expressAsyncHandler(async (req, res) => {
	const id = req.params.id;
	try {
		const blogPost = await BlogPost.findById(id);
		if (!blogPost) {
			return res.status(404).json({ message: "Post not found" });
		}
		const deletedPost = await BlogPost.findByIdAndDelete(id);
		res.json({ message: "Post deleted" });
	} catch (error) {
		res.status(400).json(error);
	}
});
