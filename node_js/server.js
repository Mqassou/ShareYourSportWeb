const http = require('http');
const url = require('url');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const bodyParser =  require('body-parser');
const querystring = require('querystring');
const express=require('express');
var session = require('express-session');

const app =express();
const urlMongo = 'mongodb://localhost:27017';


app.use(session({
  secret: 'shareyoursport',
  resave: false,
  saveUninitialized: true
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


 
app.post('/login',function(req,res){

    const email = req.body.email;
    const motdepasse = req.body.motdepasse
    const collection_name='utilisateurs';
 

    MongoClient.connect(urlMongo, function (err, client) {
    if (err) throw err;

    const db = client.db('shareyoursport');
    const query = {'motdepasse':motdepasse,'email':email};

    db.collection(collection_name).findOne(query,function (findErr, result) {
    if (findErr) throw findErr;
    if(result!=null)
    {
        if(email===result.email && motdepasse===result.motdepasse)
        {
        console.log('connected id:' +result._id);
       req.session.userid=result._id;
        res.send(req.session.userid);
       
        }
     }
   else
    {
            res.send('false');
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
    const query = {'pseudo':pseudo,'motdepasse':motdepasse,'email':email};

    db.collection(collection_name).insertOne(query,function (findErr, result) {
    if (findErr) throw findErr;
  
    client.close();
    });
}); 
});//End of /createUser

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
    const query = {
                    'sport':sport,
                    'lieupratique':lieupratique,
                    'ville':ville,
                    'adresse':adresse,
                    'latitude':latitude,
                    'longitude':longitude,
                    'date':date,
                    'heuredebut':heuredebut,
                    'heurefin':heurefin,
                    'nbrpersonne':nbrpersonne,
                    'participants':[]};

    db.collection(collection_name).insertOne(query,function (findErr, result) {
    if (findErr) throw findErr;
  console.log("created event");
    client.close();
    });

}); 
});//End of /createEvenement


app.get('/allEvent',function(req,res){
 

    const collection_name='evenements';

    MongoClient.connect(urlMongo, function (err, client) {
    if (err) throw err;

    const db = client.db('shareyoursport');
     

    db.collection(collection_name).find({}).toArray(function (findErr, result) {
    if (findErr) throw findErr;
    res.json(result);
    });

}); 
});//End of /allEvent

app.get('/totalEvent',function(req,res){


    const collection_name='evenements';

    MongoClient.connect(urlMongo, function (err, client) {
    if (err) throw err;

    const db = client.db('shareyoursport');
     

    db.collection(collection_name).count(function (findErr, result) {
    if (findErr) throw findErr;
    res.json({'total':result});
    });

}); 
});//End of /totalEvent

app.get('/allField',function(req,res){

    const email = req.body.email;
    const motdepasse = req.body.motdepasse
    const collection_name='terrains';

    MongoClient.connect(urlMongo, function (err, client) {
    if (err) throw err;

    const db = client.db('shareyoursport');
     

    db.collection(collection_name).find({}).toArray(function (findErr, result) {
    if (findErr) throw findErr;
    res.json(result);
    });

}); 
});//End of /allField

app.post('/dataUser',function(req,res){

    const userId = req.body.userId;
    const collection_name='utilisateurs';

    MongoClient.connect(urlMongo, function (err, client) {
    if (err) throw err;

    const db = client.db('shareyoursport');
  

    const query = {'_id':new ObjectID(userId)};

    db.collection(collection_name).findOne(query,function (findErr, result) {
    if (findErr) throw findErr;
    if(result!=null)
    {
       result.motdepasse="";
        res.json(result);

        
     }
   else
    {
            res.json({'userId':'false'});
    } 
    client.close();
    });

    }); 
});//End of /dataUser

app.post('/updateDataUser',function(req,res){

    const userId = req.body.userId
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const pseudo = req.body.pseudo;
    const adresse = req.body.adresse;
    const ville = req.body.ville;
    const date_de_naissance = req.body.date_de_naissance;
    const email = req.body.email;
    const tel = req.body.tel;
    const sexe = req.body.sexe;
    const password = req.body.password;
    const mdp_modifie = req.body.mdp_modifie;

 
     const collection_name='utilisateurs';

    MongoClient.connect(urlMongo, function (err, client) {
    if (err) throw err;

    const db = client.db('shareyoursport');
    const query = {'_id':new ObjectID(userId)};
  
    let newValue="";
    if(mdp_modifie==='true')
    {
        newValue = {
                         '$set':{
                                 'nom':nom,
                                 'prenom':prenom,
                                 'pseudo':pseudo,
                                 'adresse':adresse,
                                 'ville':ville,
                                 'date_de_naissance':date_de_naissance,
                                 'email':email,
                                 'tel':tel,
                                 'sexe':sexe,
                                 'password':password
                                 }
                        
                    };
    }
    else
    {
          newValue = {
                         '$set':{
                                 'nom':nom,
                                 'prenom':prenom,
                                 'pseudo':pseudo,
                                 'adresse':adresse,
                                 'ville':ville,
                                 'date_de_naissance':date_de_naissance,
                                 'email':email,
                                 'tel':tel,
                                 'sexe':sexe
                                 }
                        
                    };
    }
    

    db.collection(collection_name).updateOne(query,newValue,function (findErr, result) {
    if (findErr) throw findErr;
    console.log("updated");
    client.close();
    });

}); 
});//End of /updateDataUser


app.post('/joinEvent',function(req,res){

    const userId = req.body.userId
    const eventId = req.body.eventId;

     const collection_name='evenements';

    MongoClient.connect(urlMongo, function (err, client) {
    if (err) throw err;

    const db = client.db('shareyoursport');
    const query = {'_id':new ObjectID(eventId)};
  
    let newValue="";
                                          
        newValue = {
                     '$push':{'participants':new ObjectID(userId)}                  
                    };
   
    

    db.collection(collection_name).updateOne(query,newValue,function (findErr, result) {
    if (findErr) throw findErr;
    console.log("joined event");
    client.close();
    });

}); 
});//End of /joinEvent

app.listen(8080);

 

/*
TEST

app.post('/login',function(req,res){
req.session.views="truc";
  res.send('you viewed this page ' + req.session.views + ' times')
})

app.get('/allEvent', function (req, res) {

  res.send('you viewed this page ' + req.session.views + ' times')
})
app.listen(8080);


*/