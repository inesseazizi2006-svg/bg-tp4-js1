"use strict"; // Mode strict (slide 52)

/* Commentaire sur plusieurs lignes (slide 37)
   Exercice 2 : manipulation d'un tableau, d'un objet
   et d'un tableau d'objets. */

// Type complexe : tableau de chaînes de caractères (slide 39)
// Déclaré avec const (slide 52)
const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

// Type complexe : objet avec des propriétés clé: valeur (slide 40)
const etudiant = {
  nom: "John",
  prenom: "DOE",
  age: 30
};

// Type complexe : tableau d'objets (slide 41)
const tabEtudiants = [
  { nom: "nom1", prenom: "prenom1", age: 21 },
  { nom: "nom2", prenom: "prenom2", age: 22 },
  { nom: "nom3", prenom: "prenom3", age: 23 }
];

// Déclaration d'une fonction sans paramètres (slide 46)
function f1() {
  // Boucle for avec let (slide 45) et propriété length du tableau (slide 45)
  for (let i = 0; i < etudiants.length; i++) {
    // Accès au contenu du tableau par l'indice [i] (slide 39)
    console.log(etudiants[i]); // Affichage console (slide 34)
  }
}

// Fonction sans paramètres (slide 46)
function f2() {
  // Affichage de l'objet complet dans la console (slide 40)
  console.log(etudiant);
}

// Fonction sans paramètres (slide 46)
function f3() {
  // Boucle for...of sur un tableau d'objets (slide 45)
  for (const e of tabEtudiants) {
    // Accès aux propriétés de l'objet avec la notation pointée (slide 40)
    // Concaténation avec l'opérateur + (slide 38)
    console.log(e.nom + "-" + e.prenom + "-" + e.age);
  }
}
