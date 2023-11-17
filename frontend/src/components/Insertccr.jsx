import Banner from "./Banner";
import axios from "axios";

function Insertccr (){

    async function sendCCR (){

        axios.post("http://localhost:6969/sendCCR", {
            mid: document.forms[0].elements[0].value,
            ccrname: document.forms[0].elements[1].value
        })
        .then(() => {
           console.log('worked');
        })
        .catch((err) => {
            if(err) console.log(err);
        });
    }

    return (
        <>
            <Banner/>
            <div className="divheader" style={{paddingTop:'12rem'}}>
                <header>
                <a href="../">
                    VOLTAR
                </a>
                    <h1>CADASTRAR CCR</h1>
                    <p>Preencha o formulário abaixo para inserir o ccr.</p>
                    <form>
                        <div>
                            <label for="maname">ID do curso:</label><br/>
                            <input maxlenght='32' type="text" id="mname" name="mname"/><br/>
                        </div>
                        <div>
                            <label for="mdesc">Nome do CCR:</label><br/>
                            <input maxlenght='32' type="text" id="mdesc" name="mdesc"/><br/>
                        </div>
                    </form>
                    <div style={{paddingTop:"1rem"}}>
                            <a id="futurobotao" onClick={sendCCR}>Cadastrar</a>
                    </div>
                    <div>
                        <h3 style={{paddingTop:"2rem"}}>CCRS da UFFS </h3>

                    </div>
                </header>
            </div>
        </>
    );
}

export default Insertccr;