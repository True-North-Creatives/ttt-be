const { google } = require("googleapis");
const TOKEN_PATH = require("./lib/token.json");
const CREDENTIALS = require("../../config/credentials.json");
const generateToken = require("./lib/generateToken");
const Message = require("./template/index");

const getServiceInstance = () => {
  const { clientSecret, clientId, redirectUris } = CREDENTIALS.installed;
  const oAuth2Client = new google.auth.OAuth2(
    clientId,
    clientSecret,
    redirectUris[0]
  );
  oAuth2Client.setCredentials(TOKEN_PATH);
  return oAuth2Client;
};

const sendMail = (payload, name) => {
  const auth = getServiceInstance();
  const gmail = google.gmail({ version: "v1", auth });

  const MIMEMessage = Message(payload, name);
  MIMEMessage.setSender("sender@email.com");
  MIMEMessage.setRecipient("gangulaar.icon@gmail.com");
  MIMEMessage.setSubject("Its Time to Train 💪");

  gmail.users.messages.send(
    {
      userId: "me",
      requestBody: {
        raw: MIMEMessage.asEncoded(),
      },
    },
    (err) => {
      if (err) {
        return { type: "ERROR", err };
      }
      return { type: "SUCCESS" };
    }
  );
};

const authenticate = () => {
  generateToken(getServiceInstance());
};

/**
 * Ex:
 *   const payload = {
 *    name: "Akhil Gangula",
 *   };
 * sendMail(payload, library.WELCOME.name);
 */

module.exports = {
  sendMail,
  authenticate,
};
