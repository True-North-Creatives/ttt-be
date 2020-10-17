/* eslint-disable*/
const fs = require('fs');
const MIMEText = require('mimetext');
const library = require('./library');

const MIMEMessage = new MIMEText();

const getTemplate = (payload, templateName) => {
    const mail = fs.readFileSync(
        `src/services/mail/template/${library[templateName].fileName}`
    );
    let template = mail.toString();
    Object.keys(payload).forEach((key) => {
        template = template.replace(
            new RegExp(`__${key}__`, 'g'),
            payload[key]
        );
    });
    MIMEMessage.setSubject(library[templateName].subject);
    MIMEMessage.setMessage(template);
    return MIMEMessage;
};
module.exports = getTemplate;
