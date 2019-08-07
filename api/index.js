const express = require('express');
const nodemailer = require('nodemailer');

let config = require('~/config');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.forwardEmailAddress,
    pass: config.forwardEmailPassword
  }
});

const httpServer = express();

httpServer.use(express.json())
httpServer.use(express.urlencoded({ extended: true }));

httpServer.post('/submitform', function(req, res) {
	
	const type = req.body.type;
	const emailAddress = req.body.emailaddress;
	const messageContents = req.body.content;
	
	let mailOptions = {
	  from: config.forwardEmailAddress,
	  to: config.targetEmailAddress,
	  subject: 'Portfolio form request',
	  text: message
	};
	
	
	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
		console.log(error);
	  } else {
		console.log('Email sent: ' + info.response);
	  }
	});
	
	res.send({success: true});
});

module.exports = {
  path: '/',
  handler: httpServer
}

