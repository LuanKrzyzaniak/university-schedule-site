const bodyParser = require('body-parser');
const majors = require('./majors'); //database
const schedule = require('./schedule');
const cors = require('cors');
// para inserir na lista, use push:
// db.cursos.push({ ... })


// para remover da lista, use splice passando o índice do elemento e a quantidade de
// elementos a serem removidos. Exemnplo para remover o primeiro elemento:
// db.cursos.splice(0, 1) remove um elemento a partir do índice 0

const express = require("express");
const app = express();
const port = 6969;

app.use(cors());

app.use(bodyParser.json());

app.get("/majors", (req,res) =>{ //receber info
    res.json(majors);
});

app.post("/follow"), (req,res) =>{
    if (req.body == 1) {
        console.log("Recebi follow");
    } else {
        console.log("Recebi unfollow");
    }
}

app.get("/schedule", (req,res) =>{ //receber info
    res.json(schedule);
});

app.listen(port,() => {
    console.log(`Server opened on PORT ${port} :)`);
});
