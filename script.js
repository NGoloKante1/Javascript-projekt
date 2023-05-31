function generateRondelet() {
    let sentence1 = document.getElementById("sentence1").value;
    let sentence2 = document.getElementById("sentence2").value;
    let sentence3 = document.getElementById("sentence3").value;
    let sentence4 = document.getElementById("sentence4").value;
    //Skapar variablar med inputen från svarslådorna.

    // Dela upp första meningen i enskilda ord
    let words = sentence1.split(" ");

   //skapa rondelet
    let rondelet = words.slice(0, 4).join(" ").toUpperCase() + "\n\n"; //lägger till fyra första orden med stora bokstäver och två nya rader
    rondelet += words.slice(0, 4).join(" ") + "\n"; //lägger till fyra första orden igen plus en ny rad
    rondelet += sentence1.slice(words.slice(0, 4).join(" ").length).trim() + "\n"; //lägger till alla ord i första meningen efter de fyra första och en ny rad
    rondelet += words.slice(0, 4).join(" ") + "\n"; //lägger till de fyra första orden igen och en ny rad
    rondelet += sentence2 + "\n"; //lägger till mening 2 och en ny rad
    rondelet += sentence3 + "\n"; // lägger till mening 3 och en ny rad
    rondelet += sentence4 + "\n"; // lägger till mening 4 och en ny rad
    rondelet += words.slice(0, 4).join(" ") + "\n"; // lägger till första fyra orden igen

    // Skriv ut rondelet
    document.getElementById("rondeletOutput").textContent = rondelet;
}
