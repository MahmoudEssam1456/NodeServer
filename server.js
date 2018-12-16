var express = require('express');
var app = express();
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');



    
var routes = require('./routes/index');
app.use('/',routes);


var about = require('./routes/about');
app.use('/about',about);
var appointment = require('./routes/appointment');
app.use('/appointment',appointment);
var blog = require('./routes/blog');
app.use('/blog',blog);
var department = require('./routes/department');
app.use('/department',department);
var doctor = require('./routes/doctor');
app.use('/doctors',doctor);
var services = require('./routes/services');
app.use('/services',services);
var services = require('./routes/register');
app.use('/register',services);
app.use('/register.html',services);


//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));

app.post('/register', function (req, res) {
    console.log(req.body);
    res.send(req.body);
});

app.use(function(req,res,next){
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
})

if (app.get('env')==='development'){
    app.use(function(err,req,res,next){
        res.status(err.status || 500);
        res.render('error',{
            message:err.message,
            error:err
        });
    });
}

app.use(function(err,req,res,next){
    res.status(err.status || 500);
    res.render('error',{
        message:err.message,
        error:{}
    });
});




var server = app.listen(8080, function () {
    console.log('Server is running..');
});


