

const express=require("express");

const app=express();

const port=8080;

const path=require("path");

app.set('view engine','ejs');

app.set('views',path.join(__dirname,'/views'));

app.use(express.static(path.join(__dirname,"/public/css")))

app.use(express.static(path.join(__dirname,"/public/js")))

app.get('/home',(req,res)=>{

    res.render("home.ejs")
})

app.get("/rolldice",(req,res)=>{

    let diceVal=Math.floor(Math.random()*6)+1;

    res.render("rolldice.ejs",{diceVal});
})

app.get("/ins/:username",(req,res)=>{

    const instaData=require("./data.json");

    // console.log(instaData);
    const {username}=req.params;

   

    const data=instaData[username];
    if(data){
    res.render('instagram.ejs',{data});
    }else{
        res.render('error.ejs');
    }
})

app.listen(port,()=>{

    console.log(`app listening on port ${port}`);
})