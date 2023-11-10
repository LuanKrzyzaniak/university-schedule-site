import FollowButton from "./FollowButton";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function InfoCC () {

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
                <h2>{(majors[0] != undefined) ? majors[0].name : ""}<FollowButton/></h2>
                    <a href="https://cc.uffs.edu.br/horario/">Horário Oficial</a>
                <p>Curso de {(majors[0] != undefined) ? majors[0].name : ""} da Universidade Federal da Fronteira Sul.</p>
                <p>Coordenação: {(majors[0] != undefined) ? majors[0].coord : ""}</p>
            </header>
        </div>

    );

}
export default InfoCC;