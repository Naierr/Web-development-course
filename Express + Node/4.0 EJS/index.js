import express from "express";

const app = express();
const port =3000;

app.get("/",(req,res) =>{
    const x=new Date("June 23 2023");
    // console.log(x);
    const d=x.getDay();
    res.render("index.ejs",{
        dayType:dayType(d),
    advice: advice(d)});
});

function dayType(x){
    if(x===(5 || 6)){
        return "a weekend :D ";
    }
    else{
        return "a weekday :(";
    }
}
function advice(x){
    if(x===(5 || 6)){
        return "Let's have fun!";
    }
    else{
        return "Let's get to work!";
    }
}
app.listen(port,() => {
    // console.log(new Date());
    console.log(`Server running on port ${port}.`);
});