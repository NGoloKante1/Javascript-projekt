function generateRondelet() {
    let sentence1 = document.getElementById("sentence1").value;
    let sentence2 = document.getElementById("sentence2").value;
    let sentence3 = document.getElementById("sentence3").value;
    let sentence4 = document.getElementById("sentence4").value;
    //Skapar variablar med inputen från svarslådorna.

    // Dela upp första meningen i enskilda ord
    let words = sentence1.split(" ");

    // Skapa rondelet
    let rondelet = words.slice(0, 4).join(" ").toUpperCase() + "\n\n";
    rondelet += "\n";
    rondelet += words.slice(0, 4).join(" ") + "\n";
    rondelet += sentence1.slice(words.slice(0, 4).join(" ").length) + "\n";
    rondelet += words.slice(0, 4).join(" ") + "\n";
    rondelet += sentence2 + "\n";
    rondelet += sentence3 + "\n";
    rondelet += sentence4 + "\n";
    rondelet += words.slice(0, 4).join(" ") + "\n";

    // Skriv ut rondelet
    document.getElementById("rondeletOutput").textContent = rondelet;
}