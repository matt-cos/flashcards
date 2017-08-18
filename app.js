const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'pug');

// handles GET requests for root route
app.get('/', (req, res) => {
	res.render('index');
});

app.get('/cards', (req, res) => {
	res.render('card', { prompt: "Who is buried in Grant's Tomb?" });
});

app.get('/hello', (req, res) => {
	res.render('hello');
});

app.post('/hello', (req, res) => {
	res.cookie('username', req.body.username);
	res.render('hello', { name: req.body.username });
});

app.listen(3000, () => {
	console.log('the application is running on localhost:3000!')
});