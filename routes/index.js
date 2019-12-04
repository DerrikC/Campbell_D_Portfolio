var express = require('express');
var router = express.Router();
var auth = require('../config/mailcreds');
var mailer = require('nodemailer');

// set up the nodemailer stuff
const transporter = mailer.createTransport({
	service: 'gmail',
	auth: {
		user: auth.user,
		pass: auth.pass
	}
});

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});

router.post('/mail', (req, res) => {
	console.log('hit mail route');
	console.log('body: ', req.body);

	// get the mail options from the form -> the url params using bodyParser middleware

	const mailOptions = {
		from: req.body.usermail,
		to: "xstiinct@gmail.com",
		replyTo: req.body.usermail,
		subject: `From portfolio site: Subject = ${req.body.subject || 'none'}`, // Subject line
		text: req.body.message
	};

	transporter.sendMail(mailOptions, function (err, info) {
		if (err) {
			console.log("failed... ", err);
			res.json(err);
		} else {
			console.log("success! ", info);
			res.json(info);
		}
	});



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








})

module.exports = router;


