//Function to display an alert
function showAlert() {
  const message = "You clicked the button!";
  alert(message);
}

// Function to display a result message
function showResult(message) {
  alert(message);
}

// Function to display an error message
function showError(message) {
  alert(message);
}

function showMultiplyTable(number) {
  let htmlTable = "<h2>Multiplication table of " + number + "</h2>";
  htmlTable +=
    "<table class='table'><thead><tr><th>Operation</th><th>Result</th></tr></thead><tbody>";

  for (let i = 1; i <= 10; i++) {
    const result = number * i;
    htmlTable +=
      "</td><td>" + number + " x " + i + "</td><td>" + result + "</td></tr>";
  }

  htmlTable += "</tbody></table>";
  // Show the table in the element with the ID "multiplyTable"
  document.getElementById("multiplyTable").innerHTML = htmlTable;
}
//-----------------------------------------------EXERCICES-------------------------------------------------------------

//EXERCICE 1
const myButton = document.getElementById("myButton");
myButton.addEventListener("click", showAlert);

//EXERCICE 2
const myButton2 = document.getElementById("btn");
myButton2.addEventListener("mouseover", function () {
  const message = "Click on the button";
  alert(message);
});

//EXERCICE 3
const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function () {
  const message = document.getElementById("inputMessage").value;
  if (message) {
    alert(message);
  } else {
    showError("Please enter a message");
  }
});

//EXERCICE 4
const btnResult = document.getElementById("btnResult");
const multiplyTable = document.getElementById("multiplyTable");
const inputElement = document.getElementById("inputNumber");
btnResult.addEventListener("click", function () {
  const number = parseInt(inputElement.value);
  //Check if the number is valid
  if (Number.isInteger(number)) {
    showMultiplyTable(number);
  } else {
    showError("Please enter a valid number");
  }
});
