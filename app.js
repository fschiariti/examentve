var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {
  var myArgs = process.argv.slice(2);
   res.send(myArgs[0]);
});

app.use(router);

app.listen(3000, function() {

//  console.log(1);
//  setTimeout(function(){console.log(2)}, 1000);
//  setTimeout(function(){console.log(3)}, 0);
//  console.log(4);

//  const suma = [1, 2, 3, 4].reduce(function(a, b){return a + b });

//  console.log(suma);

  console.log("Hello World");

  console.log("Node server running on http://localhost:3000");
});