

// Number Challenge

let a=1_00;
let b=2_00.5;
let c=1e2;
let d=2.4;

// find smallest num 

console.log(Math.min(a,b,c,d));


// a ,d to return 10000

console.log(Math.pow(a,Math.trunc(d)));

//Get   Integer "2" From Var d with four methods
console.log(Math.trunc(d));
console.log(Math.floor(d));
console.log(Math.round(d));
console.log(parseInt(d));

//use var b , d to get this values

console.log((Math.trunc(b)/Math.ceil(d)).toFixed(2));       // 66.67 =>string
console.log(Math.ceil((Math.trunc(b)/Math.ceil(d)).toFixed(2)));       // 67 number









// String Challenge

let x="Elzero Web School";

console.log(x.charAt(2).toUpperCase()+x.slice(3,6));

console.log(x.substr(-4,1).toUpperCase().repeat(8));

console.log(x.split(" ",1));

console.log(x.substr(0,6)+" "+x.substr(-6));

console.log(x.charAt(0).toLowerCase()+x.substr(1).toUpperCase());






 /*
  If Condition Challenge
*/

let s = 10;

if (s < 10) {
  console.log(10);
} else if (s >= 10 && s <= 40) {
  console.log("10 To 40");
} else if (s > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

// Write Previous Condition With Ternary If Syntax
console.log("///////////////////////////////");
s < 10?console.log(10):s >= 10 && s <= 40?console.log("10 To 40"):s > 40?console.log("> 40"):console.log("Unknown");

let st = "Elzero Web School";

if (st.repeat(2).length.toString() === "34") {
  console.log("Good1");
}

// W Position May Change
if (st[st.indexOf("W")].toLowerCase() === "w") {
  console.log("Good2");
}

if (st.substr(0,6) !== "string") {
  console.log("Good3");
}

if ( typeof(st.length) === "number") {
  console.log("Good4");
}

if (st.substr(0,6).repeat(2) === "ElzeroElzero") {
  console.log("Good5");
}



/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my.pop();
my.pop();
my=my.slice().reverse();

console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(-counter,counter)); // ["Elham", "Mazero"]

console.log(my[my.indexOf("Elham")].slice(zero,-counter).concat(my[--counter].slice(counter))); // "Elzero"
  
  x=my[my.length-(counter++)].slice(++counter).toUpperCase();
   
  
console.log(x[zero].toLowerCase()+x[++zero]); // "rO"



/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
let Admins=[];
for(let i=0;i<myAdmins.length;i++){
  if(myAdmins[i]==="Stop"){
    break;
  }
  Admins.push(myAdmins[i]);
}
document.write(`<div>We Have ${Admins.length} Admins</div>`);
document.write('<hr>');

for(let i=0;i<Admins.length;i++){
  document.write(`<div>We The Admin For Team ${i+1} Is ${Admins[i]}</div>`);
  let cnt=1;
  document.write('<h2>Team Members</h2>');
  for(let j=0;j<myEmployees.length;j++){
    
    if(myEmployees[j][0]==Admins[i][0]){
      document.write(`<h3> - ${cnt++}  ${myEmployees[j]} </h3> `);
    }
  }
  document.write('<hr>');
}

/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]
let res="String ";
let names = function (...n) {
  
  for(let i=0;i<n.length;i++){
    res+= ` [${n[i]}],`;
  }
  res+=" => Done !";
  return res;
};

let na=(...n)=>`String [${n.join("], [")}] => Done !`;
console.log(na("Osama", "Mohamed", "Ali", "Ibrahim"));


console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20,50,10,60];
let ignorenum ="El123ro48";

function cc(one, two, ...nums){
  return nums.shift()+one+two;
}
console.log(cc(10, myNumbers.shift(),...myNumbers));



/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString.split("").filter((el)=>(isNaN(parseInt(el)) && el!='_' && el!=',')).reduce((acc,cur)=>cur.toUpperCase()==cur?acc+" "+cur:acc+cur).split(" ").filter((el)=>el.length>1).reduce((acc,cur)=>acc+" "+cur);

console.log(solution); // Elzero Web School