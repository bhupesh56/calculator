const numpad = document.querySelector('.numpad');
const output = document.querySelector(".screen");
let numArr = [];
let opArr = [];
let i = 0;
opArr[0] = "+";
numArr[0] = 0;
let result = 0;
let flag = 0;
let temp = 0;
let touchstart = true;
numpad.addEventListener('click', function(event){
  if(!(touchstart)){
    event.preventDefault ();
    touchstart = true;
    return;
  }
  let text = document.getElementById(event.target.id);
  handleButtonClick(event.target.id, text.textContent);
  display(event.target.id, text.textContent);
})

numpad.addEventListener('touchstart', function(event){
  touchstart = false;
  let text = document.getElementById(event.target.id);
  handleButtonClick(event.target.id, text.textContent);
  display(event.target.id, text.textContent);
})

function handleButtonClick(id, text){
  const element = document.getElementById(id);
  const eleClass = element.classList;
  if(eleClass.contains("number")){
    if(flag == 1){
      flag = 0;
      display("ac", "AC");
      handleButtonClick("ac", "AC");
    }
    if(!(numArr[i])){
      numArr[i] = +(text);

    }
    else{
      numArr[i] = +(numArr[i] + text);
    } 
  }
  else if(eleClass.contains("math")){
    flag = 0;
    i++;
    switch (id) {
      case "mul":
        opArr.push("*");
        break;
      case "divide":
        opArr.push("/");
        break;
      case "add":
        opArr.push("+");
        break;
      case "sub":
        opArr.push("-");
        break;
      default:
        console.log("ERROR");
        break;
    }
  }
  else if(id == "del"){
    if(numArr[i] > 0){
      numArr[i] = Math.floor(numArr[i] / 10);
      if(numArr[i] == 0){
        numArr.pop();
      }
    }
    else if(numArr[i] == 0){
      numArr.pop();
    }
    else if(!(numArr[i])){
      opArr.pop();
      i--;
      removeDisplay(-2);
      if(opArr.length === 0){
        opArr.push("+");
      }
    }
  }
  else if(id == "ac"){
     numArr = [];
     opArr = [];
     i = 0;
     opArr[0] = "+";
     numArr[0] = 0;
     result = 0;
  }
  else if(id == "equal"){
    fullResult();
    result = formatNumber(result);
    temp = result;
    numArr = [];
    opArr = [];
    i = 0;
    opArr[0] = "+";
    numArr[0] = result;
    result = 0;
    flag = 1;
  }
  else if(id == "dot"){
    alert("No decimal functionality yet.");
  }
}

function formatNumber(number) {
  if (Number.isInteger(number)) {
      return number;
  } else {
      let formattedNumber = number.toFixed(4);
      return formattedNumber;
  }
}


function fullResult() {
  for(let j = 0; j < numArr.length; j++){
    result = calcResult(result, numArr[j], opArr[j]);
  }
}

function calcResult(num1, num2, operator){
  switch (operator){
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      return num1 / num2;
      break;
    default:
      console.log("ERROR");
      break;
  }
}

function display(id, text){
  const element = document.getElementById(id);
  const eleClass = element.classList;
  if(eleClass.contains("number")){
    output.textContent = output.textContent + text;
  }
  else if(eleClass.contains("math")){
    output.textContent = output.textContent + " " + text + " ";
  }
  else if(id == "del"){
    output.textContent = output.textContent.slice(0,-1);
  }
  else if(id == "ac"){
    output.textContent = "";
  }
  else if(id =="equal"){
    output.textContent = temp;
  }
}

function removeDisplay(index){
  output.textContent = output.textContent.slice(0, index);
}
