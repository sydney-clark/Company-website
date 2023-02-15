const express = require('express');
const app = express();
const links = require('./links.js');

app.listen(3000, () => {
	console.log('Welcome to the best bar ever!');
});

app.get('/home', (req, res) => {
    res.send('home');
});

app.get('/history', (req, res) => {
    res.send('history');
});

app.get('/past', (req, res) => {
    res.send('past');
});

app.get('/staff', (req, res) => {
    res.send('staff');
});

app.get('/contact', (req, res) => {
    res.send('contact');
});

app.get('/links', (req, res) => {
    res.render('links.ejs', {Link:links})
});

app.get('/links/:id', (request, response)=>{
    response.send(`Links: ${links[request.params.id]}`);
})