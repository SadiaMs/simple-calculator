#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {message:"Enter FIRST Number",type: "number", name:"firstNUMBER"},
    {message:"Enter SECOND Number",type: "number", name:"secondNUMBER"},
     { message : "SELECT one of the operators to perform operation",
     type : "list",
      name:"operator",
       choices: ["Addition" , "subtraction","multiplication","division" ],
   },
  ]);
console.log(answer);
// Conditions
if (answer.operator === "Addition") {
  console.log(answer. firstNUMBER +answer.secondNUMBER );
} 
else if (answer.operator === "subtraction") {
 console.log (answer. firstNUMBER -answer.secondNUMBER );
}
else if (answer.operator === "multiplication")
 {
 console.log (answer. firstNUMBER *answer.secondNUMBER );
 }
  else if (answer.operator === "division") {
    console.log(answer. firstNUMBER / answer.secondNUMBER );
  }
else {"PLEASE SELECT valid number"}