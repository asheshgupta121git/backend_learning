import express from "express";
const app = express();
const PORT = 3000;

//this line make data in express redable formate.
app.use(express.urlencoded({extended: true}));
//express can read json data
app.use(express.json());

//get requrest 
app.get("/register", (req,res)=>{
    let {user, password} = req.query;
    res.send(`get request welcome! ${user}`);
})

// post request 
app.post("/register",(req,res)=>{
    let {user, password}=req.body;
    res.send(`post request welcome ${user}`);   
})

app.listen(PORT, ()=>{
    console.log("server is running at port: ",PORT);
})
  


