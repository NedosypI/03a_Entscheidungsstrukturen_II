"use strict";

// Entscheidungsstrukturen | control flow

// Deklaration + Assignment 
const ageJohn = 30;
const ageMark = 30;

// Deklaration
let isJohnOlder, isJohnEqual;

// Test | Logische Aussage 
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);
console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);
console.log("------------------");

/***** IF *****/
// TINA --> There is no alternative 
// entweder JA oder nix ... alternative 

// if(true)
//  if(false)  // Damit wird die Abarbeitung des unteren Befehls geblockt
// der untere Code wird dann matt
// if(isJohnOlder) 
if(ageJohn > ageMark)
{
    console.log("John ist älter");
}

/***** IF - ELSE *****/
// mit Alternative
// entweder ja oder nein


