var express = require('express');
var app = express();
var feedparser = require('ortoo-feedparser');
const feedparser1 = require('feedparser-promised');
//const url = "http://iwnsvg.com/feed"; 
var bodyParser=require('body-parser');
// parse application/json 
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname));
app.post("/api/rssfeed",rssFeed);
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});
function rssFeed(req,res){
    var rssurl=req.body;
	feedparser1.parse(rssurl).then( (items) => {
    items.forEach( (item) => {
      console.log(`title1: ${item.title}`);
    });
    res.send(items);
  }).catch( (error) => {
    console.log('error: ', error);
  });
}
app.listen('3000',function(){
	console.log("listening on localhost:3000");
});