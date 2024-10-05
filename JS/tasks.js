

/* Switch Task */

let day = "   wednesday  ";
day=day.trim();
day=day.charAt(0).toUpperCase()+day.slice(1);

document.write(`<div> ${day} </div>`);


switch(day){
    case "Friday":
    case "Saturday":
    case  "Sunday":
        document.write(`<h2> No Appointments Available </h2>`);
        break;

    case "Monday":
    case "Thursday":
        document.write(`<h2> From 10:00 AM To 5:00 PM</h2>`);
        break;
    case "Tuesday":
        document.write(`<h2> From 10:00 AM To 6:00 PM</h2>`);
        break;
    case "Wednesday":
        document.write(`<h2>From 10:00 AM To 7:00 PM</h2>`);
        break;
    default:
        document.write(`<h2>Its Not A Valid Day</h2>`);
}


/* Loop Task */

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

// Output
"1 => Sayed"
"2 => Mahmoud"

while(index<friends.length){
    if(isNaN(parseInt(friends[index]))){
        if(!friends[index].startsWith('A')){
        counter++;
        document.write(`<h2> ${counter} => ${friends[index]}</h2>`);
    }
}
    index++;
}