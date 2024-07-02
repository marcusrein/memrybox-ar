import express from "express";
import bodyParser from "body-parser";
import cors from "cors"; // Import cors
import fs from "fs";
import path from "path";
import { exec } from "child_process";

const app = express();
const port = 3001;

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors()); // Use cors middleware

app.post("/api/process-image", (req, res) => {
	const { fileName, index } = req.body;
	console.log(
		`Received request to process image: ${fileName} with index: ${index}`
	);
	const inputFilePath = path.join(__dirname, "../image-capture", fileName);
	const outputFilePath = path.join(__dirname, "../targets", `${index}.mind`);

	exec(
		`node src/target-image-compiler.js -i ${inputFilePath} -o ${outputFilePath}`,
		(err, stdout, stderr) => {
			if (err) {
				console.error("Error processing image:", err);
				return res
					.status(500)
					.json({ success: false, message: "Error processing image" });
			}
			console.log(
				`Image processed successfully to .mind file: ${outputFilePath}`
			);
			res.json({
				success: true,
				message: "Image processed to .mind file successfully",
			});
		}
	);
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
