var express = require('express');
const transporter = require('../mail.config');
var router = express.Router();
const cred = require('../secrets/cred');

const admin = require('firebase-admin');
const serviceAccount = require('../secrets/serviceKey.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

var mailOptions = {
    from: cred.email,
    to: '',
    html: `<p>My message</p>`,
    subject: ''
}

router.route('/mail')
.options((req, res)=>{
    res.sendStatus(200);
})
.post((req,res,next)=>{
    res.setHeader('Content-type','application/json');
    //code to fetch users from firebase and send req.body.content to each of them
    db.collection('newsletters').get().then(snapshot => {
        if(snapshot.docs.length > 0) {
            mailOptions.to = '';
            snapshot.docs.forEach(doc=>{
                mailOptions.to = mailOptions.to + ', ' + doc.data().email;
            });
            mailOptions.to = mailOptions.to.substring(2);
            mailOptions.html = `<p>`+req.body.content+`</p>`;
            mailOptions.subject = req.body.heading;
            
            transporter.sendMail(mailOptions, function(error, info) {
                if(error) {
                    console.log(error);
                    next(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            }); 
            res.statusCode = 200;
            res.send("Mail Successful");
        } else {
            res.statusCode = 204;
            res.send("No user in mailing-list");
        }
    }).catch(err=>next(err));;
});

router.route('/register')

.options((req, res)=>{
    res.sendStatus(200);
})
.post((req,res,next) => {
    db.collection('newsletters').get().then(snapshot => {
        let bool = true;
        if(snapshot.docs.length > 0) {
            snapshot.docs.forEach(doc=>{
                if(doc.data().email == req.body.email) {
                    bool = false;
                }
            });
        }
        if(bool) {
            db.collection('newsletters')
            .add({email:req.body.email}).then(()=>{
                res.statusCode = 200;
                res.send("Newsletter subscription successful");
            });
        } else {
            res.statusCode = 201;
            res.send("Already Subscribed");
        }
    })
    .catch(err=>next(err));
})
module.exports = router;