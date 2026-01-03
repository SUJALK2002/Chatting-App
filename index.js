const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Chat = require("./models/chat.js");

const port = 8080;

app.set("view engine" , "ejs");
app.set("views",path.join(__dirname , "/views"));

app.use(express.static(path.join(__dirname , "/public")));
app.use(methodOverride("_method"));
app.use(express.urlencoded ({ extended : true}));

main()
    .then(()=>{
        console.log("Connected Successfully");
    })
    .catch((err)=>{
        console.log(err);
    })

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsap');
}


// Index route

app.get("/chats",async (req,res)=>{
    let chats = await Chat.find() ;
    res.render("index.ejs" , {chats});
})

app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
})

// update route

app.post("/chats" , (req,res)=>{
    let{from , msg ,to } = req.body;
    let newChat = new Chat ({
        from : from,
        msg : msg,
        to : to,
        created_at : new Date()
    });

newChat
    .save()
        .then((res)=>{
            console.log("Created successfully")
        })
        .catch((err)=>{
            console.log(err)
        })

    res.redirect("/chats");
})



app.get("/" , (req,res)=>{
    res.send("Welcome To Home Page");
})

app.get("/" , (req,res)=>{
    res.send("Welcome To Home Page");
})

app.listen(port , (req,res)=>{
    console.log(`Lisening on port : ${port}`);
})