document.getElementById("submit-btn").addEventListener("click", function () {
  const getInput = document.getElementById("input").value;
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  const resultElement = document.getElementById("showing-result");

  if (getInput === randomNumber.toString()) {
    resultElement.innerText = "You are a lucky person!!";
  } else {
    resultElement.innerText = "Better luck next time";
  }
  document.getElementById("input").value = ""; // Clear input

  setTimeout(function () {
    resultElement.innerText = ""; // Clear result text
  }, 1600); // Adjust the delay as needed (measured in milliseconds)
});
