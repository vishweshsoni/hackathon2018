const http = require('http'); //for http request
const mysql =require('mysql');
const express= require('express');
const fs= require('fs');
const rest=require('./rest.js');
var app=express();
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
            app.listen(3000,function(){
                console.log("All Right I'm Alive");
            });
        }

 new REST();

//
////creating connection to the database
//connection.connect();
////function index(request,response) {
////  response.writeHead(200);
////  response.end('Hello world');
////}
//
//http.createServer(function(request,response) {
//  if(request.url in routes){
//    return routes[request.url](request,response);
//  }
//    response.writeHead(404);
//    response.end(http.STATUS_CODES[404]);
//}).listen(1337);
//
//var routes={
//    //Hello World Simple testing
//  '/':function index(req,res) {
//    res.writeHead(200);
//    res.end('Hello,world');
//
//  },
//  '/foo':function foo(request,response) {
//    response.writeHead(200);
//
//        },
//    '/catagory':function catagory_response(req,res){
//        res.writeHead(200);
//        var
//
//        }
//    };
