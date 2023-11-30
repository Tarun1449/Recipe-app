//import mongoose
const mongoose = require('mongoose')

//function to connect to db
const connectDB = async () => {
	try {
		//connect to DB
		const conn = await mongoose.connect("mongodb+srv://dhimanvivek777:sXDwALG6apXJ7yzM@cluster0.p5gxsym.mongodb.net/?retryWrites=true&w=majority")
		console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline)
	} catch (error) {
		console.log(`Error: ${error.message}`.red.underline.bold)
		//exit process with failure
		process.exit(1)
	}
}

module.exports = connectDB
