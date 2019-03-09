const express = require('express');
const request = require('request');
const bodyParser = require('body-parser')
const app = express();
const moment = require('moment');
const monk = require('monk');
const axios = require('axios');

// global var to cache most recent event, could connect to db in future
var mostRecentGitHubEvent = {
    action: 'none',
    time: moment()
};
var mostRecentArbitraryData = {
    message: 'Hello everyone from the arbitrary endpoint!',
    action: 'none',
    data: {
        value1: true,
        value2: 5000,
    },
    time: moment(),
};

// parse the text as JSON and expose the result in req.body
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// add CORS headers to response so that the browser will not think this is malicious
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/*************************************
 * GET Endpoints
 *************************************/

 // Test whether the server is alive
app.get('/amialive', (req, res) => {
   res.send({data: "Yes, I'm alive!"});
});

// Arbitrary endpoint
app.get('/arbitrary', (req, res) => {
    res.send({ data: mostRecentArbitraryData });
});

/*************************************
 * POST Endpoints
 *************************************/
// Arbitrary End Point
app.post('/arbitrary', (req, res) => {
    console.log('\n\n*****************************************************');
    console.log('Received a post to /arbitrary...');


    mostRecentArbitraryData = {
        data: req.body.data,
        action: req.body.action,
        message: req.body.message,
        time: moment(),
    }
    console.log(JSON.stringify(req.body));
    console.log('*****************************************************');

    // respond that we received the post
    res.sendStatus(200);
});

app.listen(3001);
console.log('Listening on port 3001...');

