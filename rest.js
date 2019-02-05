var mysql = require("mysql");
var md5 = require('md5');
function REST_ROUTER(router, connection, md5) {
  var self = this;
  self.handelRoutes(router, connection, md5);
}
REST_ROUTER.prototype.handelRoutes = function(router, connection, md5) {
    router.get("/", function(req, res) {
      res.json({
        "message": "hello world"
      });
    });
     //get data of category table
     router.get("/category",function(req,res){
            var query = "SELECT * FROM category";
            connection.query(query,function(error,results){
                    if(error){
                        res.json({
                             "Error": true,
                             "Msg": "Error Executing Mysql Query",
                                 });
                          Console.log(error);//logging error
                    }else{
                        res.json({
                            "Error": false,
                            "Message":"Success",
                            "Data":results

                        });
                    }
            });

     });
     //get data form city table
     router.get("/city",function(req,res){
            var query = "SELECT * FROM city";
            connection.query(query,function(error,results){
                    if(error){
                        res.json({
                             "Error": true,
                             "Msg": "Error Executing Mysql Query",
                                 });
                          Console.log(error);//logging error
                    }else{
                        res.json({
                            "Error": false,
                            "Message":"Success",
                            "Data":results

                        });
                    }
            });

     });
    //get data from inventory table
    router.get("/inventory",function(req,res){
           var query = "SELECT * FROM inventory";
           connection.query(query,function(error,results){
                   if(error){
                       res.json({
                            "Error": true,
                            "Msg": "Error Executing Mysql Query",
                                });
                         Console.log(error);//logging error
                   }else{
                       res.json({
                           "Error": false,
                           "Message":"Success",
                           "Data":results

                       });
                   }
           });
    });
    //get data from order table
    router.get("/feedback",function(req,res){
               var query = "SELECT * FROM feedback";
               connection.query(query,function(error,results){
                       if(error){
                           res.json({
                                "Error": true,
                                "Msg": "Error Executing Mysql Query",
                                    });
                             Console.log(error);//logging error
                       }else{
                           res.json({
                               "Error": false,
                               "Message":"Success",
                               "Data":results

                           });
                       }
               });
        });

      //get data from order table
        router.get("/inventory",function(req,res){
                       var query = "SELECT * FROM inventory";
                       connection.query(query,function(error,results){
                               if(error){
                                   res.json({
                                        "Error": true,
                                        "Msg": "Error Executing Mysql Query",
                                            });
                                     Console.log(error);//logging error
                               }else{
                                   res.json({
                                       "Error": false,
                                       "Message":"Success",
                                       "Data":results

                                   });
                               }
                       });
                });
      //get data from product table
        router.get("/product",function(req,res){
                       var query = "SELECT * FROM product";
                       connection.query(query,function(error,results){
                               if(error){
                                   res.json({
                                        "Error": true,
                                        "Msg": "Error Executing Mysql Query",
                                            });
                                     Console.log(error);//logging error
                               }else{
                                   res.json({
                                       "Error": false,
                                       "Message":"Success",
                                       "Data":results

                                   });
                               }
                       });
                });


    //get data from order table
        router.get("/order",function(req,res){
                       var query = "SELECT * FROM order";
                       connection.query(query,function(error,results){
                               if(error){
                                   res.json({
                                        "Error": true,
                                        "Msg": "Error Executing Mysql Query",
                                            });
                                     Console.log(error);//logging error
                               }else{
                                   res.json({
                                       "Error": false,
                                       "Message":"Success",
                                       "Data":results

                                   });
                               }
                       });
                });
        //get data from retailer table
            router.get("/retailer",function(req,res){
                           var query = "SELECT * FROM retailer";
                           connection.query(query,function(error,results){
                                   if(error){
                                       res.json({
                                            "Error": true,
                                            "Msg": "Error Executing Mysql Query",
                                                });
                                         Console.log(error);//logging error
                                   }else{
                                       res.json({
                                           "Error": false,
                                           "Message":"Success",
                                           "Data":results

                                       });
                                   }
                           });
                    });


//get data from services table
            router.get("/services",function(req,res){
                           var query = "SELECT * FROM services";
                           connection.query(query,function(error,results){
                                   if(error){
                                       res.json({
                                            "Error": true,
                                            "Msg": "Error Executing Mysql Query",
                                                });
                                         Console.log(error);//logging error
                                   }else{
                                       res.json({
                                           "Error": false,
                                           "Message":"Success",
                                           "Data":results

                                       });
                                   }
                           });
                    });

//get data from service_man table
            router.get("/service-man",function(req,res){
                           var query = "SELECT * FROM service_man";
                           connection.query(query,function(error,results){
                                   if(error){
                                       res.json({
                                            "Error": true,
                                            "Msg": "Error Executing Mysql Query",
                                                });
                                         Console.log(error);//logging error
                                   }else{
                                       res.json({
                                           "Error": false,
                                           "Message":"Success",
                                           "Data":results

                                       });
                                   }
                           });
                    });

//get data from users table
            router.get("/users",function(req,res){
                           var query = "SELECT * FROM user";
                           connection.query(query,function(error,results){
                                   if(error){
                                       res.json({
                                            "Error": true,
                                            "Msg": "Error Executing Mysql Query",
                                                });
                                         Console.log(error);//logging error
                                   }else{
                                       res.json({
                                           "Error": false,
                                           "Message":"Success",
                                           "Data":results

                                       });
                                   }
                           });
                    });

      //Insert into category table
      router.post("/category",function(req,res){
        var c={
        category_id : req.body.category_id,
        category_name : req.body.category_name,
                    };

        var query ="INSERT INTO category SET ?";
        var table =[c];
        query=mysql.format(query,table);
        connection.query(query,function(error,results){
          if(error){
                     res.json({"error":true,
                               "message":"error executing the mysql query"});
                    console.log(error);

                  } else {
                    res.json({
                      "error": false,
                      "message": "Success",
                      "users": results
                    });}
        });
      });

      //insert into feedback data
      router.post("/feedback",function(req,res){
              var c={
              feedback_id : req.body.feedback_id,
              order_id : req.body.order_id,
               description: req.body.description,
               rating: req.body.rating,
                          };

              var query ="INSERT INTO feedback SET ?";
              var table =[c];
              query=mysql.format(query,table);
              connection.query(query,function(error,results){
                if(error){
                           res.json({"error":true,
                                     "message":"error executing the mysql query"});
                          console.log(error);

                        } else {
                          res.json({
                            "error": false,
                            "message": "Success",
                            "users": results
                          });}
              });
            });


      //insert into inventory data
      router.post("/inventory",function(req,res){
              var c={
              fk_retailer_id : req.body.fk_retailer_id,//here is the doubt is it foreign key?
              product_id : req.body.product_id,
              stock: req.body.stock,
              price: req.body.price,
              delivery:req.body.delivery,
                          };

              var query ="INSERT INTO inventory SET ?";
              var table =[c];
              query=mysql.format(query,table);
              connection.query(query,function(error,results){
                if(error){
                           res.json({"error":true,
                                     "message":"error executing the mysql query"});
                          console.log(error);

                        } else {
                          res.json({
                            "error": false,
                            "message": "Success",
                            "users": results
                          });}
              });
            });

            //insert into order data
                 router.post("/inventory",function(req,res){
                     var c={
                     fk_retailer_id : req.body.fk_retailer_id,//here is the doubt is it foreign key?
                     product_id : req.body.product_id,
                     stock: req.body.stock,
                     price: req.body.price,
                     delivery:req.body.delivery,
                                 };

                     var query ="INSERT INTO inventory SET ?";
                     var table =[c];
                     query=mysql.format(query,table);
                     connection.query(query,function(error,results){
                       if(error){
                                  res.json({"error":true,
                                            "message":"error executing the mysql query"});
                                 console.log(error);

                               } else {
                                 res.json({
                                   "error": false,
                                   "message": "Success",
                                   "users": results
                                 });}
                     });
                   });
                  //signup api
                 router.post("/signup",function(req,res){
                                      var c={
                                      user_id : req.body.user_id,//here is the doubt is it foreign key?
                                      user_name : req.body.user_name,
                                      user_email : req.body.user_email,
                                      user_password : req.body.user_password,
                                      user_phone : req.body.user_phone,
                                      user_city_id : req.body.user_city_id,
                                      user_address : req.body.user_address,
                                      user_pincode : req.body.user_pincode,
                                                  };

                                      var query ="INSERT INTO user SET ?";
                                      var table =[c];
                                      query=mysql.format(query,table);
                                      connection.query(query,function(error,results){
                                        if(error){
                                                   res.json({"error":true,
                                                             "message":"error executing the mysql query"});
                                                  console.log(error);

                                                } else {
                                                  res.json({
                                                    "error": false,
                                                    "message": "Success",
                                                    "users": results
                                                  });}
                                      });
                                    });
//                    login api
                 router.post("/login",function(req,res){

                               var  user_name = req.body.user_name;
                                 var user_password = req.body.user_password;
                     var query ="SELECT * FROM user WHERE user_name = ?";
                     var table =[user_name];
                     query=mysql.format(query,table);
                     connection.query(query,function(error,results){
                       if(error){
                                  res.json({"error":true,
                                            "message":"error executing the mysql query"});
                                 console.log(error);

                               }
                        else {
                                       if(results.length>0){
                                            if(results[0].user_password == user_password){
                                                res.json({
                                                    "error" : false,
                                                    "message" : "Successfully Authentic",
                                                     "result" : results
                                                });

                                            }
                                            else{
                                                res.json({
                                                        "error": true,
                                                         "Message": "Email and password does not match",
                                                    });

                                            }
                                        }else{
                                            res.json({
                                                "error" : true,
                                                "Message" : "Email doesnot exist",

                                            });
                                        }
                              }
                     });
                   });




      }
module.exports = REST_ROUTER;