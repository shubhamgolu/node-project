const express = require('express');
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT ||  8000;


//  for public page access
const staticPath = path.join(__dirname,"../public");
const templatespath = path.join(__dirname,"../templates/views")
const parcialpath = path.join(__dirname,"../templates/partials")
console.log(parcialpath);

// ---------------------------   set hbs   ---------------------------

app.set('view engine', 'hbs');
app.set("views",templatespath);

hbs.registerPartials(parcialpath)
// app.engine('hbs', "");


app.use(express.static(staticPath));
app.get("", (req,res)=>{
    res.render("index");
})

app.get("/aboutus", (req,res)=>{
    res.render("about");
})

app.get("/contact", (req,res)=>{
    res.render("contact");
})

app.get("*", (req,res)=>{
    res.render("404");
})

app.listen(port,()=>{
    console.log("listen Port 8000")
})
