const numpad = document.querySelector('.numpad');
const output = document.querySelector(".output");
const input = document.querySelector(".input");
let numArr = [];
let opArr = [];
let i = 0;
opArr[0] = "+";
numArr[0] = 0;
let result = 0;
let flag = 0;

numpad.addEventListener('click', function(event){
  let text = document.getElementById(event.target.id);
  console.log(text);
  handleButtonClick(event.target.id, text.textContent);
  populateDisplay(event.target.id, text.textContent);
})

function handleButtonClick(id, text){
  const element = document.getElementById(id);
  const eleClass = element.classList;
  const eleText = element.textContent;
  if(eleClass.contains("number")){
    if(!(numArr[i])){
      numArr[i] = +(text);

    }
    else{
      numArr[i] = +(numArr[i] + text);
    } 
  }
  else if(eleClass.contains("math")){
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
    console.log(result);
    numArr = [];
    opArr = [];
    i = 0;
    opArr[0] = "+";
    numArr[0] = 0;
    numArr = result;
    result = 0;
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
function populateDisplay(id, text){
  console.log(text);
}

