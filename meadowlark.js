var express = require('express');
var http = require('http');

var app = express();

// set up handlebars view engine
var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

app.use(express.static(__dirname + '/public'));

app.set('port', 3000);


// Routes
app.get('/', function(req,res) {
        res.render('home');
});
app.get('/about', function(req,res) {
        var randomFortune =
                fortuneCookies[Math.floor(Math.random() * fortuneCookies.length)];
        res.render('about', { fortune: randomFortune } );
});


// catch-all handler (middleware)
app.use(function(req,res,next){
        res.status(404);
        res.render('404');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
});

// Array de datos
var fortuneCookies = [
        'conquer your fears or they will conquer you.',
        'rivers need springs.',
        'do not fear what you don\'t know.',
        'you will have a pleasant surprise.',
        'whenever possible, keep it simple.'
];