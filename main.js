// EXERCICE 1
// let welcome = "Hello World !"
// alert(welcome);

// EXERCICE 2
// let lastname = "Doe";
// let firstname = "John";
// let city = "New-York";
// alert("Nom : "+lastname+"\n"+"Prénom : "+firstname+"\n"+"Ville : "+city)

// EXERCICE 3
// let name = prompt("Entrez votre prénom");
// alert("Bonjour, "+name);

// EXERCICE 4
/*let lastname = prompt("Entrez votre nom");
let firstname = prompt("Entrez votre prénom");
let city = prompt("Entrez votre ville");
alert("Vous êtes : "+"\n"+"Nom : "+lastname+"\n"+"Prénom : "+firstname+"\n"+"Ville : "+city);*/

// EXERCICE 5
/*let firstnumber = prompt("Entrez un nombre à virgule");
firstnumber = Math.floor(firstnumber);
let secondnumber = prompt("Entrez un autre nombre à virgule");
let multiplication = firstnumber*secondnumber
alert("Le résultat de la multiplication est : "+multiplication);*/

// EXERCICE 6
/*let first = prompt("Entrez un nombre");
let second = prompt("Entrez un nombre");
function reste(a, b) {
    return a%b
}
alert("Le reste de la division est : "+reste(first, second));*/

// EXERCICE 7
/*let pointure = prompt("Entrez votre pointure");
let naissance = prompt("Entrez votre année de naissance");
let resultat = 0;
function calcul(a, b) {
    pointure *= 2;
    pointure += 5;
    pointure *+ 50;
    resultat = pointure-naissance;
    resultat += 1766;
    return resultat;
}
alert("Le calcul savant est : "+calcul(pointure, naissance));*/

// EXERCICE 8
/*let age = prompt("Entrez votre âge");
if (age >= 18) {
    alert("Vous êtes majeur");
} else {
    alert("Vous êtes mineur");
};*/

// EXERCICE 9
/*let number = prompt("Entrez un nombre");
let table = [];
let resultat = 0;
function calcul(a) {
    for (let i = 0 ; i <= 10 ; i++) {
        resultat = a * i;
        table.push(`${number} x ${i} = ${resultat}\n`)
    }
    return table;
}
alert("La table de multiplication est : "+"\n"+calcul(number));*/

// EXERCICE 10
/*let word = prompt("Entrez un mot");
let table = word.split('');
let newTable = [];
alert(table);*/

// EXERCICE 11
/*let number = prompt("Entrez un nombre compris entre 0 et 10");
while (isNaN(number)) {
    alert("Votre nombre n'en est pas un, recommencez");
    number = prompt("Entrez un nombre compris entre 0 et 10");
    while (number < 0 || number > 10) {
        alert("Votre nombre n'est pas compris entre 0 et 10, recommencez");
        number = prompt("Entrez un nombre compris entre 0 et 10");
    }
}
if (number === 5) {
    alert("Le nombre saisi est égal à 5");
} else if (number > 5) {
    alert("Le nombre saisi est supérieur à 5");
} else {
    alert("Le nombre saisi est inférieur à 5");
}*/

// EXERCICE 12
let result = 0;
function calcul(a) {
    result = a*a;
    return result;
}
let number = prompt("Entrez un nombre");
alert(`Le carré de ${number} est ${calcul(number)}`);