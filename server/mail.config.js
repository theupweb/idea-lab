var nm = require('nodemailer');
var cred = require('./secrets/cred');
var transporter = nm.createTransport({
    service:'gmail',
    auth: {
        user: cred.email,
        pass: cred.pass
    }
});

module.exports = transporter;