const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const path = require('path');

// Settings
const PORT = 3000;

// Starting the server
app.listen(PORT, () => console.log(`Server running on porst: ${PORT}`));

app.get('/',(req:any, res:any) => {
    res.sendFile(path.join(__dirname, 'views','index.html'));
});

// Middlewares
//app.use(express.json());

// Routes
//
function sendMail(){
    let admin_mail = 'adminmail@gmail.com';
    let admin_mail_pass = '1234567';
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      port:'',
      auth: {
        user: admin_mail,
        pass: admin_mail_pass
      }
    });
    
    var mailOptions = {
      from: admin_mail,
      to: 'clientmail@gmail.com',
      //to sending multiples address
      // to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',
      subject: 'Sending Email using Node.js',
      text: 'That was easy!'
      //to add html instead 'text'
      //html: '<h1>Welcome</h1><p>That was easy!</p>'
    };
    
    transporter.sendMail(mailOptions, function(error:any, info:any){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    }); 
    
    //NOTE: Probable you will get an console error 'Username and Password not accepted'
    //then you have to turn on security access from other apps https://myaccount.google.com/lesssecureapps
}
