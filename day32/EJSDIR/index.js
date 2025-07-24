import express from "express";
import path from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const instaData = require("./data.json");

const app = express();
// import { dirname } from "path";
// import { fileURLToPath } from "url";

const port = 3000;

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

app.set("view engine", "ejs");

// app.set("views", path.join(__dirname, "/  views"));

// app.get("/",(req,res)=>{
//     res.render("home.ejs"); //in ejs we dont send the response we render the response
// })

app.get("/rolldice", (req,res)=>{
    let dicevalue  = Math.floor(Math.random()*6)+1;
    res.render("rollDice.ejs",{num:dicevalue});
})

// app.get("/ig/:username",(req,res)=>{
//     let { username } = req.params;
//     // res.send(username);
//     res.render('instauser.ejs', {user:username});
// })

// //conditional statement in ejs

app.get("/dice",(req,res)=>{
    let dicevalue = Math.floor(Math.random()*6)+1;
    res.render("diceRoll.ejs", {num:dicevalue});
})

// //loops in ejs
app.get("/ig/usernames/:users",(req,res)=>{
    let followers = ["jai","karan","anurag","aditya","ashesh"];
    res.render('instaFollowers.ejs', {followers});
})

//instapage with ejs.

app.get("/ig/fullig/:username",(req,res)=>{
    let {username} = req.params;
    const data = instaData[username];
    // console.log(data);
    if(data){
        res.render("instaAcc.ejs", {data});
    }else{
        res.render("error.ejs");
    }
    // console.log(instaData);
})

app.listen(port, ()=>{
    console.log(`server is running at ${port}`)
})

 
