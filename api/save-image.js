import express from "express";
import bodyParser from "body-parser";
import cors from "cors"; // Import cors
import fs from "fs";
import path from "path";

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors()); // Use cors middleware

app.post("/api/save-image", (req, res) => {
	// Your logic to handle the image saving
	console.log(req.body); // Assuming the image data is in the request body
	res.send("Image saved successfully");
});

app.listen(port, () => {
	console.log(`Server is running on http://127.0.0.1:${port}`);
});
