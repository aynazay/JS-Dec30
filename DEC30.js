/*December 30,2022
JS Variables:
   1) var
   2) let
   3) const
   4) nothing
JS Data Types:
   1)Primitive Data Types:number,string,boolean,undefined,symbol.
   2)Obejects==>Unlike apex all collections data types are objects in JS(list,set,map,array).
   //String Methods:
   length==>slice(-startIndex,-endIndex)==>substring(startIndex,endIndex)==>substr(startIndex,endIndex)==>replace
   replace(subStrThatWillbeChanged,newstr)==>regex /g (global mach),/i (insensitive)
   */
//6)toUpperCase():convert str to upper case.
//Example:
let str ='Happy New Year';
let upperStr =str.toUpperCase();
console.log(upperStr);//HAPPY NEW YEAR
//7)toLowerCase():convert str to lower case
//Example:
let str ='HAPPY NEW YEAR';
let lowerStr =str.toLowerCase();
console.log(lowerStr);//happy new year

//8)concat(): that will join two or more str.it can be used of + operator.
let str = 'Welcome';
let str2 ='2023';
let str3 = str.concat(str2);
console.log(str3);//Welcome2023
//Example:
let str1 ='I';
let str2 ='like';
let str3 ='JavaScript';
let str4 =str1.concat(' ',str2,' ',str3);
console.log(str4);//I like JavaScript

//NOTE: string are inmutable==>all string methods are returning a new string.
let str = 'I like that class';
str=str.toUpperCase();//remove the previos value and assign a new one.(unmutable)
console.log(str);//I LIKE THAT CLASS

//9)trim():remove white spaces from both beginning and end of the str.
//Example:
let str = "   Hello Everyone   ";
console.log(str.trim());//Hello Everyone
console.log(str);//   Hello Everyone   

//10)padStart(length,paddingValue):its pad a string with another one.
//Example:
let str1 = '10';
let padded = str1.padStart(4, "x");
console.log(padded);//xx10
//11) padEnd(length,paddingValue);its pad a str with another one.
//Example:
let str1 = '10';
let padded = str1.padEnd(4, "x");
console.log(padded);//10xx

//12)chartAt(index):that will return a character at the specified position.
let str = "Welcome 2033";
console.log(str.charAt(0));//W

//NOTE:property Access[]: [] will give you a character at the spesified position.
let str = "WElcome 2023";
console.log(str[0]);//W

//13) charCodeAt(index):this will return unicode (ASCII)value of the character.
//Example:
let str = "Hello JavaScript";
console.log(str.charCodeAt(0));//72==>ASCII value H is 72

//14)split(): a string can be converted to an array with a spilit method.
//Example:
let str='Hello JavaScript';
console.log(str.split(' '));//'Hello', 'JavaScript' 
console.log(str.split('J'));//'Hello ', 'avaScript' 
console.log(str.split(''));//'H', 'e', 'l', 'l',
'o', ' ', 'J', 'a',
'v', 'a', 'S', 'c',
'r', 'i', 'p', 't'
//NOTE:when you have nothing as parameter in pslit method that is mean split on each character.
//some methods that you do search on string:indexOf,search(),match(),endWith()
//15)indexOf(substr):the will return you first accurance of substr in string>
//Example:
let str = 'We learned JS variables,JS operators and JS Data types';
console.log(str.indexOf('JS'));//11
//16)lastIndexOf(substr):last accurance of substr.
let str = 'We learned JS variables,JS operators and JS Data types';
console.log(str.lastIndexOf('JS'));//41

//both indexOf and lastIndexOf method will return-1 when there is no match.
==both indexOf and lastIndexOf method accept second parameter.accept.accept



//17)search():return a position match.
//Example:
let str = 'We learned JS variables,JS operators and JS Data types';
console.log(str.search('JS'));//11

//Difference between search and indexOf method are:
==>unlike indexOf method,search method can not have second parameter.
==>indexOf method can not take powerfull search like RegExp.
let str = 'We learned JS variables,JS operators and JS Data types';
console.log(str.search(/js/i));//11

//18)match():return all matched as an array.

//Example:
let str = 'We learned JS variables,JS operators and JS Data types';
console.log(str.match(/js/ig));//[ 'JS', 'JS', 'JS' ] return us Array

//19)include('searchValue',startPosition):that will return true if search value is exist in str.
let str = 'We learned JS variables,JS operators and JS Data types';
console.log(str.includes('JS'));//true

let str = 'We learned JS variables,JS operators and JS Data types';
console.log(str.includes('Apex'));//false

//20)startWith():that will return true if string start with specified substr.Otherwise will return false
//Example:
let str ='Hello World, Welcome to Universe';
console.log(str.startsWith('Hello'));//true
console.log(str.startsWith('world'));//false
console.log(str.startsWith('World',6));//true

//21)endsWith():if string ends with specified substr than you will get true.

//Example:
let str ='Hello World, Welcome to Universe';
console.log(str.endsWith('Hello'));//false
console.log(str.endsWith('Universe'));//true

/*String Templates:==>Template Literals,Teplate String,Back-Ticks they all are synonyms.
==>Teplate literals use back-ticks('')rather than quotes('')to define String.
==>Template literals provide easy way to interpolate variables and expressions into String.
Syntax: s{}
*/
//Example:
let fName ='Husnu';
let lName='Tezcan';
let fullName =`Welcome ${fName} ${lName}`;
console.log(fullName);//Welcome Husnu Tezcan

//Example:
let qty= 10;
let price=25;
let totalPrice =`Total that I paid is ${qty*price}`;
console.log(totalPrice);//250

//2)Number: JavaScript has only one type number.Numbers can be written with or without decimal.
let pi = 3.14;
let r = 2;
console.log (typeof pi);//number
console.log (typeof r);//number

/*Numerical String :JS string can have numerical content.In that case JS converts string to number
in all numerical operations.
*/
let x = '100';
let y = '10';
let z = x/y;//even it is string they behave like numbers.
console.log(z);//10

/*Coercion:When JS compres different types,javascript engines attents to convert one type
into another so it can compare the values.
==>Type coercion priorty:
1)String
2)Number
3)Boolean
*/
//Numbers Methods and Properties:
1)toString():returns number as a String
//Example:
let x =567489;
console.log(x +' and ' + 'its data type ' + typeof x);//567489 and its data type number
let xstr = x.toString();
console.log(xstr + ' and ' + 'its data type ' + typeof xstr);//567489 and its data type string

//toFixed():that returns a string, with a number written with a specified number of decimal.
//Example:
let x =9.583686;//if you dont give any parameter it will round to closest integer.
console.log(x.toFixed());//10
let result = x.toFixed(2);
console.log(result);//9.58
console.log(typeof result);//string


