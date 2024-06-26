const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
const path = require("path");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/students?/:id", (req, res) => {
	res.send(`${process.env.STATUS}`);
});

app.get("/students?/:name", (req, res) => {
	let studentName = req.params.name;
	res.send(`The student name is: ${studentName}\n`);
});

app.post("/newStudent", (req, res) => {
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	const age = req.body.age;
	const msg = `
	<p>First Name: ${firstName}</p>
	<p>Last Name: ${lastName}</p>
	<p>Age: ${age}</p>`;
	res.send(msg);
});

app.listen(port, () => {
	console.log(`Listening on port: ${port}`);
});
