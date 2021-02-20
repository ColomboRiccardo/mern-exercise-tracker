const express = require('express');
const cors = require('cors');

// connection to the MongoDB database
const mongoose = require('mongoose');
//* this is to connect our mongoDB database

require('dotenv').config();
//* this allows our server to read the .env file for environmental variables

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
//* since bodyParses is included in express, this makes express use it

// connection to the MongoDB database
const uri = process.env.ATLAS_URI;
mongoose
	.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.catch(err => console.log(err));
const connection = mongoose.connection;
connection.once('open', () => {
	console.log('MongoDB database connection established successfully');
});

app.listen(port, () => console.log(`Server is running on ${port}`));
