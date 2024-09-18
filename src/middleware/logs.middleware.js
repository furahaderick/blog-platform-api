const logger = (req, res, next) => {
	const reqTimestamp = new Date().toLocaleString();
	const reqMethod = req.method;
	const reqURL = req.url;

	console.log(`${reqTimestamp} - ${reqMethod} request to ${reqURL}`);
	next();
};

export default logger;
