const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
const path = require("path");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/students?/:name", (req, res) => {
	let studentName = req.params.name;
	res.send(`The student name is: ${studentName}\n`);
});

app.post("/newStudent");

app.listen(port, () => {
	console.log(`Listening on port: ${port}`);
});
