
//First git the calc_Display from HTML tab to create functions result
var WindowScreen = document.getElementById("calc_Display");


// For display values >>>
function display(value) {
  WindowScreen.value += value;
}


//For Calculate the number use eval , The eval() function evaluates JavaScript code represented 
//as a string and returns its completion value. The source is parsed as a script.

function calculate() {
  var displayValue = document.getElementById("calc_Display").value;
  var gitValue = eval(displayValue);
  document.getElementById("calc_Display").value = gitValue;
}

// for clear all Calculation
function cancle() {WindowScreen.value = " ";}

