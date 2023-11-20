const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash")


const app = express();
app.set('view engine' , 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let startingtitle = "";

app.get("/" , function (req,res) {
    res.render("home" , {startingtitle: "Home"});
})

app.get("/contact" , function (req,res) {
    res.render("contact" , {startingtitle: "Contact"});
})

app.get("about" , function (req,res) {
    res.render("about");
})

app.get("/playlist" , function (req,res) {
    res.render("playlist");

})


// const app = express();
// app.set('view engine' , 'ejs');
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.static("public"));

// let startingtitle = "";


// app.get("/" , function (req,res) {
//     res.render("home" , {startingtitle: "Home"});
// })

// app.get("/contact" , function (req,res) {
//     res.render("contact" , {startingtitle: "Contact"});
// })



// app.get("/playlist" , function (req,res) {
//     res.render("playlist");

// })






app.listen("5000" , function () {
    console.log("server started running on port 5000");
})

