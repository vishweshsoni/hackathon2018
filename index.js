const http = require('http'); //for http request
const mysql =require('mysql');
const express= require('express');
const fs= require('fs');
const rest=require('./rest.js');
var cors= require('cors');
var app=express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
const bodyparser = require("body-parser");
const hostname = '127.0.0.1';
function REST(){
    var self=this;
    self.connectMysql();

};
REST.prototype.connectMysql =function(){
    var self =this;
     var pool =mysql.createPool({
        connectionLimit:100,
        host:'localhost',
        user:'root',
        password:'',
        database:'alpazo_db',
        debug:false
     });
   pool.getConnection(function (err,connection) {
       if(err){

             self.stop(err);
             console.log(err);

       }else{
             self.configureExpress(connection);
       }
   });
 }

 REST.prototype.configureExpress = function(connection){
        var self=this;
        app.use(bodyparser.urlencoded({extended:true}));
        app.use(bodyparser.json());
        var router= express.Router();
        app.use('/',router);
            var rest_router=new rest(router,connection);
            self.startServer();
            }

        REST.prototype.startServer = function(){
            app.listen(8110,function(){
                console.log("All Right I'm Alive");
            });
        }

 new REST();

