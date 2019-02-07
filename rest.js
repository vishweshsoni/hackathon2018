var mysql = require("mysql");
var md5 = require('md5');
var cors= require('cors');
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
                       var query = "SELECT * FROM order1";
                       connection.query(query,function(error,results){
                               if(error){
                                   res.json({
                                        "Error": true,
                                        "Msg": "Error Executing Mysql Query",
                                            });
                                     console.log(error);//logging error
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
                                       res.json(results);
                                   }
                           });
                    });

                 router.get("/users/:id",function(req,res){
                                            var query = "SELECT * FROM user WHERE user_id= ? ";
                                            var table=[req.params.id];
                                            query= mysql.format(query,table);
                                            connection.query(query,function(error,results){
                                                    if(error){
                                                        res.json({
                                                             "Error": true,
                                                             "Msg": "Error Executing Mysql Query",
                                                                 });
                                                          Console.log(error);//logging error
                                                    }else{
                                                        res.json(results);
                                                    }
                                            });
                                     });
            //Put query of user for updation of user details

            router.put("/users/:id",function(req,res){
                               var query = "UPDATE user SET user_email= ?, user_name=?, user_phone=?, user_address=?,user_pincode=?  WHERE user_id =?";
                                   var table=[req.body.user_email,req.body.user_name,req.body.user_phone,req.body.user_address,req.body.user_pincode,req.params.id];
                                                        query= mysql.format(query,table);
                                                        connection.query(query,function(error,results){
                                                                if(error){
                                                                    res.json({
                                                                         "Error": true,
                                                                         "Msg": "Error Executing Mysql Query",
                                                                             });
                                                                      console.log(error);//logging error
                                                                }else{
                                                                    res.json(results);

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
                 router.post("/order",function(req,res){
                     var c={
                     order_id : req.body.order_id,//here is the doubt is it foreign key?
                     customer_id : req.body.customer_id,
                     product_id: req.body.product_id,
                     product_quantity: req.body.product_quantity,
                     retailer_id: req.body.retailer_id,
                     date: req.body.date,
                     customer_otp :req.body.customer_otp,
                     verified : req.body.verified,
                                 };

                     var query ="INSERT INTO order1 SET ?";
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
            //insert into product data
                             router.post("/product",function(req,res){
                                 var c={
                                 product_id : req.body.product_id,//here is the doubt is it foreign key?
                                 product_name : req.body.product_name,
                                 product_price : req.body.product_price,
                                 product_color : req.body.product_color,
                                 product_warranty : req.body.product_warranty,
                                 product_specification: req.body.product_specification,
                                 fk_category_id : req.body.fk_category_id,
                                 product_img    :   req.body.product_img,
                                             };

                                 var query ="INSERT INTO product SET ?";
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
                                               "Results": results
                                             });}
                                 });
                               });

             //insert into retailor data
              router.post("/retailer",function(req,res){
                             var c={
                             retailer_id: req.body.retailer_id,
                             retailer_email: req.body.retailer_email,
                             retailer_password: req.body.product_name,
                             retailer_name: req.body.retailer_name,
                              retailer_city_id: req.body.retailer_city_id,
                              retailer_mobile:req.body.retailer_mobile,
                              retailer_pincode: req.body.retailer_pincode,
                                             };

                                 var query ="INSERT INTO retailer SET ?";
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
                                               "Results": results
                                             });}
                                 });
                               });

                  //insert services data
                 router.post("/services",function(req,res){
                              var c={
                              service_id: req.body.service_id,
                              retailer_id: req.body.retailer_id,
                              visiting_fees: req.body.visiting_fees,
                              availability: req.body.availability,
                               };
                                 var query ="INSERT INTO service_man SET ?";
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
                                                "Results": results
                                              });}
                                  });
                                });

                  //signup api
                 router.post("/signup",function(req,res){
                                      var c={
//                                      user_id : req.body.user_id,//here is the doubt is it foreign key?
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
                //login api
                 router.post("/login",function(req,res){

                                    var  user_email = req.body.user_email;
                                 var user_password = req.body.user_password;
                     var query ="SELECT * FROM user WHERE user_email=? AND user_password=?";
                     var table =[user_email,user_password];
                     query=mysql.format(query,table);
                     connection.query(query,function(error,results){
                       if(error){
                                  res.json({"error":true,
                                            "message":"error executing the mysql query"});
                                 console.log(error);

                               }
                        else {      res.json(results);
//                                       if(results.length>0){
//                                            if(results[0].user_password == user_password){
//                                                res.json({
//                                                    "error" : false,
//                                                    "message" : "Successfully Authentic",
//                                                     "result" : results
//                                                });
//
//                                            }
//                                            else{
//                                                res.json({
//                                                        "error": true,
//                                                         "Message": "Email and password does not match",
//                                                    });
//
//                                            }
//                                        }else{
//                                            res.json({
//                                                "error" : true,
//                                                "Message" : "Email doesnot exist",
//
//                                            });
//                                        }
                              }
                     });
                   });
                        //get service_man  with different area and in the ahmedabad according to the pincode
                           router.get("/getservicesman1/:id/:pincoce/:serviceid",function(req,res){

//                                var retailer_pincode= req.params.pincode;
//                                var id = req.params.id;

                                var query ="SELECT r.* FROM retailer r,services s,service_man sm WHERE sm.service_id = ? AND sm.retailer_id = r.retailer_id AND r.retailer_pincode != ? AND sm.availability = 1 AND r.retailer_city_id = ? GROUP BY r.retailer_id";
                                   var table=[req.params.id,req.params.pincoce];
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
                                                "Results": results
                                              });}
                                  });
                                });



                        //get service_man according to the pincode
                        router.get("/getservicesman/:id/:pincoce/:cityid",function(req,res){

//                                var retailer_pincode= req.params.pincode;
//                                var id = req.params.id;

                           var query ="SELECT r.* FROM retailer r,services s,service_man sm WHERE sm.service_id = ? AND sm.retailer_id = r.retailer_id AND r.retailer_pincode != ? AND sm.availability = 1 AND r.retailer_city_id=? GROUP BY r.retailer_id";
                           var table=[req.params.id,req.params.pincoce,req.params.cityid];
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
                                                "Results": results
                                              });}
                                  });
                                });



      }
module.exports = REST_ROUTER;