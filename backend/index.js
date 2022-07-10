const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const express = require('express');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors())

const PORT = 443;

app.get("/welcome/:name", function(req, res){
    const name = req.params.name;
    if(name=="jaemo") res.send("hello jaemo");
    else res.send("Welcome to my web server " + name);
});

app.post("/search", function(req, res) {
    const type = req.body.type;
    const clas = req.body.class;
    const grade = req.body.grade;
    console.log("index");
    res.send("Welcome ");
})

app.listen(PORT, function() {
    console.log("server is ready at " + PORT);
});

app.use('/api', require('./routes/router'))