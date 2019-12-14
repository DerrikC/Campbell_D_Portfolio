
//module dependencies
const express = require('express');
const path = require('path');
const hbs = require('hbs');


const sql = require('./utils/sql');
//trying to restore older version
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




//adding pages, rendering 

app.get('/home', (req, res) => {
    console.log('home page here');

    res.render('home', { message: "intro", layout: 'home'})
})

// projects page with no data
// app.get('/projects', (req, res) => {
//     console.log('projects');

//     res.render('projects', { message: "intro", layout: 'projects'})
// })

//projects with data attempt again
app.get('/projects', (req, res) => {

    // console.log('projects with data');
    // //send to custom error message
    // if (err) { return console.log(error.message); }
    // sql.getConnection((err, connection) => {
    //             if (err) { return console.log(error.message); }

    let query = `SELECT ID, project1, project2, project3, project4 FROM tbl_projects`; //change if needed!!!!!!

    sql.query(query, (err, result) => {
        // connection.release(); // send this connection back to the pool

        if (err) {
            // will exit the function and log the error
            return console.log(err.message)
        }

        // console.log(result);

    res.render('projects', { data: result, message: "project info", layout: 'projects'})
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
});


