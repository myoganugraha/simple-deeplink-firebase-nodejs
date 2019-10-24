'use strict';

const axios = require('axios');

module.exports = router => {
    router.post('/', (req, res) => {

const domainPrefix = 'unilinkexample.page.link';
const link = 'https://dynamic.link.example/reset-password?';
let token = '1234g4u234g543jn2b';
let email = 'hahaha@gmail.com';
const iosBundleId = 'com.example.unilinkExample';
const androidPackageName = 'com.example.unilink_example';
const firebaseWebAPIkey = 'AIzaSyB2fjYKaP4VxsfNOJvvyN_zCae5u9NZaNo';

    axios.post(`https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${firebaseWebAPIkey}`, {
        "dynamicLinkInfo": {
            "domainUriPrefix": domainPrefix,
            "link": `${link}email=${email}&token=${token}`,
            "iosInfo": {
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
        .then((res1) => {
            res.status(200).json({
                message: res1.data.shortLink
            })
        })
        .catch((err1) => {
            res.status(400).json({
                message: err1.response.data
            })
        })
    })
}

