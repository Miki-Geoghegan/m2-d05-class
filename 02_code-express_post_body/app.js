/**
 * TOC Express POST, body
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

 // need to tell the app to use something that is able to read from the body:
 // asking express to look in the body and give a json translation that can be used in JS
 // Necessary to read data from the body and will be available in express under body object
 app.use(express.json())
 app.use(express.urlencoded({
   extended: true
 }))
 
 // REGISTER THE PARTIAL
 hbs.registerPartials(__dirname + "/views/partials");
 
 // MIDDLEWARE
 
 // ROUTES
 app.get("/", (req, res) => {
   console.log(req);
   res.render("index");
 });

 app.post("/search", (req, res) => {
   const city = req.body.city // city is the name on the form we are referring to
   res.render('search')
 }) // telling express to listen for a post verb, only thing we then need to do is send the value in the search hbs to the current template


 app.listen(PORT)
