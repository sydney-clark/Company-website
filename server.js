const express = require('express');
const app = express();
const links = require('./links.js');
const past = require('./past.js');
const staff = require('./staff.js');

app.listen(3000, () => {
	console.log('Welcome to the best bar ever!');
});

app.get('/home', (req, res) => {
    res.send('home');
});

app.get('/history', (req, res) => {
    res.send('history');
});

app.get('/contact', (req, res) => {
    res.send('contact');
});

app.get('/links', (req, res) => {
    res.render('links.ejs', {Link:links})
});

app.get('/links/:id', (req, res)=>{
    res.send(`Links: ${links[req.params.id]}`);
})

app.get('/past', (req, res) => {
    res.render('past.ejs', {Past:past} );
});

app.get('/past/:id', (req, res) => {
    res.send(`past: ${past[req.params.id]}`)
});

app.get('/staff', (req, res) => {
    res.render('staff.ejs', {Staff:staff} );
});

app.get('/staff/:id', (req, res) => {
    res.send(`staff: ${staff[req.params.id]}`)
});