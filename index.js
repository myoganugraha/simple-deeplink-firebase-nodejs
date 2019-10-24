// const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// const token = '21313123';
// const email = "blabla@lsok.co"

// admin.initializeApp(functions.config().firebase);

// function makeDynamicLongLink(){
//     return urlBuilder(`${functions.config().applinks.link}`,{
//         queryParams: {
//             link: `https://dynamic.link.example/reset-password?email=${email}&token=${token}`
//         }
//     });
// }

// exports.postDynamicLink = functions.database.ref()
//     .onWrite(event => {
//         let post = event.data.val();
//         if (post.addedDynamicLink) {
//             return;
//         }

//         post.addedDynamicLink = true;

//         const options = {
//             method: 'POST',
//             uri: `https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${functions.config().applinks.key}`,
//             body: {
//                 "longDynamicLink": makeDynamicLongLink()
//             },
//             json: true
//         };

//         request(options)
//             .then(function (parsedBody) {
//                 console.log(parsedBody);
//                 return parsedBody.shortLink;
//             })
//             .then((shortLink) => {
//                 post.shareUrl = shortLink;
//                 console.log('short link: ' + shortLink);
//                 return event.data.ref.set(post);
//             })

//     });

const express = require('express');
const app = express();
const router = express.Router();
const port = 8080;
const bodyParse = require('body-parser');

app.use(bodyParse.json());
require('./routes')(router);
app.use('/api/deep-link', router);

app.listen(port);
console.log('App Run on ' + port);

