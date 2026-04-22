let position = 0;
let position2=31;
let easterEgg=false;

/*setInterval(() => {
    // 1. Konsole aufräumen
    console.clear();

    // 2. Zustand verändern
    position = position + 1;
    let leerzeichen = " ".repeat(position);

    // 3. Neues Bild zeichnen
    console.log(leerzeichen + " 🦆 ");
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

    // Zurücksetzen, wenn zu weit rechts
    if (position > 30) position = 0;

}, 200); // Alle 200ms ausführen

             /|\                                     35
 /|\        /_|_|
\_|_/~~~~~\___|___/~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/
setInterval(()=>{
console.clear();
position++;
position2--;
let welle="~".repeat(position);
let leer=" ".repeat(position);
let welle2="~".repeat(position2);
let leer2=" ".repeat(position2);
let easterEgg1=" ._.  O.O".repeat(position);
let easterEgg2=" ._.  O.O".repeat(position2);
let easterEgg3=" O.O  ._.".repeat(position);
let easterEgg4=" O.O  ._. ".repeat(position2);


document.addEventListener('keydown', function(event) {
if(event.code==="Space"){
 easterEgg=true;
}

   
});
if(easterEgg){
if(position%2===0){
    console.log(easterEgg1+easterEgg2);


}   else{
        console.log(easterEgg3+easterEgg4);

} 
console.log("Ich weiß zwar nicht genau wie, aber es funktioniert?!?");


}else{
console.log(leer+"             /|\\ "+leer2);
console.log(leer+" /|\\        /_|_|")
console.log(welle+"\\_|_/~~~~~\\___|___/"+welle2);
console.log(welle+"~~~~~~~~~~~~~~~~~~~"+welle2);
}
if(position>30){
    position=0;
    position2=31;
}

},300);



