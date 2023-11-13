 //this function clear all data
function clearscreen() {
    document.getElementById("resault").value ="";
}

//this function display values
function display(value) {
    document.getElementById('resault').value += value;
}

function calculate(){
   var p = document.getElementById("resault").value;
   var q = eval(p); 
   console.log(p);
   document.getElementById("resault").value = q;
}