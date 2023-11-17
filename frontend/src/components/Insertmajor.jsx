import { Button } from "@mui/material";
import Banner from "./Banner";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function Insertmajor (){

    async function sendMajor (){

        axios.post("http://localhost:6969/sendmajor", {
            mname: document.forms[0].elements[0].value,
            mdesc: document.forms[0].elements[1].value
        })
        .then(() => {
           console.log('worked');
        })
        .catch((err) => {
            if(err) console.log(err);
        });
    }

    // const[majors,setMajors] = useState({});

    // useEffect(() =>{
    //     axios.get("http://localhost:6969/getmajors")
    //     .then((query) => {
    //        setMajors(query.data);
    //     })
    //     .catch((err) => {
    //         if(err) throw(err);
    //     });
    // }, []);

    return (
        <>
            <Banner/>
            <div className="divheader" style={{paddingTop:'12rem'}}>
                <header>
                <a href="../">
                    VOLTAR
                </a>
                    <h1>CADASTRAR CURSO</h1>
                    <p>Preencha o formulário abaixo para inserir o curso.</p>
                    <form>
                        <div>
                            <label for="maname">Nome do curso:</label><br/>
                            <input maxlenght='32' type="text" id="mname" name="mname"/><br/>
                        </div>
                        <div>
                            <label for="mdesc">Descrição do curso:</label><br/>
                            <input maxlenght='255' type="text" id="mdesc" name="mdesc"/><br/>
                        </div>
                    </form>
                    <div style={{paddingTop:"1rem"}}>
                            <a id="futurobotao" onClick={sendMajor}>Cadastrar</a>
                    </div>
                    <div>
                        <h3 style={{paddingTop:"2rem"}}>Cursos da UFFS </h3>

                    </div>
                </header>
            </div>
        </>
    );
}

export default Insertmajor;