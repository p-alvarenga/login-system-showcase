"use strict"

const { join } = require("node:path");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get('/', (req, res) => {
	res.sendFile(join(__dirname, "public/index.html"));
});

app.use((req, res) => {
	res.status(404).sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
	console.log("running at *:3000");
});
