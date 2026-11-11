"use strict"; // Mode strict (slide 52)

/* Commentaire sur plusieurs lignes (slide 37)
   Exercice 3 : délibération des étudiants.
   Chaque tuple (id, prénom, nom, partie entière, partie décimale)
   donne une moyenne réelle : (14, 5) -> 14.5 ; (7, 1) -> 7.1 ; (13, 3) -> 13.3
   Le script contient exactement 2 fonctions : A appelle B. */

// Données "Students" : tableau d'objets (slide 41), déclaré avec const (slide 52)
const Students = [
  { id: 1000, prenom: "JOHN",   nom: "DOE",     entier: 14, decimal: 5 },
  { id: 2000, prenom: "BOB",    nom: "CARLTON", entier: 7,  decimal: 1 },
  { id: 3000, prenom: "RAYANE", nom: "SMITH",   entier: 13, decimal: 3 }
];

// Fonction A : déclaration d'une fonction sans paramètres (slide 46)
function A() {
  // Boucle for...of pour parcourir le tableau d'objets (slide 45)
  for (const s of Students) {
    // Calcul de la moyenne (réel) avec les opérateurs arithmétiques + et / (slide 42)
    // Accès aux propriétés de l'objet avec la notation pointée (slide 40)
    // Variable déclarée avec let (slide 52)
    let moyenne = s.entier + s.decimal / 10;

    // Appel de la fonction B dans une condition if...else (slide 43)
    if (B(moyenne)) {
      // Concaténation avec + (slide 38) et affichage console (slide 34)
      console.log(s.id + ": ADMIS");
    } else {
      console.log(s.id + ": AJOURNÉ");
    }
  }
}

// Fonction B : fonction avec un paramètre (float) et un retour (slide 46)
function B(moyenne) {
  // Opérateur rationnel >= qui produit un booléen (slide 42) ; type boolean (slide 38)
  return moyenne >= 10;
}
