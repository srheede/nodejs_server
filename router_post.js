
const express = require('express');
const router = express.Router();
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

var xmlRequest = new XMLHttpRequest();

router.post('/', (req, res, next) => {
    const user = {
        firebaseID: req.body.firebaseID,
        data: req.body.data
    }

    xmlRequest.open("POST", "http://192.168.8.101:8888/SQL/index.php?firebaseID=" + user.firebaseID + "&data=" + user.data, true);
    xmlRequest.send();

    res.status(201).json({
        message: 'User saved:',
        savedUser: user
    });

});

module.exports = router;