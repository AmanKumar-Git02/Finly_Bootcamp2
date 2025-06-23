const express = require("express");
const morgan = require('morgan');
const session = require('express-session');

// const {
// createUser,
// } = require('./lib/controller/user.controller');

const app = express();

app.use(morgan('dev'));
app.use(
session({
secret: process.env.AUTH_SECRET,
saveUninitialized: true,
resave: false,
})
);

require('dotenv').config();

app.use(express.json());

require('./lib/dbConnect');

const userRoutes = require('./router/user.route');
const getUser = require('./router/user.route');
const deleteUser = require('./router/user.route');
const signup = require('./router/user.route');
app.use('/api', userRoutes);
app.use('/api', getUser);
app.use('/api', deleteUser);
// app.use('/users', require('./router/user.route'));
// app.get('/users', createUser);

app.get('/', (req, res) => {
    res.send('Server is up and running');
});

// app.get('*', (req, res) => {
//     res.status(404).send('Page not found');
// });

// const PORT = 3000;

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://vikrantaks007:1duIY7RgbdFHy0kO@cluster0.8wowedw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     const database = client.db('finly');
//     const collection = database.collection('users');
    
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


// // const server = http.createServer((req, res) => {
// //     res.end('Hello, World!\n');
// // });

// // server.listen(3000, () => {
// //     console.log('Server running at https://localhost:3000/');
// // });