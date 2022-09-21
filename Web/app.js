//let a;
//a = "Good Day!";

//let b = "How Are You?";

//let c = "Click Ok To Dismiss";

//a+b;

//a+c;

//alert(a+b+c);

//console.log (a+b+c);

let button;
 button = document.getElementById('button');
console.log(button);
let count = 0;
window.addEventListener("click", increasecounter);

function increasecounter(){
    count +=1;
    document.getElementById('counter').innerHTML = count;
    //document.getElementById('counter').innerHTML = count;
};

let button2;
 button = document.getElementById('button2');
console.log(button2);
let count2 = 0;
button2.addEventListener("click", increasecounter);

function increasecounter(){
    count2 +=1;
    document.getElementById('counter2').innerHTML = count2;
    //document.getElementById('counter').innerHTML = count;
};






    


