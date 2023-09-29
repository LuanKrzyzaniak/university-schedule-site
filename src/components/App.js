import Banner from "./Banner";
import Head from "./Head"
import CarousselCC from "./CarousselCC";
import CarousselCS from "./CarousselCS";
import InfoCC from "./InfoCC";
import InfoCS from "./InfoCS";

function App () {
    return(
    <>
        <Banner/>
        <Head/>
        <InfoCC/>
        <CarousselCC/>
        <InfoCS/>
        <CarousselCS/>
    </>
    );
}

export default App;





/*
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░▒░▒▒▒▒▒░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░═▒▓▒░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒═▒████▒═░░▒▒▒▒▒▒▒░▒▒▒▒▒▒▒
▒▒▒▒▒▒░░▒▒▒▒▒▒▒▒═██▒▒▓█▒─░▒▒▒▒▒▒▒░░▒▒▒▒▒▒
▒▒▒▒▒▒░░▒▒▒▒▒▒░░─█▓▓▓▒▓█░═▒▒▒▒▒▒░░░░▒▒▒▒▒
▒▒▒▒░░░░░▒▒▒░░▒▓░██▒▓▓▒▓█░░▒▒▒▒▒░░░░░▒▒▒▒
▒▒▒▒░░░░░░▒░▒██████▓▒▓▓▒██░░▒▒▒░░░░░░░▒▒▒
▒▒▒░░░░░░░░▒█▓▒▒▒▒███▒▓▓▒█▒░░▒▒░░░░░░░░▒▒
▒▒▒░░░░░░═░██▒▓▓▓▓▒▓██▓▓▓▓█═░▒░═░░░░░░░░▒
▒▒░░░░░░░══▒██▓▒▒▓▓▒▒██▓▓▒█░░▒══░░░░░░░░▒
─░▒░░░░░░═─═░▓█████▓▓▒▓▓▓▒▓█░═─══░░░░░░░▓
─═▒░░░░░══─═══██▓▓▓▓▓▓▓▓▓▓▒██═─═══░░░░░▒▒
─═▒░░░░═══──═██▒▒▓▓▓▓▓▓▓▓▓▒▒██──═══░░░░▓░
──▒░░░════──██▒▓▓▓▓▓▓▓▓▓▓▓▓▒▒██──══░═░▒▒░
──▒░░════──▓█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒██──═══░▒▒▒
──▒▒════──═██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒██───═▒▒▒▒
──▓▒░─═───██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒█░──░▒▒▒▒
──▓▒▒═───░█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▓█─═▒▒▒▒▒
──▓▒▒░───██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒█▒═░░░▒▒
───▒▒░═─░█▓▓▓▓▓▓▓▓▓▓▓▒▓▓▓▓▓▓▓▓▓▓▓▓█═░░░▒░
─────▒░─██▓▓▓▓▓▓▓▓▓▓▓█▓▒▓▓▓▓▓▓▓▓▓▒█▒═░░▒▒
─────█░═██▓▓▓▓▓▓▓▓▓▒███▒▒▓▓▓▓▓▓▓▒███═░▒▒─
────██▒░█▓▓▓▓▓▓▓▓▓▓▒████▒▒▓▓▓▓▓▒████░░░──
──█──████▓▓▓▓▓▓▓▓▓▓▓█████▓▒▓▓▓▒█████▒░───
──██░░██▓▓▓▓▓▓▓▓▓▓▓▒██████▓▒▒▒███████────
─▒██████▓▓▓▓▓▓▓▓▓▓▓▓▒███████▓████████────
─═██████▓▓▓▓▓▓▓▓▓▓▓▓▓█──██████████▒▓█────
─────▓██▓▓▓▓▓▓▓▓▓▓▓▓█▒────▒███═──█▓▓█────
────████▓▓█▓▓▓▓▓█▓▓▓█▒──██──▓█───██▓█────
───═█▒██▓▓▓▓▓▓▓▓██▓▓█▓──▓▓──▓░─▒▓██▓█────
──────██▓▓▓▓▓▓▓▓██▓▓██──═─═████████▓█────
──────██▓▓▓▓▓▓▒▓██▓▓▓█████▓──░████▓▓█────
──────██▓▓▓▓██▓▓██▓▓█████░─────██▓█▓█────
──────██▓▓▓▓██▓▓██▓▓████▒──═══──██▓██────
──────██▓▓▓▓██▓▒████████───════─░█▓██────
──────▒█▓▓▓▓▓█▓▓██▓▒░═▓█─────────▓██▒────
──────░█▓▓▓▓▓▓██▓═────▓█▓▒░═─────═██─────
───────██▓▓▓▓██░───══─▓──█████▓░──██─────
───────██▓▓▓██═───═══─▒█▓▒═─══░██─██─────
──────░▒██▓██═─═─═░═══─██──═──▒████░─────
──────▒░▒███═─══░░═════─▓█═──█▒▓▓██░─────
──────═▒░██▒──══════════─▒█▒█▒─▒██▒░─────
───────═▒░██▒──══════════─░█▒──██▓▒──────
─────────▒░███░───════════────███░───────
─────────░▒░▓███░──────────═▓██▓░────────
──────────▒▒░░█████▓▒░░░▒█████░░─────────
═──────────▒▒░░░▓███████████▒░▒▒─────────
─═──────────░▒▒▒░░░▒▒▓▓▓▒░░░░▒▒──────────
──────────────░═░▒░░░░░░░▒▒▒▒────────────
──────────────────▒▒▒▒▒▒▒░───────────────
────═─────────────═░═──░───────────────── 
*/