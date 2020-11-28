const express = require('express');
const fs = require('fs');
const http = require('http');
const url = require('url');
const path = require('path');

let app = express();
app.use(express.static(path.resolve('../public/stylesheets')));
app.use(express.static('../public/javascripts'));

let server = http.createServer(app);

let port = 3000;
// Modules
const replaceTemplate = require('../public/javascripts/modules/replaceTemplate');

//////////////! Server
// Get the templates (html-files)
const tempHome = fs.readFileSync(`../views/index.html`, 'utf-8');
const tempClassList = fs.readFileSync(`../views/template-.html`, 'utf-8');
const tempCard = fs.readFileSync(`../views/template-card.html`, 'utf-8');

// Get the data from the data.json file
const data = fs.readFileSync(path.resolve('../data.json'));
// convert(parse) the JSON data string to a object
const dataObj = JSON.parse(data);

app.get('/', (req, res) => {
	res.sendFile(path.resolve('../views/index.html'));
});

app.get('/hjem', (req, res) => {
	res.sendFile(path.resolve('../views/index.html'));
});

app.get('/klasseliste', (req, res) => {
	res.sendFile(path.resolve('../views/template-classlist.html'));

	// console.log(req.url);
	// console.log(url.parse(req.url, true));

	// const { query, pathname } = url.parse(req.url, true);

	// home page
	res.writeHead(200, { 'Content-type': 'html' });

	const cardsHtml = dataObj.map((el) => replaceTemplate(tempCard, el)).join('');
	const output = tempClassList.replace('{%CONTENT%}', cardsHtml);

	res.end(output);

	res.end('Hello Word from the server!');
});

app.get('/api', (req, res) => {
	res.sendFile(path.resolve('../data.json'));
});

// app.get('/home', (req, res) => {
// 	res.sendFile(tempHome);
// });

app.listen(port, 'localhost');
server.on('listening', () => {
	console.log(`Express server started on port ${port}`, server.address().port, server.address().address);
});
