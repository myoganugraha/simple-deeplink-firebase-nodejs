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

const axios= require('axios');

const domainPrefix = 'unilinkexample.page.link';
const link = 'https://dynamic.link.example/reset-password?';
let token = '1234g4u234g543jn2b';
let email = 'hahaha@gmail.com';
const iosBundleId = 'com.example.unilinkExample';
const androidPackageName = 'com.example.unilink_example';
const firebaseWebAPIkey = ''

axios.post(`https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${firebaseWebAPIkey}`, {
    "dynamicLinkInfo": {
        "domainUriPrefix": domainPrefix,
        "link": `${link}email=${email}&token=${token}`,
        "iosInfo":{
            "iosBundleId": iosBundleId
        },
        "androidInfo": {
            "androidPackageName": androidPackageName
        }
    },
    "suffix": {
        "option": "UNGUESSABLE"
      }
}, {
    headers: {
        'Content-Type': 'application/json'
    }
})
.then((res) => {
    console.log("data", res.data)
})
.catch((err) => {
    console.log("error", err.response.data)
})