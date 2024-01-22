let buttons = Array.from(document.querySelectorAll("button"));
let output = document.querySelector(".output");
let input = document.querySelector(".input");
let math = ["/", "+", "-", "*"];
let numArr = [];
let operator = "";
let i = 0;

buttons.forEach(button => {
    button.addEventListener('click', function(event) {
      let text = document.querySelector(event.target.id);
      handleButtonClick(event.target.id, text.textContent);
    });
  });

function handleButtonClick(buttonId, text) {
  console.log(`${buttonId}`);
  handleOutput(buttonId, text);
  populateDisplay(text);
}

function handleOutput(buttonId, text){
  switch (buttonId) {
    case "del":
      numArr.pop();
      i--;
      break;
    case "ac":
      numArr = [];
      operator= "";
      i = 0;
      break;
    case "divide":
      numArr[i++] = "/";
      break;
    case "mul":
      numArr[i++] = "*";
      break;
    case "add":
      numArr[i++] = "+";
      break;
    case "sub":
      numArr[i++] = "-";
      break;
    case "equal":
      populateDisplay("AC");
      populateDisplay(result(numArr));
      return;
    case "dot":
      numArr[i++] = "."
      break;
    default:
      if(+(text) > Number.MIN_VALUE){
        numArr[i++] = `${text}`;
      }
      else{
        populateDisplay("AC");
        populateDisplay("ERROR!");
      }
      break;
  }
}
function result(arr){
  let j = 0;
  let num1 = "";
  let num2 = "";
  while(j < numArr.length){
    if(math.includes(arr[j])){
      if(operator){
        num1 = operate(operator, num1, num2);
        num2 = "";
      }
      operator = arr[j];
    }
    else{
      if(!operator){
        num1 += arr[j];
      }
      else{
        num2 += arr[j];
      }
    }
    j++;
  }
  return operate(operator, num1, num2);
}

function operate(operator, result, num){
  result = +(result);
  num = +(num);
  switch (operator) {
    case "+":
      return result + num;
    case "-":
      return result - num;
    case "*":
      return result * num;
    case "/":
      return result / num;
    default:
      break;
  }
}

function populateDisplay(text){
  switch (text) {
    case "DEL":
      output.textContent = (output.textContent.at(-2) === " ") ? 
         output.textContent.slice(0, -2) : 
         output.textContent = output.textContent.slice(0, -1);
      return;
    case "AC":
      output.textContent = "";
      return;
    case "+":
    case "-":
    case "×":
    case "÷":
      output.textContent = `${output.textContent} ${text} `;
      return;
    default:
      output.textContent = output.textContent + text;
      return;
  }
  
}

input.addEventListener("keydown", function(event){
  event.preventDefault();
  handleKeypress(event.key);
})

function handleKeypress(key){
  if (+(key) > Number.MIN_VALUE) {
    handleOutput(key);
    populateDisplay(key);
    }
  else{
    switch (key) {
      case "Backspace":
        handleOutput("del");
        populateDisplay("DEL");
        break;
      case "/":
      case "*":
      case "+":
      case "-":
        handleOutput(key);
        populateDisplay(key);
        break;
      case "Enter":
        handleOutput("=");
        populateDisplay("=");
        break;
      default:
        alert("Not Supported");
        break;
    }
  }
}

