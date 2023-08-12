const express = require('express');
const bodyParser = require('body-parser'); 

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

// Inserting Date on the App

app.get("/", (req,res)=>{
let presentDate = new Date();
let options = {  
    weekday: "long", month: "long",  
    day: "numeric" 
};  
let today = presentDate.toLocaleDateString("en-us",options);

res.render("index", {Day: today,newListItems: newItems});
})

const newItems = [];


app.post('/',(req, res)=> {
    let newItem = req.body.newItem;
   newItems.push(newItem);
    res.redirect('/');
})


app.listen(3000,() => console.log(`The Port is running on 3000`));