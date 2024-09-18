import { rateLimit } from "express-rate-limit";

const APILimiter = rateLimit({
	windowMs: 45 * 60 * 1000,
	limit: 100,
	standardHeaders: true,
	legacyHeaders: false,
});

export default APILimiter;