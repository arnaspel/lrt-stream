const express = require('express');
const https = require('https');
const app = express();

app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Header", "Origin,X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  next();
});

app.use('/api/stream',(req, res, next)=>{

  https.get('https://www.lrt.lt/servisai/stream_url/live/get_live_url.php?channel=LTV1', (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {

      res.json(JSON.parse(data).response.data.content);
      });


  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });


});




module.exports = app;
