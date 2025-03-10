const express = require ('express'); 
const app = express();
const port = 3000;

app.use(express.json()) // middleware to parse json bodies


// route that sends a json response
app.use('/', (req, res) => {
    res.json('Express is working! Jhanna Kris Durano')
});

// route that listens on port 3000
app.listen(port, (res) => {
    console.log(`Server running at http://localhost:${port}`);
});