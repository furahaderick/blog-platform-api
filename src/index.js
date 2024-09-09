import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

// test route
app.get("/api/test", (req, res) => {
	res.send("Your connection is Alive");
});

app.listen(PORT, () => {
	console.log(`Listening on *:${PORT}`);
});
