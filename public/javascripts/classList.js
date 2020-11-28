// Imports
const fs = require('fs');
const http = require('http');
const url = require('url');

// Modules
const replaceTemplate = require('./modules/replaceTemplate');

//////////////! Server
// Get the templates (html-files)
const tempHome = fs.readFileSync(`../../views/template-home.html`, 'utf-8');
const tempClassList = fs.readFileSync(`../../views/template-classlist.html`, 'utf-8');

// Get the data from the data.json file
const data = fs.readFileSync(`../../data.json`, 'utf-8');
// convert(parse) the JSON data string to a object
const dataObj = JSON.parse(data);

// script
const server = http.createServer((req, res) => {
	// console.log(req.url);
	// console.log(url.parse(req.url, true));

	const { query, pathname } = url.parse(req.url, true);

	// home page
	if (pathname === '/classlist') {
		res.writeHead(200, { 'Content-type': 'html' });

		const cardsHtml = dataObj.map((el) => replaceTemplate(tempClassList, el)).join('');
		const output = tempClassList.replace('{%NAME%}', cardsHtml);

		res.end(output);
	}

	res.end('Hello Word from the server!');
});

let port = 8000;

server.listen(port, '127.0.0.1', () => {
	console.log(`Listening to request on port ${port}`);
});
