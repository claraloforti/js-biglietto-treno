// Programma per generare prezzo biglietto del treno
// Il programma dovrà chiedere all'utente il num.km che vuole percorrere e l'età del passeggero.

// DATI:
// il prezzo del biglietto è definito in base ai km (0.21 € al km).
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali). 


// SETUP
// Dichiaro prezzo e prezzo scontato
let price, minorDiscount;

// INPUT
// Chiedo a User numero km 
const numKm = parseInt(prompt("Scrivi il numero di chilometri che vuoi percorrere"));
// Chiedo a User età
const userAge = parseInt(prompt("Scrivi l'età del passeggero"));
console.log(numKm, userAge);


// ELABORAZIONE
// Moltiplico il numero km per 0.21 per ottenere prezzo
price = (numKm * 0.21);

// Se l'utente è minorenne, applico uno sconto del 20% al prezzo
if (userAge < 18) {
    price = (price * 0.8);
}

// Se l'utente è over 65, applico uno sconto del 40%
if (userAge >= 65) {
    price = (price * 0.6);
}

// OUTPUT
document.getElementById("ticketprice").textContent = "Il prezzo del tuo biglietto è: " +
    price.toLocaleString("it-IT", { style: "currency", currency: "EUR" });











// PER VERIFICARE:
// 100km, 10 anni => prezzo corretto:  €16.80
// 100km, 70 anni => prezzo corretto: €12.60