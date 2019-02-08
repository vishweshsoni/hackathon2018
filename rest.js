var otpGenerator = require('otp-generator');
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
            var query = "SELECT * FROM category ";
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
//    //get data from inventory table
//    router.get("/inventory",function(req,res){
//           var query = "SELECT * FROM inventory";
//           connection.query(query,function(error,results){
//                   if(error){
//                       res.json({
//                            "Error": true,
//                            "Msg": "Error Executing Mysql Query",
//                                });
//                         Console.log(error);//logging error
//                   }else{
//                       res.json({
//                           "Error": false,
//                           "Message":"Success",
//                           "Data":results
//
//                       });
//                   }
//           });
//    });
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

//      get data from inventory table
        router.get("/inventory/:id?",function(req,res){
                if(req.params.id){
                               var query = "select * from inventory as i join retailer as r on i.fk_retailer_id=r.retailer_id where product_id = ?";
                               var table=[req.params.id];
                               query =mysql.format(query,table);
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

                        }
                else{
                 var query = "SELECT * FROM inventory";
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
                                             }
                });
      //get data from product table
        // router.get("/product",function(req,res){
        //                var query = "SELECT * FROM product";
        //                connection.query(query,function(error,results){
        //                        if(error){
        //                            res.json({
        //                                 "Error": true,
        //                                 "Msg": "Error Executing Mysql Query",
        //                                     });
        //                              Console.log(error);//logging error
        //                        }else{
        //                            res.json({
        //                                "Error": false,
        //                                "Message":"Success",
        //                                "Data":results

        //                            });
        //                        }
        //                });
        //         });


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
              //past records url:"localhost:8110/pastrecords/1"
                  router.get("/pastrecords/:id",function(req,res){
  var query="select p.product_name,p.product_img,p.product_price * o.product_quantity,o.*,u.user_id from product p, order1 o,user u where customer_id = ? and o.product_id=p.product_id and u.user_id = o.customer_id";
                                  var table=[req.params.id];
                                  query=mysql.format(query,table);
                                  connection.query(query,function(error,results){
                                    if(error){
                                      res.json({
                                        "Error":true,
                                      "Msg":"Error Executing Mysql Query",
                                      });
                                      console.log("error");
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
//      router.post("/inventory",function(req,res){
//              var c={
//              fk_retailer_id : req.body.fk_retailer_id,//here is the doubt is it foreign key?
//              product_id : req.body.product_id,
//              stock: req.body.stock,
//              price: req.body.price,
//              delivery:req.body.delivery,
//                          };
//
//              var query ="INSERT INTO inventory SET ?";
//              var table =[c];
//              query=mysql.format(query,table);
//              connection.query(query,function(error,results){
//                if(error){
//                           res.json({"error":true,
//                                     "message":"error executing the mysql query"});
//                          console.log(error);
//
//                        } else {
//                          res.json({
//                            "error": false,
//                            "message": "Success",
//                            "users": results
//                          });}
//              });
//            });


            //insert into order data
                 router.post("/product",function(req,res){
                     
                                 var otp=otpGenerator.generate(6, { upperCase: false, specialChars: false,alphabets:false });
                                 console.log(otp);
                                 var c={
                                  order_id : req.body.order_id,//here is the doubt is it foreign key?
                                  customer_id : req.body.customer_id,
                                  product_id: req.body.product_id,
                                  product_quantity: req.body.product_quantity,
                                  retailer_id: req.body.retailer_id,
                                
                                  date: req.body.date,
                                  customer_otp:otp,
                                  verified : '0',
                                              };
                                //  text=text.concat(otp);
                                //  var demo={
                                //     'message':text,
                                //     'name':"vishweshsoni@gmail.com",
                                //     'subject':"NOREPLY - OTP Verification for Placed Order"
                                //  };
                                //  demo.sendMail(demo,callback);

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
                            //  router.post("/product",function(req,res){
                            //      var c={
                            //       order_id : req.body.order_id,//here is the doubt is it foreign key?
                            //       customer_id : req.body.customer_id,
                            //       product_id : req.body.product_id,
                            //       product_quantity : req.body.product_quantity,
                            //       date : req.body.date,
                            //      product_specification: req.body.product_specification,
                            //      customer_otp : req.body.customer_otp,
                            //      verified    :   req.body.verified,
                            //                  };

                            //      var query ="INSERT INTO order SET ?";
                            //      var table =[c];
                            //      query=mysql.format(query,table);
                                
                            //    });

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
                        //pass first cityid second pincode third  serviceid
                           router.get("/getservicesman1/:id/:pincoce/:serviceid",function(req,res){

//                                var retailer_pincode= req.params.pincode;
//                                var id = req.params.id;

                              //  var query ="SELECT r.* FROM retailer r,services s,service_man sm WHERE sm.service_id = ? AND sm.retailer_id = r.retailer_id AND r.retailer_pincode = ? AND sm.availability = 1 AND r.retailer_city_id=? GROUP BY r.retailer_id";
                                var query ="SELECT r.* FROM retailer r,services s,service_man sm WHERE sm.service_id = ? AND sm.retailer_id = r.retailer_id AND r.retailer_pincode <> ? AND sm.availability = 1 AND r.retailer_city_id = ? GROUP BY r.retailer_id";
                                   var table=[req.params.serviceid,req.params.pincoce,req.params.id];
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

                           var query ="SELECT r.* FROM retailer r,services s,service_man sm WHERE sm.service_id = ? AND sm.retailer_id = r.retailer_id AND r.retailer_pincode = ? AND sm.availability = 1 AND r.retailer_city_id=? GROUP BY r.retailer_id";
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

//        Malav routes start from here
        router.get('/product/:id?/:pin?',function(req,res){
                if(req.params.pin){


//                                    console.log(req.params.id);
//                                    console.log(req.params.pin);

var query = "select pro.*,Another.counts as counts from product as pro join(select count(*) as counts from inventory as i JOIN product as p on p.product_id=i.product_id join retailer as r on r.retailer_id = i.fk_retailer_id join category as c on c.category_id = p.fk_category_id where r.retailer_city_id= ? and i.stock > 0 and c.fk_cat_id = ?) as Another where pro.fk_category_id IN (select category_id from category where category.fk_cat_id = ?)"

var table=[req.params.pin,req.params.id,req.params.id];

                                                       query=mysql.format(query,table);
                                                       connection.query(query,function(error,results){
                                                                if(error){
                                                                           res.json({"error":true,
                                                                                     "message":"error executing the mysql query"});
                                                                          console.log(error);

                                                                        } else {

                                                                          res.json(results);
                                                                            }
                                                              });
                    }
                    else{
                        var query ="select * from category where fk_cat_id=0";

                        query=mysql.format(query);
                        connection.query(query,function(error,results){
                        if(error){
                            res.json({"error":true,
                               "message":"error executing the mysql query"});
                                    console.log(error);
                                } else {
                                        res.json(results);
                                         }
                                    });
                     }
        });
        router.get("/city",function(req,res){

                                   var query ="select * from city";

//                                   query=mysql.format(query,table);
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
    router.put("/city/:id",function(req,res){

                                       var query ="update user set user_city_id=? where user_id=?";
                                         var table=[req.body.user_city_id,req.params.id];
                                       query=mysql.format(query,table);
                                       connection.query(query,function(error,results){
                                                if(error){
                                                           res.json({"error":true,
                                                                     "message":"error executing the mysql query"});
                                                          console.log(error);

                                                        } else {
                                                          res.json(results);
                                                          }
                                              });
                                            });
       //jainam's city orderby name
       router.get("/cityo",function(req,res){

        var query ="select * from city order by city_name";
        connection.query(query,function(error,results){
                 if(error){
                            res.json({"error":true,
                                      "message":"error executing the mysql query"});
                           console.log(error);

                         } else {
                           res.json(results);
                           }
               });
             });
             //Zeel Admin site zeelgetmanservice

        router.post("/zeelgetserviceman",function(req,res){
          var c={
              //reatailer
              //serviceman
              retailer_id: req.body.retailer_id,
              retailer_email:req.body.retailer_email,
              retailer_password:req.body.retailer_password,
              retailer_name:req.body.retailer_name,
              retailer_city_id: req.body.retailer_city_id,
              retailer_mobile:req.body.retailer_mobile,
              retailer_pincode: req.body.retailer_pincode,

          };
          var query="insert into retailer set ?";
          var table=[c];
          query=mysql.format(query,table);
          connection.query(query,function(error,results){
            if(error){
                       res.json({"error":true,
                                 "message":"error executing the mysql query"});
                      console.log(error);

                    } else {
                         c={
                          service_id:req.body.service_id,
                          retailer_id:req.body.retailer_id,
                          visiting_fees:req.body.visiting_fees,
                          availability: req.body.availability,};

                          query ="insert into service_man set ?";
                          table=[c];
                          query=mysql.format(query,c);

                          connection.query(query,function(error,results1){
                              if(error){
                                res.json({"error":true,
                                "message":"error executing the mysql query"});
                                console.log(error);
                              }else{
                                  res.json(results1);
                              }
                          });
                      }
          });

        });
        //fenil's urgent query
        router.get("/serviceprice/:id",function(req,res){
          

        var query ="select visiting_fees from service_man where retailer_id = ?";
        var table=[req.params.id];
        query=mysql.format(query,table);
        connection.query(query,function(error,results){
                 if(error){
                            res.json({"error":true,
                                      "message":"error executing the mysql query"});
                           console.log(error);

                         } else {
                           res.json(results);
                           }
               });
             });
        //Zeel Login api
        router.post("/zeellogin",function(req,res){
            var c={
                retailer_email:req.body.retailer_email,
                retailer_password: req.body.retailer_password
            };

          var query ="select * from city order by city_name";
          connection.query(query,function(error,results){
                   if(error){
                              res.json({"error":true,
                                        "message":"error executing the mysql query"});
                             console.log(error);
  
                           } else {
                             res.json(results);
                             }
                 });
               });
               //Zeel Pending api
        router.get("/pendingorder/:rid",function(req,res){
              var query ="select * from product as p join inventory as i on p.product_id=i.product_id join retailer as r on r.retailer_id=i.fk_retailer_id join order1 as o on o.product_id=i.product_id join user as u on u.user_id=o.customer_id where o.retailer_id=? and o.verified=0 and o.verified_by_retailer=1 "
              // SELECT r.*,o.* FROM retailer as r JOIN order1 as o WHERE r.retailer_id=o.retailer_id and o.verified=1
              var table=[req.params.rid];
              query= mysql.format(query,table);
              connection.query(query,function(error,results){
                if(error){
                           res.json({"error":true,
                                     "message":"error executing the mysql query"});
                          console.log(error);

                        } else {
                          res.json(results);
                          }
              });

        });
        //Zeel admin side get retailor's past order
        router.get("/pastretailor/:rid",function(req,res){
          var query ="SELECT r.*,o.* FROM retailer as r JOIN order1 as o WHERE r.retailer_id=o.retailer_id and o.verified=1 and o.retailer_id=?";
          var table=[req.params.rid];
          query= mysql.format(query,table);
          connection.query(query,function(error,results){
            if(error){
                       res.json({"error":true,
                                 "message":"error executing the mysql query"});
                      console.log(error);

                    } else {
                      res.json(results);
                      }
          });

        });
        //shivani's orderservice post request
        router.post("/orderservice",function(req,res){
          var c={
            // order_s_id:req.body.order_s_id,
            customer_id: req.body.customer_id,
            retailer_id: req.body.retailer_id,
            price:req.body.price,
            // customer_otp:req.body.c
            verified:0,
            Address:req.body.Address,
          }
          var query ="insert into order_services set ?";
          var table=[c];
          query= mysql.format(query,table);
          connection.query(query,function(error,results){
            if(error){
                       res.json({"error":true,
                                 "message":"error executing the mysql query"});
                      console.log(error);

                    } else {
                      res.json(results);
                      }
          });

        });

      }
module.exports = REST_ROUTER;