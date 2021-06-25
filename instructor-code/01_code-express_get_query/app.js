/**
 * TOC Express GET, query and params
 * 
 */

 const express = require("express");
 const hbs = require("hbs");
 const app = express();
 const path = require('path')
 const PORT = 3001;
 
 
 // SET THE TEMPLATE ENGINE
 app.set("view engine", "hbs");
 app.set("views", path.join(__dirname, "/views"));
 
 // SET THE STATIC FOLDER FOR PUBLIC FILES
 app.use(express.static(path.join(__dirname, "/public")));
 
 // REGISTER THE PARTIAL
 hbs.registerPartials(path.join(__dirname, "/views/partials"));

 // ROUTES
 // localhost:3000?q=how%20are%20you&username=Marco
 app.get("/", (req, res) => {
   console.log(req.query);
   const q = req.query.q
   const username = req.query.username
   res.render("index", {q, username});
  });
  
  app.get("/search", (req,res) => {
    
    const city = req.query.city
    
    const startDate = req.query['start-date']
    
    const endDate = req.query['end-date']
    res.render("search", {city, startDate, endDate});

})

// This ia a dynamic URL parameter that is available to me in req.params
// If I receive a URL of the form localhost:3000/english
// then english will be the value of my language parameter
app.get("/news/:language", (req, res)=>{
  const lang = req.params.language
  res.render("news", {lang});
})


 app.listen(PORT)
