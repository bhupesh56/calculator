let buttons = Array.from(document.querySelectorAll("button"));

buttons.forEach(button => {
    button.addEventListener('click', function(event) {
      handleButtonClick(event.target.id);
      console.log(event.target.id);
    });
  });

function handleButtonClick(buttonId) {
  switch (buttonId) {
    case "del":
      console.log("Button 1 clicked!");
      break;
    case "ac":
      console.log("Button 2 clicked!");
      break;
    case "one":
      console.log("Button 3 clicked!");
      break;
    case "two":
      console.log("Button 3 clicked!");
      break;
    case "three":
      console.log("Button 3 clicked!");
      break;
    case "four":
      console.log("Button 3 clicked!");
      break;
    case "five":
      console.log("Button 3 clicked!");
      break;
    case "six":
      console.log("Button 3 clicked!");
      break;
    case "seven":
      console.log("Button 3 clicked!");
      break;
    case "eight":
      console.log("Button 3 clicked!");
      break;
    case "nine":
      console.log("Button 3 clicked!");
      break;
    case "zero":
      console.log("Button 3 clicked!");
      break;
    case "divide":
      console.log("Button 3 clicked!");
      break;
    case "mul":
      console.log("Button 3 clicked!");
      break;
    case "add":
      console.log("Button 3 clicked!");
      break;
    case "sub":
      console.log("Button 3 clicked!");
      break;
    case "equal":
      console.log("Button 3 clicked!");
      break;
    case "decimal":
      console.log("Button 3 clicked!");
      break;
    default:
      console.log("Unknown button clicked!");
  }
}


