"use strict";

// Entscheidungsstrukturen | control flow

// Deklaration + Assignment 
// const ageJohn = 25;
// const ageMark = 30;

// // Deklaration
// let isJohnOlder, isJohnEqual;

// // Test | Logische Aussage 
// isJohnOlder = (ageJohn > ageMark);
// isJohnEqual = (ageJohn == ageMark);

// Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);
// console.log("------------------");

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

// if (isJohnOlder) //1. Fall
// {
//     console.log("John ist älter");

// }
// else if (isJohnEqual) //2. Fall
// {
//     console.log("John ist gleich alt");

// }

// // evtl. weitere Alternative(n) else if(){}
// else //gemeinsamer else-zweig
// {
//     console.log("John ist jünger");

// }

/***** Falleunterscheidung / Switch|Case 1 *****/

// const firstName = "Jane";
// let job;

// job = "driver";     // .. fährt TAXI! / UBER
// job = "diver";      // .. taucht im Rhein! 
// job = "artist";     // .. malt ein Bild!
// job = "pilot";      // .. macht etwas anderes! --> default
// job = "teacher";    // .. unterrichtet!
// job = "instructor";  // .. unterrichtet!

// switch (job) 
// {
//     case "driver": // Test auf ==
//         console.log(firstName + " fährt TAXI!");
//         break;
   
//      case "diver": // Test auf ==
//         console.log(firstName + " taucht im Rhein");
//         break;

//     case "artist": // Test auf ==
//         console.log(firstName + " malt ein Bild!");
//         break;

//     case "teacher": // Test auf ==
//     case "instructor": // Test auf ==
//         console.log(firstName + " unterrichtet!");
//         break;


//     default: //Wichtig!
//         console.log(firstName + " macht etwas anderes!");
//         break;

//         break;
// }



/********  Fallunterscheidung / SWITCH|CASE 2 *******/

const cond = true;
const a = 2;

switch (cond) {
    case (a == 1):
        console.log("a ist gleich 1")
        break;
    case (a == 2):
        console.log("a ist gleich 2")
        break;
    default:
        console.log("a hat einen anderen Wert")
        break;
}