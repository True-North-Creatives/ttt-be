/* eslint-disable */
const { google } = require('googleapis');
const CREDENTIALS = require('../../config/credentials.json');
const generateToken = require('./lib/generateToken');
const Message = require('./template/index');

const getServiceInstance = () => {
    const { client_secret, client_id, redirect_uris } = CREDENTIALS.installed;
    const oAuth2Client = new google.auth.OAuth2(
        client_id,
        client_secret,
        redirect_uris[0]
    );
    try {
        oAuth2Client.setCredentials(require('./lib/token.json'));
    } catch (e) {
        console.log('Token file missing');
    }
    return oAuth2Client;
};

const sendMail = (payload, name, to) => {
    const auth = getServiceInstance();
    const gmail = google.gmail({ version: 'v1', auth });

    const MIMEMessage = Message(payload, name);
    MIMEMessage.setSender('sender@email.com');
    MIMEMessage.setRecipient(to);

    /**
     * @todo
     * error is not propograted, need to fix this
     */
    return gmail.users.messages.send(
        {
            userId: 'me',
            requestBody: {
                raw: MIMEMessage.asEncoded(),
            },
        }
        // (err) => {
        //     console.log(err);
        //     if (err) {
        //         return { type: 'ERROR', err };
        //     }
        //     return { type: 'SUCCESS' };
        // }
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
