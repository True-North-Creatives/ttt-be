/* eslint-disable*/
const fs = require("fs");
const MIMEText = require("mimetext");
const library = require("./library");

const MIMEMessage = new MIMEText();

const getTemplate = (payload, templateName) => {
  switch (templateName) {
    case library.WELCOME.name: {
      const mail = fs.readFileSync(
        `src/services/mail/template/${library.WELCOME.fileName}`
      );
      let template = mail.toString();
      Object.keys(payload).forEach((key) => {
        template = template.replace(`_${key}`, payload[key]);
      });
      MIMEMessage.setMessage(template);
      return MIMEMessage;
    }
    default:
      break;
  }
};
module.exports = getTemplate;
