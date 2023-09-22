const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 6969;

app.use(bodyParser.json());

app.use(express.static(`${__dirname}/public`));

app.get("/horarios", (req,res) =>{
    res.sendFile(`${__dirname}/public/index.html`)
});

app.listen(port,() => {
    console.log(`Server opened on PORT ${port} :)`);
});