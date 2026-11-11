"use strict"; // Mode strict : signale les variables non déclarées avec let/const/var (slide 52)

/* Commentaire sur plusieurs lignes (slide 37)
   Exercice 1 : chaque bouton appelle une fonction f1...f6
   qui affiche une valeur dans la console. */

// Déclaration de constantes avec const, bonne pratique pour la portée (slide 52)
// Types primitifs : string et number (slide 38)
const nom = "John";    // chaîne de caractères - string (slide 38)
const prenom = "Doe";  // chaîne de caractères - string (slide 38)
const age = 30;        // entier - number (slide 38)
const note = 15;       // number (slide 38)
const pi = 3.14;       // réel - number, déclaré en constante (slide 38)

// Déclaration d'une fonction sans paramètres (slide 46)
// Affichage dans la console avec console.log() (slide 34)
function f1() {
  console.log(nom);
}

// Fonction sans paramètres (slide 46)
function f2() {
  console.log(prenom);
}

// Fonction sans paramètres (slide 46)
function f3() {
  // Concaténation de chaînes avec l'opérateur + (slide 38 : affichage élaboré)
  console.log(nom + "-" + prenom);
}

// Fonction sans paramètres (slide 46)
function f4() {
  console.log(age);
}

// Fonction sans paramètres (slide 46)
function f5() {
  console.log(note);
}

// Fonction sans paramètres (slide 46)
function f6() {
  console.log(pi);
}
