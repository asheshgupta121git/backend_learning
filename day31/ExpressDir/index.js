import express from "express";
const app = express();
// console.dir(app);

let port = 3000; //8080

app.listen(port, ()=>{
    console.log(`app listening on port ${port}`);
})

// get request

app.get("/",(req,res)=>{
    res.send("home page");
})
app.get("/index",(req,res)=>{
    res.send("index page");
})
app.get("/register",(req,res)=>{
    res.send("register page");
})
app.get("/dashboard",(req,res)=>{
    res.send("dashboard page");
})

// post request 
app.post("/",(req,res)=>{
    res.send("you send a post request");
})

//path parameters
app.get("/:username/:id",(req,res)=>{
    // console.log(req.params); 
    let { username, id } = req.params;
    // res.send("hello im rooot");
    // res.send(`hello master ${username} welcome!`);
    //we can also send html request.
    let code = `<h1>hello master ${username} welcome!</h1>`;
    res.send(code);
})


//query string
app.get("/search", (req, res)=>{
    // console.log(req.query);
    let { name, color } = req.query;
    // res.send("no result");
    res.send(`query result : ${name} fruit and color is ${color} `);
});

// app.use((req,res)=>{
//     console.log("request recived");
//     //sending a string 
//     // res.send("this is a basic response");

//     //sending a object
//     // res.send({
//     //     name:"ashu",
//     //     color: "brown"
//     // })

//     //sending a html response
//     let code = "<h1>fruits</h1><ul><li>apple</li><li>mango</li></ul>"
//     res.send(code);
// })