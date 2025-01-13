const form = document.querySelector('form');
const km = document.getElementById('km');
const age = document.getElementById('number')

const kmroutes = km.value;
const price = document.getElementById('price');

// fuzione

form.addEventListener('submit', (travel) => {

    // evitare il comportamento di default del form

    travel.preventDefault();

    // calcolare il prezzo del biglietto in base ai km

    let prezzo = kmroutes * 0.21;
    console.log("la somma è: €", prezzo);
     
    // ELABORAZIONE DELLO SCONTO IN BASE ALL'ETà

    //  SE l'età è > 18  sconto del 20%

    if (age.value < 18){
        
        prezzo = prezzo * 0.80;

    //  SE l'età è > 65 sconto del 20%

    } else if (age.value >= 65){

        prezzo = prezzo * 0.60;

    }else{
        prezzo;
    }

    // output

    console.log("il prezzo finale è di: ", prezzo.toFixed(2));

    // prezzo finale mostrato in pagina

    price.innerHTML = `${"il prezzo da pagare è :"} ${prezzo.toFixed(2) + "€"}`;

});