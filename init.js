const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

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

let allChat = [
    { 
        from: "Sujal",
        to: "phipoli",
        msg: "Hi i am auu",
        created_at: new Date()
    },
    { 
        from: "phipoli",
        to: "Sujal",
        msg: "Hey Sujal! How are you?",
        created_at: new Date()
    },
    { 
        from: "Sujal",
        to: "phipoli",
        msg: "I’m good, just working on a project.",
        created_at: new Date()
    },
    { 
        from: "phipoli",
        to: "Sujal",
        msg: "Oh nice! What kind of project?",
        created_at: new Date()
    },
    { 
        from: "Sujal",
        to: "phipoli",
        msg: "It’s a chat application using JavaScript.",
        created_at: new Date()
    },
    { 
        from: "phipoli",
        to: "Sujal",
        msg: "That sounds cool! Are you adding database support too?",
        created_at: new Date()
    },
    { 
        from: "Sujal",
        to: "phipoli",
        msg: "Yes, planning to use MongoDB for messages.",
        created_at: new Date()
    }
];

// Chat.deleteMany()
// .then((res)=>{
//         console.log(res);
//     })

Chat.insertMany(allChat)
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })
