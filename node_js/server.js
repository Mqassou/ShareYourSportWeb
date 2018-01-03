const http = require('http');
const url = require('url');
const MongoClient = require('mongodb').MongoClient;
var bodyParser =  require('body-parser');
const querystring = require('querystring');
const express=require('express');
const app =express();

const urlMongo = 'mongodb://localhost:27017';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/login',function(req,res){

    const email = req.body.email;
    const motdepasse = req.body.motdepasse

    MongoClient.connect(urlMongo, function (err, client) {
    if (err) throw err;

    const db = client.db('shareyoursport');
    const query = {'motdepasse':motdepasse,'email':email};

    db.collection('utilisateurs').findOne(query,function (findErr, result) {
    if (findErr) throw findErr;
    if(result!=null)
    {
        if(email===result.email && motdepasse===result.motdepasse)
        {
        res.json({'login':'true'});
        console.log(result._id);
        }
     }
   else
    {
            res.json({'login':'false'});
    } 
    client.close();
    });

}); 

});//End of /login


app.post('/createUser',function(req,res){

    const pseudo = req.body.pseudo
    const email = req.body.email;
    const motdepasse = req.body.motdepasse
    const collection_name='utilisateurs';
    

    MongoClient.connect(urlMongo, function (err, client) {
    if (err) throw err;

    const db = client.db('shareyoursport');
    const user = {'pseudo':pseudo,'motdepasse':motdepasse,'email':email};

    db.collection(collection_name).insertOne(user,function (findErr, result) {
    if (findErr) throw findErr;
  
    client.close();
    });

 

}); 

});//End of /createUser



//$sport,$lieupratique,$ville,$adresse,$latitude,$longitude,$date,$heuredebut,$heurefin,$nbrpersonne,


app.post('/createEvent',function(req,res){

    const sport = req.body.sport
    const lieupratique = req.body.lieupratique;
    const ville = req.body.ville;
    const adresse = req.body.adresse;
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;
    const date = req.body.date;
    const heuredebut = req.body.heuredebut;
    const heurefin = req.body.heurefin;
    const nbrpersonne = req.body.nbrpersonne;
 
     const collection_name='evenements';

    MongoClient.connect(urlMongo, function (err, client) {
    if (err) throw err;

    const db = client.db('shareyoursport');
    const event = {
                    'sport':sport,
                    'lieupratique':lieupratique,
                    'ville':ville,
                    'adresse':adresse,
                    'latitude':latitude,
                    'longitude':longitude,
                    'date':date,
                    'heuredebut':heuredebut,
                    'heurefin':heurefin,
                    'nbrpersonne':nbrpersonne};

    db.collection(collection_name).insertOne(event,function (findErr, result) {
    if (findErr) throw findErr;
  console.log("send");
    client.close();
    });

 

}); 

});//End of /createEvenement


app.listen(8080);

 

