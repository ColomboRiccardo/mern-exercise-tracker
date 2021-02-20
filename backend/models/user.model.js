const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			minlength: 3,
		},
	},
	{ timestamps: true }
);
// this schema just has a single field, username.

const User = mongoose.model('User', userSchema);
// 'User' can be anything we want

module.exports = User;
//this is going to be more or less the same for any mongoose schema.
