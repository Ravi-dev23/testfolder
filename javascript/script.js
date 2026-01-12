console.log("Hello World")
console.log('Hello world')
console.log(`Hello world`)
let a = 50;
let b = 250;
console.log(a+b)

let Name = 'Ravi';
let Age = "18";

console.log(Name);
console.log(Age);

console.warn("Warning")
console.error("There is an error")

console.log("My Name is"+" " + Name , "My Age is "+ Age,);

//let Enter = Number(prompt("Enter Your Number here"))
//console.log(Enter)

let A = 89;
let B = 34456;
console.log(A*B)
console.trace(Name)

let X = 20;
let Y = 30;

console.log(X == Y )
console.log(X > 15 && Y == 30)
console.log(!(X<15))

let price = 70;
let avaliable = true;

console.log(typeof price);
console.log(typeof avaliable)
console.log(typeof color)

let T = 400;
let U = 450;

if (T = U) {
console.log('T is equle to U');   
} else (T < U); { 
    console.log('T is not equle to U');
}

for(Y = 0; Y < 20 ; Y++){
    console.log(Y)
}

let I = 0;
while(I < 20 ){
    console.log(I);
    I++;
}

do{ 
    console.log(I);
    I++;
} while(I < 10);



function total(a,b){
  return (a+b)
}
console.log(total(50,150));

function Add(a,b,c){
 D = a+b+c;
 return D;
}
console.log(Add(40,50,80));

function greet(Name){
    return console.log( "Hello"+ " "+ Name)
}
greet("Ravi");

function divide(a,b){
    return console.log(a/b);
}
divide(50,2);

function  sub(a,b){
    return console.log(a-b);
}
sub(50,60);

function multi(a,b,c){
    return console.log (a*b*c);
}
multi(50,20,10);

function Some(a,b,c){
    return console.log (a*b/c);
}
Some(40,50,2)



function even(num){
    let i=2; 
    if(num % i === 0) return true;
    return false;          
}

console.log(even(2));
console.log(even(4));
console.log (even(7));
console.log(even(97));
console.log(even(5));
console.log(even(1000));


function Odd(num){
    let i=2; 
    if(num % i === 1) return num +" "+ 'is Odd' ;
    return num +" "+ 'is Even' ;; 
}

console.log(Odd(3));
console.log(Odd(30));
console.log(Odd(25));
console.log(Odd(5));
console.log(Odd(1000));


const add = (a,b,c) =>{
    console.log(a*b/c)
}
  add(20,100,10);

function Submitform(event) {
    console.log("Form Submitted");
    alert("Form submitted")
    event.preventdefault();
    let name = document.getElementById ("Name").value;
    let email = document.getElementById ("Email").value;
    let number = document.getElementById("Number").value;
    let password = document.getElementById("Password").value;

}

document.getElementById("H1").style.color = "Blue";
document.getElementById("H1").style.fontSize = "48px";
document.getElementById("H1").innerHTML = "Hello";
document.getElementById("Email").style.color = "Red";
document.getElementById("Email").style.fontSize = "48px";
document.getElementById("Number").style.color = "Brown";
document.getElementById("Number").style.fontSize = "48px";
document.getElementById("Password").style.color = "LightBlue";
document.getElementById("Password").style.fontSize = "48px";
document.getElementById("Name").style.color = "Pink";
document.getElementById("Name").style.fontSize = "48px";
document.getElementById("Button").style.color = "Grey";
document.getElementById("Button").style.fontSize = "48px";
document.getElementById("H1").style.fontFamily ="Arial"
document.getElementById("H1").style.color="Green";

function Data(event){
    event.preventdefault();
    let name = document.getElementById("Name").value;
    let email = document.getElementById("Email").value;
    let number = document.getElementById("Number").value;
    let password = document.getElementById("Password").value;
}