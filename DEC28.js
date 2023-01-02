//Single Comment
/*Multiple Line Comment
Line1
Line2
*/
//JavaScripts Statments:Statements  in JS are compased of value,operator,Expressions,Keywords and Comments.
//Example of Statement:
let a,b,c;//Declare a,b,c variable
a=5;//assign 5 to a
b=6;//assign 6 to b
c=a+b;
console.log(c);//similar to system.debug()
//unlike Apex, you can have many statement in one line in JS.
//Example:
let x=12; let y=13; let z = x+y;
console.log('result is' +z);
/*JS identifiers Rule: indentifiers used to name JS variables and Methods(functions).JS name must begin:
==>(A-Za-z)
==> a dollar sign ($)
*/
/*JavaScript Variables:variables are container for storing data.
There are 4 ways to declare a JS variables.
==>1)Let
==>2)var
==>3)const
==>4)nothing
*/
//To declare Js variables:
//Syntax:var variableName, let variableName,
let carName;//Since nothing assigned, it will undefined
var stdName;
console.log(carName);
console.log(stdName);
carName = 'Canry';
stdName = 13;
console.log(carName);
console.log(stdName);
//NOTE:JS is not strongly typed programming language.
//MOTE: Unlike Apex, JS is case sensitive programming language.For example:Let and let are not same.
var apple = 'Apple';
var Apple = 'Orange';
console.log(apple);
console.log(Apple);
/*1)Creating Variables with var keyword:
==>variables that been created with var can be reassigned.
==>2)Redeclaring a JS var variables is allowed anywhere in program.
   ==> let and const not allowing to do redeclaring.
==>3)Variable defined with var are hosted to the top and can be initialized at any time.
==>4) Var Variables are no block scope.Variables declared with var keywords inside a{ } block
can be accessed from outside the block.
*/
//Example:
var age = 31;//age variables declared
console.log(age);
age=35;
console.log(age);
var age =40;  //already age variable created before,now we created again
console.log(age);
//Example:
let stdName = 'Ibrahim';
console.log();
//Example:
std = 'Havva';//when you did use keyword to declare variable they are hoisted at the top.
console.log(std);
//Example:We can reach var variables from outside of block.
{
    var carModel = 'Hoda Civic 2018';
    let carYear = 2018;
}
console.log(carModel);
console.log(carYear);
/*2)Creating variables with let keyword
==>1)Unlike var, let variable can not be redeclared.

*/
//Example:
let