const bodyParser = require('body-parser');
const majors = require('./majors'); //database
const schedule = require('./schedule');
const cors = require('cors');
// para inserir na lista, use push:
// db.cursos.push({ ... })


const express = require("express");
const app = express();
const port = 6969;

app.use(cors());

const pgp = require("pg-promise")({});
const usuario = "postgres";
const senha = "postgres";
const db = pgp(`postgres://${usuario}:${senha}@localhost:5432/uffs_curso`);

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

app.post("/sendmajor", async (req, res) => {
    try {
        const mname = req.body.mname;
        const mdesc = req.body.mdesc;

        if (mname === '' || mdesc === '') {
            console.log(error);
            res.status(400);
            return
        }

        db.none(
            "INSERT INTO major (mname, mdesc) VALUES ($1, $2);",
            [mname, mdesc]
        );
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});

app.get("/schedule", (req,res) =>{ //receber info
    res.json(schedule);
});

app.get("/getmajors") {
    
}

app.listen(port,() => {
    console.log(`Server opened on PORT ${port} :)`);
});
