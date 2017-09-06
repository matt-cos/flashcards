const express = require('express');
const app = express();

// middleware
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('view engine', 'pug');

app.use((req, res, next) => {
	req.messagehhh = 'This message made it!';
	next();
});

app.use((req, res, next) => {
	console.log(req.messagehhh);
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

app.listen(3000, () => {
	console.log('the application is running on localhost:3000!')
});