/**
 * TOC Express GET, query and params
 * 
 */

 const express = require("express");
 const hbs = require("hbs");
 const app = express();
 const PORT = 3000;
 
 // SET THE TEMPLATE ENGINE
 app.set("view engine", "hbs");
 app.set("views", __dirname + "/views");
 
 // SET THE STATIC FOLDER FOR PUBLIC FILES
 app.use(express.static(__dirname + "/public"));
 
 // REGISTER THE PARTIAL
 hbs.registerPartials(__dirname + "/views/partials");
 
 // MIDDLEWARE
 
 // ROUTES
 app.get("/", (req, res) => {
   console.log(req);
   res.send("You reached the root of the server");
 });

 app.listen(PORT)
