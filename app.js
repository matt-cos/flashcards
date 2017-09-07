/*jshint esversion: 6 */

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('view engine', 'pug');

app.use((req, res, next) => {
	// req.messagehhh = 'This message made it!';
	console.log("Hello");
	const err = new Error("Oh no!");
	next(err);
});

app.use((req, res, next) => {
	// console.log(req.messagehhh);
	console.log("world");
	next();
});




// handles GET requests for root route
app.get('/', (req, res) => {
	const name = req.cookies.username;
	if (name) {
		// if the cookie exists, get the cookie and set #{name} in the index route
		res.render('index', {name: name});
	} else {
		// if the cookie doesn't exists, redirect to hello route
		res.redirect('/hello');
	}
});

app.get('/cards', (req, res) => {
	res.render('card', { prompt: "Who is buried in Grant's Tomb?" });
});

app.get('/hello', (req, res) => {
	const name = req.cookies.username;
	if (name) {
		// if the cookie exists, redirect to the index route
		res.redirect('/');
	} else {
		// if the cookie doesn't exists, redirect to render the hello route
		res.render('hello');
	}
});

app.post('/hello', (req, res) => {
	// sets the cookie
	res.cookie('username', req.body.username);
	res.redirect('/');
});

app.post('/goodbye', (req, res) => {
	// don't need a goodbye template!

	// clears the cookie
	res.clearCookie('username');
	res.redirect('/hello');
});

app.use((err, req, res, next) => {
	res.locals.error = err;
	res.status();
	// PAUSED HERE!
	res.render('error');
});

app.listen(3000, () => {
	console.log('the application is running on localhost:3000!');
});