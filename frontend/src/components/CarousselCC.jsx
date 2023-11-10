import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function CarousselCC () {

    const[schedule,setSchedule] = useState({});

    useEffect(() =>{
        axios.get("http://localhost:6969/schedule")
        .then((query) => {
           setSchedule(query.data);
        })
        .catch((err) => {
            if(err) throw(err);
        });
    }, []);

    return (

    <div id="carouselCC" class="carousel slide">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <div class="container text-center">
                <header>
                    <h3>1º SEMESTRE</h3>
                </header>
                <div class="row row-cols-6">
                    <div class="col">Horário</div>
                    <div class="col">Segunda</div>
                    <div class="col">Terça</div>
                    <div class="col">Quarta</div>
                    <div class="col">Quinta</div>
                    <div class="col">Sexta</div>
                    
                    <div class="col">7:30</div>
                    <div class="col">{(schedule.cc1 != undefined) ? schedule.cc1.monday[0] : ""}</div>
                    <div class="col">{(schedule.cc1 != undefined) ? schedule.cc1.tuesday[0] : ""}</div>
                    <div class="col">{(schedule.cc1 != undefined) ? schedule.cc1.wednesday[0] : ""}</div>
                    <div class="col">{(schedule.cc1 != undefined) ? schedule.cc1.thursday[0] : ""}</div>
                    <div class="col">{(schedule.cc1 != undefined) ? schedule.cc1.friday[0] : ""}</div>
    
                    <div class="col">10:20</div>
                    <div class="col">{(schedule.cc1 != undefined) ? schedule.cc1.monday[1] : ""}</div>
                    <div class="col">{(schedule.cc1 != undefined) ? schedule.cc1.tuesday[1] : ""}</div>
                    <div class="col">{(schedule.cc1 != undefined) ? schedule.cc1.wednesday[1] : ""}</div>
                    <div class="col">{(schedule.cc1 != undefined) ? schedule.cc1.thursday[1] : ""}</div>
                    <div class="col">{(schedule.cc1 != undefined) ? schedule.cc1.friday[1] : ""}</div>
    
                    <div class="col">13:30</div>
                    <div class="col">{(schedule.cc1 != undefined) ? schedule.cc1.monday[2] : ""}</div>
                    <div class="col">{(schedule.cc1 != undefined) ? schedule.cc1.tuesday[2] : ""}</div>
                    <div class="col">{(schedule.cc1 != undefined) ? schedule.cc1.wednesday[2] : ""}</div>
                    <div class="col">{(schedule.cc1 != undefined) ? schedule.cc1.thursday[2] : ""}</div>
                    <div class="col">{(schedule.cc1 != undefined) ? schedule.cc1.friday[2] : ""}</div>
    
                    <div class="col">16:00</div>
                    <div class="col">{(schedule.cc1 != undefined) ? schedule.cc1.monday[3] : ""}</div>
                    <div class="col">{(schedule.cc1 != undefined) ? schedule.cc1.tuesday[3] : ""}</div>
                    <div class="col">{(schedule.cc1 != undefined) ? schedule.cc1.wednesday[3] : ""}</div>
                    <div class="col">{(schedule.cc1 != undefined) ? schedule.cc1.thursday[3] : ""}</div>
                    <div class="col">{(schedule.cc1 != undefined) ? schedule.cc1.friday[3] : ""}</div>
    
    
                    <div class="col">19:10</div>
                    <div class="col">{(schedule.cc1 != undefined) ? schedule.cc1.monday[4] : ""}</div>
                    <div class="col">{(schedule.cc1 != undefined) ? schedule.cc1.tuesday[4] : ""}</div>
                    <div class="col">{(schedule.cc1 != undefined) ? schedule.cc1.wednesday[4] : ""}</div>
                    <div class="col">{(schedule.cc1 != undefined) ? schedule.cc1.thursday[4] : ""}</div>
                    <div class="col">{(schedule.cc1 != undefined) ? schedule.cc1.friday[4] : ""}</div>
    
                    <div class="col">21:00</div>
                    <div class="col">{(schedule.cc1 != undefined) ? schedule.cc1.monday[5] : ""}</div>
                    <div class="col">{(schedule.cc1 != undefined) ? schedule.cc1.tuesday[5] : ""}</div>
                    <div class="col">{(schedule.cc1 != undefined) ? schedule.cc1.wednesday[5] : ""}</div>
                    <div class="col">{(schedule.cc1 != undefined) ? schedule.cc1.thursday[5] : ""}</div>
                    <div class="col">{(schedule.cc1 != undefined) ? schedule.cc1.friday[5] : ""}</div>
                </div>
                </div>
            </div>
            <div class="carousel-item">
            <div class="container text-center">
                <header>
                    <h3>2º SEMESTRE</h3>
                </header>
                <div class="row row-cols-6">
                    <div class="col">Horário</div>
                    <div class="col">Segunda</div>
                    <div class="col">Terça</div>
                    <div class="col">Quarta</div>
                    <div class="col">Quinta</div>
                    <div class="col">Sexta</div>
    
                    <div class="col">7:30</div>
                    <div class="col">{(schedule.cc1 != undefined) ? schedule.cc2.monday[0] : ""}</div>
                    <div class="col">{(schedule.cc2 != undefined) ? schedule.cc2.tuesday[0] : ""}</div>
                    <div class="col">{(schedule.cc2 != undefined) ? schedule.cc2.wednesday[0] : ""}</div>
                    <div class="col">{(schedule.cc2 != undefined) ? schedule.cc2.thursday[0] : ""}</div>
                    <div class="col">{(schedule.cc2 != undefined) ? schedule.cc2.friday[0] : ""}</div>
    
                    <div class="col">10:20</div>
                    <div class="col">{(schedule.cc2 != undefined) ? schedule.cc2.monday[1] : ""}</div>
                    <div class="col">{(schedule.cc2 != undefined) ? schedule.cc2.tuesday[1] : ""}</div>
                    <div class="col">{(schedule.cc2 != undefined) ? schedule.cc2.wednesday[1] : ""}</div>
                    <div class="col">{(schedule.cc2 != undefined) ? schedule.cc2.thursday[1] : ""}</div>
                    <div class="col">{(schedule.cc2 != undefined) ? schedule.cc2.friday[1] : ""}</div>
    
                    <div class="col">13:30</div>
                    <div class="col">{(schedule.cc2 != undefined) ? schedule.cc2.monday[2] : ""}</div>
                    <div class="col">{(schedule.cc2 != undefined) ? schedule.cc2.tuesday[2] : ""}</div>
                    <div class="col">{(schedule.cc2 != undefined) ? schedule.cc2.wednesday[2] : ""}</div>
                    <div class="col">{(schedule.cc2 != undefined) ? schedule.cc2.thursday[2] : ""}</div>
                    <div class="col">{(schedule.cc2 != undefined) ? schedule.cc2.friday[2] : ""}</div>
    
                    <div class="col">16:00</div>
                    <div class="col">{(schedule.cc2 != undefined) ? schedule.cc2.monday[3] : ""}</div>
                    <div class="col">{(schedule.cc2 != undefined) ? schedule.cc2.tuesday[3] : ""}</div>
                    <div class="col">{(schedule.cc2 != undefined) ? schedule.cc2.wednesday[3] : ""}</div>
                    <div class="col">{(schedule.cc2 != undefined) ? schedule.cc2.thursday[3] : ""}</div>
                    <div class="col">{(schedule.cc2 != undefined) ? schedule.cc2.friday[3] : ""}</div>
    
    
                    <div class="col">19:10</div>
                    <div class="col">{(schedule.cc2 != undefined) ? schedule.cc2.monday[4] : ""}</div>
                    <div class="col">{(schedule.cc2 != undefined) ? schedule.cc2.tuesday[4] : ""}</div>
                    <div class="col">{(schedule.cc2 != undefined) ? schedule.cc2.wednesday[4] : ""}</div>
                    <div class="col">{(schedule.cc2 != undefined) ? schedule.cc2.thursday[4] : ""}</div>
                    <div class="col">{(schedule.cc2 != undefined) ? schedule.cc2.friday[4] : ""}</div>
    
                    <div class="col">21:00</div>
                    <div class="col">{(schedule.cc2 != undefined) ? schedule.cc2.monday[5] : ""}</div>
                    <div class="col">{(schedule.cc2 != undefined) ? schedule.cc2.tuesday[5] : ""}</div>
                    <div class="col">{(schedule.cc2 != undefined) ? schedule.cc2.wednesday[5] : ""}</div>
                    <div class="col">{(schedule.cc2 != undefined) ? schedule.cc2.thursday[5] : ""}</div>
                    <div class="col">{(schedule.cc2 != undefined) ? schedule.cc2.friday[5] : ""}</div>
                </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev buttoncol" type="button" data-bs-target="#carouselCC" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselCC" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>

    );
}
export default CarousselCC;