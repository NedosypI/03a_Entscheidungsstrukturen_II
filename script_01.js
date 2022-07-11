"use strict";

// Entscheidungsstrukturen | control flow

// Deklaration + Assignment 
const ageJohn = 25;
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
// if(ageJohn > ageMark)
// {
//     console.log("John ist älter");
// }

/***** IF - ELSE *****/
// mit Alternative
// entweder ja oder nein

// if (isJohnOlder)
// {
//     console.log("John ist älter");

// }
// else
// {
//     console.log("John ist jünger");

// }

/************  Ternäre (ternary) Schreibweise ************/
// console.log( (isJohnOlder) ? "John is older" : "Mark is older");

/***** IF - ELSE IF *****/
// mit alternativen Fällen (älter, jünger, gleich alt)

if (isJohnOlder) //1. Fall
{
    console.log("John ist älter");

}
else if (isJohnEqual) //2. Fall
{
    console.log("John ist gleich alt");

}

// evtl. weitere Alternative(n) else if(){}
else //gemeinsamer else-zweig
{
    console.log("John ist jünger");

}


