// const fs = require('fs');
// const readline = require('readline');
// const logger = require('../../../config/logger');

// const TOKEN_PATH = './token.json';
// const SCOPES = [
//     'https://mail.google.com/',
//     'https://www.googleapis.com/auth/gmail.modify',
//     'https://www.googleapis.com/auth/gmail.compose',
//     'https://www.googleapis.com/auth/gmail.send',
// ];

// function getNewToken(oAuth2Client) {
//     const authUrl = oAuth2Client.generateAuthUrl({
//         access_type: 'offline',
//         scope: SCOPES,
//     });
//     logger.info(`Authorize this app by visiting this url: ${authUrl}`);
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout,
//     });
//     rl.question('Enter the code from that page here: ', (code) => {
//         rl.close();
//         oAuth2Client.getToken(code, (err, token) => {
//             if (err) return logger.error('Error retrieving access token', err);
//             oAuth2Client.setCredentials(token);
//             // Store the token to disk for later program executions
//             fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err1) => {
//                 if (err1) return logger.error(err1);
//                 logger.info(`Token stored to: ${TOKEN_PATH}`);
//             });
//             return oAuth2Client;
//         });
//     });
// }

// module.exports = getNewToken;
