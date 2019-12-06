
//module dependencies
const express = require('express');
const path = require('path');
const hbs = require('hbs');

// set the port
const port = process.env.PORT || 3000;


const app = express();

app.use(express.static ('public'));//looks for assets in public folder
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    console.log('this is the home route');
    res.render('home');
})



const sql = require('./utils/sql');

//adding pages


app.get('/home', (req, res) => {
    console.log('home page here');

    res.render('home', { message: "intro", layout: 'home'})
})


app.get('/projects', (req, res) => {
    let query = "SELECT ID, project1, project2, project3, project4 FROM tbl_projects"; //change if needed!!!!!!

    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        // console.log(result); // should see objects wrapped in an array

        // render the home view with dynamic data
        res.render('projects',  { data: result, layout: 'projects' });
      
})
})

app.get('/about', (req, res) => {
    console.log('about page');

    res.render('about', { message: "you see my ugly mug here", layout: 'about'})
})

app.get('/contact', (req, res) => {
    console.log('contact page');

    res.render('contact', { message: "this is the contact page if anyone reaaallly wants to reach me", layout: 'contact'})
})

app.get('/concept', (req, res) => {
    console.log('concept page');

    res.render('concept', { message: "where great design ideas are...", layout: 'concept'})
})

app.get('/threedwork', (req, res) => {
    console.log(' three d page');

    res.render('threedwork', { message: "my attempts at greatness ", layout: 'threedwork'})
})

app.get('/digitalpaintings', (req, res) => {
    console.log('digital paintings');

    res.render('digitalpaintings', { message: "my attempts at greatness ", layout: 'digitalpaintings'})
})


app.get('/codingbranding', (req, res) => {
    console.log('coding and branding');

    res.render('codingbranding', { message: "my attempts at greatness ", layout: 'codingbranding'})
})



//change for custom 404 error message
//add for custom 404 error message... needs to after pages
app.use((req, res, next) => {         
    var err = new Error ('Not Found');
    err.status = 404;
    err.customMessage = "Oh no, somethin' broke!"

    next(err);
})

app.use((err, req, res, next) => {            //add for custom 404 error message
    res.render('error', {data: err, layout: 'errorPage'});
})


// app.listen(3000, () => console.log('Listening on port 3000!'));

app.listen(port, () => {
    console.log(`app is running on ${port}`);
})

// app.listen(3000);



//OLD FOR ERROR PAGE
// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// const hbs = require('hbs');//I think I need this

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, '/public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error ('Not Found');
//   err.status = 404;
//   err.customMessage = "Oh no, somethin' broke!"

//   next(err);
// });

// app.use((err, req, res, next) => {            //add for custom 404 error message
//   res.render('error', {data: err, layout: 'errorPage'});
// })

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;
