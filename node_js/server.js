const http = require('http');
const url = require('url');
const MongoClient = require('mongodb').MongoClient;
var bodyParser =  require("body-parser");
const querystring = require('querystring');
const express=require('express');
const app =express();

const urlMongo = "mongodb://localhost:27017";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/login',function(req,res){

    const email = req.body.email;
    const motdepasse = req.body.motdepasse

    MongoClient.connect(urlMongo, function (err, client) {
    if (err) throw err;

    const db = client.db('shareyoursport');
    const query = {"motdepasse":motdepasse,"email":email};

    db.collection('utilisateurs').findOne(query,function (findErr, result) {
    if (findErr) throw findErr;
    if(result!=null)
    {
        if(email===result.email && motdepasse===result.motdepasse)
        {
        res.json({"login":"true"});
        }
     }
   else
    {
            res.json({"login":"false"});
    } 
    client.close();
    });

}); 

});//End of /login


app.post('/createUser',function(req,res){

    const pseudo = req.body.pseudo
    const email = req.body.email;
    const motdepasse = req.body.motdepasse

    MongoClient.connect(urlMongo, function (err, client) {
    if (err) throw err;

    const db = client.db('shareyoursport');
    const user = {"pseudo":pseudo,"motdepasse":motdepasse,"email":email};

    db.collection('utilisateurs').insertOne(user,function (findErr, result) {
    if (findErr) throw findErr;
  
    client.close();
    });

 

}); 

});//End of /createUser
app.listen(8080);
