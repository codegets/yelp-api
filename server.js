const express = require('express');
const bodyParser = require('body-parser');

const reviewsApp = express();
const port = 3000;

reviewsApp.use(bodyParser.json());
reviewsApp.use(bodyParser.urlencoded({extended: true}) );
var cors = require('cors')
const yelp = require('yelp-fusion');
const client = yelp.client('F4kTu_bjrnBlsXAJM7-k9jvR0xmpS1x2JM1-hooJFjGf9z_uA-GAd39mvTCIO5V2RqaRrY8ecSJVFfzYR4thHHBeiFffxpmfCPRunVigkSRDL_jNJeW0pf_zFI23YXYx');


reviewsApp.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
reviewsApp.use(cors());

reviewsApp.post("/getBusiness", (req, res) => {
  client.search({
    term: req.body.term,
    location: req.body.location,
  }).then(response => {
    res.send(response);
  }).catch(e => {
    console.log(e);
    throw new Error(e);
  });
});

reviewsApp.post("/reviews", (req, res) => {
  client.reviews(req.body.id).then(response => {
    // console.log(response);
    res.send(response);
  }).catch(e => {
    console.log(e);
    throw new Error(e);
  });
});

reviewsApp.listen(port,()=> {
  console.log('listen port 3000');
})

