import FollowButton from "./FollowButton";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function InfoCS () {

    const[majors,setMajors] = useState({});

    useEffect(() =>{
        axios.get("http://localhost:6969/majors")
        .then((query) => {
           setMajors(query.data);
        })
        .catch((err) => {
            if(err) throw(err);
        });
    }, []);

    return (

        <div id="cc" className="divheader">
            <header>
                <h2>{(majors[1] != undefined) ? majors[1].name : ""}<FollowButton/></h2>
                    <a href="https://cc.uffs.edu.br/horario/">Horário Oficial</a>
                <p>Curso de {(majors[1] != undefined) ? majors[1].name : ""} da Universidade Federal da Fronteira Sul.</p>
                <p>Coordenação: {(majors[1] != undefined) ? majors[1].coord : ""}</p>
            </header>
        </div>

    );

}
export default InfoCS;