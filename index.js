const dotenv = require('dotenv')
dotenv.config()

const express = require('express')

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/login', (request, response) => {
	response.status(200).json({
		status: "success",
		message: "response from login route"
	})
})

app.get('/verify', (request, response) => {
	response.status(200).json({
		status: "success",
		message: "response from verify route"
	})
})

app.listen(PORT, () => console.log("running server on " + PORT))