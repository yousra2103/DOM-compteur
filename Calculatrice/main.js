const affichage=  document.querySelector(".affichage");
var nombre1="";
function zero (event){
  let afichzero = event.target.innerText;
 console.log(afichzero);
 
 return affichage.append(afichzero);
}
function operation (event){
    nombre1 = affichage.innerText;
    affichage.innerText = "";
    operation = event.target.innerText;
    affichage.innerText = "";
       
}
function calclcul(a, op, b) {
    if (op === '+') {
        return Number(a) + Number(b);
    } else if (op === '-') {
        return a - b;
    } else if (op === '*') {
        return a * b;
    } else if (op === '/') {
        if (b == 0) return ("Erreur Mathématique");
        else return a / b;
    }
}
 function egal() {
    var nombre2 = "";
    nombre2 = affichage.innerText;
    console.log(nombre2);
    affichage.innerText = "";
    var resultat = "";
    resultat = calclcul(nombre1, operation, nombre2);
    console.log(resultat);
    return affichage.append(resultat);

}
function clr () {
    return affichage.innerText = "";

}
 function delet() {
    let dele = affichage.innerText.split('');
    dele.pop();
    let d = dele.join('');
    return affichage.innerText = d;
}
