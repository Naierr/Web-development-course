import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Naier</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +201203036161</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// import express from "express";
// const app = express();
// const port =3000;


// app.get("/", (req,res) => {
//   // console.log(req.rawHeaders);
//   res.send("<h1>Hello,Naier</h1>");
// })

// app.listen(port, () =>{
//   console.log(`Server started on port ${port}`);
// })