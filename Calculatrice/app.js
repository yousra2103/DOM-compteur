let nombre1 = "";
// affichage delete and clear 
const affichage = document.querySelector(".affichage");
const clear = document.querySelector(".clear");
const del = document.querySelector(".del");
// les opérations 
const divi = document.querySelector(".divi");
const mul = document.querySelector(".mul");
const sub = document.querySelector(".sub");
const ad = document.querySelector(".ad");
const egal = document.querySelector(".egal");
//les nombres
const seven = document.querySelector(".seven");
const tam = document.querySelector(".tam");
const nine = document.querySelector(".nine");
const q = document.querySelector(".q");
const cinq = document.querySelector(".cinq");
const six = document.querySelector(".six");
const un = document.querySelector(".un");
const two = document.querySelector(".two");
const trois = document.querySelector(".trois");
const zero = document.querySelector(".zero");

// le calclcul
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
// affichage à l'écran de tous les éléments de la calculatrice 
// affichage des nombres
zero.addEventListener("click", function (event) {
    let afichzero = event.target.innerText;
    // console.log(afichzero);
    // console.log(affichage);
    return affichage.append(afichzero);


})

un.addEventListener("click", function (event) {
    let afichun = event.target.innerText;
    console.log(afichun);
    console.log(affichage);
    return affichage.append(afichun);


})
two.addEventListener("click", function (event) {
    let afichtwo = event.target.innerText;

    return affichage.append(afichtwo);


})
trois.addEventListener("click", function (event) {
    let afichtrois = event.target.innerText;
    console.log(afichtrois);
    console.log(affichage);
    return affichage.append(afichtrois);


})
q.addEventListener("click", function (event) {
    let afichq = event.target.innerText;
    // console.log(afichzero);
    // console.log(affichage);
    return affichage.append(afichq);


})
cinq.addEventListener("click", function (event) {
    let afichcinq = event.target.innerText;
    // console.log(afichzero);
    // console.log(affichage);
    return affichage.append(afichcinq);


})
six.addEventListener("click", function (event) {
    let afichsix = event.target.innerText;
    // console.log(afichzero);
    // console.log(affichage);
    return affichage.append(afichsix);


})
seven.addEventListener("click", function (event) {
    let afichseven = event.target.innerText;
    // console.log(afichzero);
    // console.log(affichage);
    return affichage.append(afichseven);


})
tam.addEventListener("click", function (event) {
    let afichtam = event.target.innerText;
    // console.log(afichzero);
    // console.log(affichage);
    return affichage.append(afichtam);


})
nine.addEventListener("click", function (event) {
    let afichnine = event.target.innerText;
    // console.log(afichzero);
    // console.log(affichage);
    return affichage.append(afichnine);


})
// clear and delete
clear.addEventListener("click", function (event) {
    return affichage.innerText = "";

})
del.addEventListener("click", function () {
    let dele = affichage.innerText.split('');
    dele.pop();
    let d = dele.join('');
    return affichage.innerText = d;
})
// les opérations 
ad.addEventListener("click", function () {

    nombre1 = affichage.innerText;
    affichage.innerText = "";
    operation = "+";
    console.log(operation);
})

egal.addEventListener("click", function () {
    var nombre2 = "";
    nombre2 = affichage.innerText;
    console.log(nombre2);
    affichage.innerText = "";
    var resultat = "";
    resultat = calclcul(nombre1, operation, nombre2);
    console.log(resultat);
    return affichage.append(resultat);

})
sub.addEventListener("click", function (event) {

    nombre1 = affichage.innerText;
    affichage.innerText = "";
    operation = event.target.innerText;
    affichage.innerText = "";
})
mul.addEventListener("click", function (event) {

    nombre1 = affichage.innerText;
    affichage.innerText = "";
    operation = event.target.innerText;
    affichage.innerText = "";
})
divi.addEventListener("click", function (event) {

    nombre1 = affichage.innerText;
    affichage.innerText = "";
    operation = event.target.innerText;
    affichage.innerText = "";
})