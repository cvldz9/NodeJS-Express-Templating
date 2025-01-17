const express = require('express')
const app = express()
const path = require('path')
const HTTP_PORT = process.env.PORT || 8080

app.use(express.static("public"))

app.get ('/', (req, res) => {
    res.sendFile(path.join(__dirname,"/views/home.html"))
});

app.get ('/trips', (req, res) => {
    res.sendFile(path.join(__dirname,"/views/trips.html"))
});

app.get ('/foods', (req, res) => {
    res.sendFile(path.join(__dirname,"/views/foods.html"))
});

app.get ('/culture', (req, res) => {
    res.sendFile(path.join(__dirname,"/views/culture.html"))
});


app.get ('/contact', (req, res) => {
    res.sendFile(path.join(__dirname,"/views/contact.html"))
});


app.listen(HTTP_PORT, () =>
console.log(`server listening on: ${HTTP_PORT}`
    )
);

