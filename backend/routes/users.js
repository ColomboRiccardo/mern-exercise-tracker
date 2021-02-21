// we're creating a route
const router = require('express').Router();
let User = require('../models/user.model');

// this is our first route. since in the server we said that in case of /users we need to use this file, /users/ is going to use this first route.
router.route('/').get((req, res) => {
	User.find()
		.then(users => res.json(users))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	const username = req.body.username;
	const newUser = new User({ username });
	newUser
		.save()
		.then(() => res.json('User added!'))
		.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
