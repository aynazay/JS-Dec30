/*December 29,2022
Review
JS Variables:
var
let
const
nothing
some JS Features:
==>Not strongly typed
==>Case sensitive
*/
//Example:
x=25;
console.log(typeof x);
var x;
x='Name';
console.log(typeof x);
/*2) Creating JS variables with let keyword:
==>Unlike var variable defined with let keyword can not be redeclared.
==>Unlike var variables,let and const variables are block scope.
Block scope mean the variables that created in a block can not be used outside of the block.
==>let and const variables have to be initialized declared before using them.
*/
//Example:
let stdName = 'Hulya';
console.log(stdName);
let stdName;//has already declared
var name ='Ibrahim';
console.log(name);
var name ='Sumeyye';
console.log(name);
//Example2:
{
    let lastName ='Karaca';
    console.log(lastName);
    var fName = 'Hulya';
}
console.log(fName);
//Example3.
carModel = '2018';
console.log(carModel);
let carModel;//can not access 'carModel' before initialization
/*3)Const:Creating JS variables with const keyword:General rule if you want a variable with constant value
then use const keyword
==>Redeclaring a variable with const keyword is allowed in another block.
==>JS const variables must be assigned value when you create them.Values can not be changed.
==>Unlike var variables, const and let variables are block scope.
*/
//Example1:
{
    const stdName ='Havva';
    console.log(stdName);
}
console.log(stdName);// we can not reach them
//Example2:
const age = 31;
age =32;//Assignment to constant variable
console.log(age);
const stdId;//Missing initializer in const declaration
stdId='1002022';
console.log(stdId);
//JavaScript Operators:
/*1)Aritmetic Operators:
+ ==> Addition
- ==> Substraction
* ==> Multiplication
**==> Exponentiation
/ ==> Division
% ==> Remainder of division
++==> Increment
--==> Decrement
*/
//Example:
let z =5;
z++;//z= z+1
console.log(z);//6
z--;//z = z-1
console.log(z);//5
let y =15;
console.log(y++);//past increment
console.log(y);//16
//Pre inrement
let x = 9;
console.log(++x);//10
//Example %:
let a=23, b=10;
console.log(a%b);//3==>math.mod
//Example of **
let d=5, e=5;
console.log(d**e);//3125==>math.pow(d,e)in Apex

/*2)Assignment Operators:
= Assignment
+= ==>x+=y ==> x= x+y;
-= ==>x-=y ==> x= x-y;
*= ==> x*=y ==> x=x*y;
/= ==> x/=y == x= x/y;
%= ==> x%=y ==> x= x%y;
**= ==>x**=y ==>x=x**y;
*/
//Example:
let x = 12;
x+=5;
console.log(x);//17
//Example2:
let y =10, z=5;
y%=z;
console.log(y);
//Example3:
let a=4,b=3;
a**=b;
console.log(a);//64

/*3)Logical Operators:
&& ==> and
|| ==> Or
! ==> not==> convert value to opposite.!true=false,!false=true.
*/
//Example:
let x =6,y=3;
console.log(x<10&&y>1);//true
let result2=(x==5||y==10);
console.log(result2);//false
let y=12, z=5;
y%=z;
console.log(y);//2

/*4)Comparsion Operators:
==equal to
===equal value and equal type
!=not equal
>greater than
<less than
>=greater than or equal
<=less than or equal
? ternary==>condition? values:value2;
*/
//Example:
let x =5;
console.log(x=='5');//true
console.log(x==='5');//false bcause 5 is string here
//Example2:
let age =20;
let result =age<18?'too young to vote': 'old enough to vote';
console.log(result);//Old enough to vote

/*The Consept of Data Type in JS:
There are six primitive data types in JS: string,number,Boolean,Null,Undefined,symbol
Also there is a object data type which include array,collections and methods.
//NOTE:Unlike Apex, JS data types are dynamic.
*/

//Example:
let x =16;
let carMaker ='Toyota';
x+ carMaker

//Type of operator= you can use JS type of operator to find out type of variable.
//Example:
let x;
console.log(typeof x);//undefined
x=5;
console.log(typeof x);//number
x="John";
console.log(typeof x);//string
//1)String in JS: a string [or a text snippet] is a series of characters like 'John Snow8794'.
//String in JS are written in double quotes or single qoutes.JS
//Example:
let str = 'Toyota Camry SE';
console.log(str);
let str2 ="Toyota Camry XLE";
console.log(str2);

//NOTE: String as object:normally JS string are primitive values, created from literals,
//but string can also be defined as object with the new keyword.
let x ="John";//
console.log(typeof x);
let y =new String("John");
console.log(typeof x);

//String Methods and Properties:
//1)length:return the number of characters in String.
//Example:
let str = "Husnu Tezcan";
console.log(str.length);//12

//2) slice(startIndex,endIndex);extract a part of string and return the extracted part as a new string
//This method can have two parameter start position,end position.(not included).
//Its same as substring method in apex.
//Also, like Apex index start point is 0.
//Example:
let str ="Apple, Banana,Kiwi";
let result =str.slice(7,13);
console.log(result);//Banana
console.log(str.slice(7));//Banana, Kiwi

//NOTE:slice method accept negative number.If parameter is negative,the posotion is counted from end of the
//Example:
let str = "Apple, Banana, Kiwi";
let result = str.slice(-12,-6);
console.log(result);

//3)Substring(startIndex,endIndex):this method is same as slice.The only difference is that substring
//does not support negative parameters.
//Example:
let str = "Apple, Banana, Kiwi";
console.log(str.substring(0,5));//Apple

//4)substr(startIndex,length):substr is also similar to slice method.The difference is second is not end
index its the number of character that you want to get from your str.
let str = "Apple, Banana, Kiwi";
console.log(str.substr(7,6));//Apple

//5)replace(valueThatYouWantToChange,newValue):That method replace a specific value with a new one.
//Example:
let str = "We learn apex data types, apex variables, apex operators";
let result = str.replace('apex','JavaScript');
console.log(result);//We learn JavaScript data types, apex variables, apex operators
//NOTE:replace method only replace the first match.

//6)Regular expression:use regex to replace all of them./g fla
//Example:
let str = "We learn apex data types, apex variables, apex operators";
let result= str.replace(/apex/g, 'JavaScript');
console.log(result);//We learn JavaScript data types, JavaScript variables, JavaScript operators
//Note:use regular expression without quotes.
//==>by default replace is case sensitive.To replace case insensitive, use regex flag/i(insensitive)


