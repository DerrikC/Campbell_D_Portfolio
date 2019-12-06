
// const express = require('express');
// const router = express.Router();


// const sql = require('../utils/sql');


// router.get('/', (req, res) => { //res making a request of the server 
//     // should really get the user data here and then fetch it thru, but let's try this asynchronously
//     console.log('at the main route');

//     let query = "SELECT ID, discoverer, genetics, mosquitoes, stat1, statDesc, stat2, stat2Desc, stat3, stat3Desc, stat4, stat4Desc, image FROM tbl_sidefacts"; //change if needed!!!!!!

//     sql.query(query, (err, result) => {
//         if (err) { throw err; console.log(err); }

//         // console.log(result); // should see objects wrapped in an array

//         // render the home view with dynamic data
//         res.render('projects',  { data: result }); //data (food) is just a generic key can be anything
//         // { data: result });
//     })
// })


//added another query



// router.get('/projects', (req, res) => {
//     // should really get the user data here and then fetch it thru, but let's try this asynchronously
//     console.log('at the projects route');
//     console.log(req.params.projects); //1 2 3 or whatever comes after the slach

//     let query = `select * FROM tbl_genes where ID="${req.params.projects}"`;


//     sql.query(query, (err, result) => {
//         if (err) { throw err; console.log(err); }

//         console.log(result); // should see objects wrapped in an array
//         // convert the social property into an array before you send it thru
//         // render the home view with dynamic data
//         // result[0].social=result[0].social.split(",").map(function(item){
//         //     item = item.trim();
//         //     //item.trim() remove any empty white space from the text

//         //     return item;
//         // })

//         // console.log("after trim/conversion:", result[0]);
//         //remder the home view with dynamic data
//         res.json(result[0]);

//         res.render('projects', { people: result });
//         //we can change the key but we had to keep the result
//     })
// })

// module.exports = router;

// OLD MAILER 

// var express = require('express');
// var router = express.Router();
// var auth = require('../config/mailcreds');
// var mailer = require('nodemailer');

// // set up the nodemailer stuff
// const transporter = mailer.createTransport({
// 	service: 'gmail',
// 	auth: {
// 		user: auth.user,
// 		pass: auth.pass
// 	}
// });

// /* GET home page. */
// router.get('/', function (req, res, next) {
// 	res.render('index', { title: 'Express' });
// });

// router.post('/mail', (req, res) => {
// 	console.log('hit mail route');
// 	console.log('body: ', req.body);

// 	// get the mail options from the form -> the url params using bodyParser middleware

// 	const mailOptions = {
// 		from: req.body.usermail,
// 		to: "xstiinct@gmail.com",
// 		replyTo: req.body.usermail,
// 		subject: `From portfolio site: Subject = ${req.body.subject || 'none'}`, // Subject line
// 		text: req.body.message
// 	};

// 	transporter.sendMail(mailOptions, function (err, info) {
// 		if (err) {
// 			console.log("failed... ", err);
// 			res.json(err);
// 		} else {
// 			console.log("success! ", info);
// 			res.json(info);
// 		}
// 	});



// FOR CLEARDB DATABASE
//TESTING USING DATA TO RENDER AN IMAGE OR TEXT

// const sql = require('../utils/sql');

// router.get('/', (req, res) => { //res making a request of the server 
//     // should really get the user data here and then fetch it thru, but let's try this asynchronously
//     console.log('at the main route');

//     let query = "SELECT ID, project1Image, FROM tbl_projects"; //change if needed!!!!!!

//     sql.query(query, (err, result) => {
//         if (err) { throw err; console.log(err); }

//         // console.log(result); // should see objects wrapped in an array

//         // render the home view with dynamic data
//         res.render('errorPage', { data: result }); //data (food) is just a generic key can be anything
//         // { data: result });
//     })








// })

// module.exports = router;


