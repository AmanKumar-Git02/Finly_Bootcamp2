const express = require("express");
const morgan = require('morgan');


const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('*', (req, res) => {
    res.status(404).send('Page not found');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:${PORT}');
});

// const server = http.createServer((req, res) => {
//     res.end('Hello, World!\n');
// });

// server.listen(3000, () => {
//     console.log('Server running at https://localhost:3000/');
// });