let buttons = Array.from(document.querySelectorAll("button"));
let output = document.querySelector(".screen");
let displayValue = result = 0;
let num1 = num2 = "";
let operator = "";
let flag = 0;

buttons.forEach(button => {
    button.addEventListener('click', function(event) {
      handleButtonClick(event.target.id);
    });
  });

function handleButtonClick(buttonId) {
  let element = document.querySelector(`#${buttonId}`);
  let numValue = element.textContent;
  populateDisplay(element.textContent);
  switch (buttonId) {
    case "del":
      if(flag === 0){
        num1 = num1.slice(0, -1);
      }
      else{
        num2 = num2.slice(0, -1);
      }
      break;
    case "ac":
      num1 = num2 = flag = 0;
      break;
    case "one":
    case "two":
    case "three":
    case "four":
    case "five":
    case "six":
    case "seven":
    case "eight":
    case "nine":
    case "decimal":
    case "zero":
      if(flag === 0){
        num1 = num1 + `${numValue}`;
      }
      else{
        num2 = num2 + `${numValue}`;
      }
      break;
    case "divide":
      operator = "/";
      flag = 1;
      break;
    case "mul":
      operator = '*';
      flag = 1;
      break;
    case "add":
      operator = '+';
      flag = 1;
      break;
    case "sub":
      operator = '-';
      flag = 1;
      break;
    case "equal":
      populateDisplay(displayValue);
      break;
    default:
      console.log("Unknown button clicked!");
  }
}



function populateDisplay(variable){
  if(variable === "DEL"){
    output.textContent =  output.textContent.slice(0, -1);
    return;
  }
  if(variable === "AC"){
    output.textContent =  "";
    return;
  }
  if(+(variable) >= 0 || +(variable) <= 9 || variable === "."){
    if(flag){
      output.textContent =  output.textContent + " " +`${variable}`;
    }
    else{
      output.textContent =  output.textContent + `${variable}`;
    }
    return;
  }
  output.textContent =  output.textContent + " " +`${variable}`;
}


