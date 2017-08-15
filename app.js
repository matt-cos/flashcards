const express = require('express');
const app = express();

app.set('view engine', 'pug');

// handles GET requests for root route
app.get('/', (req, res) => {
	// res.send('<h1>Express test</h1>');
	res.render('index');
});

app.get('/cards', (req, res) => {
	res.render('card', { prompt: "Who is buried in Grant's Tomb?" });
});

// app.get('/cards', (req, res) => {
// 	res.locals.prompt = "Who is buried in Grant's Tomb?"
// 	res.render('card');
// });

app.listen(3000, () => {
	console.log('the application is running on localhost:3000!')
});