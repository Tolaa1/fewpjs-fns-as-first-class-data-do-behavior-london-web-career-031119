function greet(timeStr) {
  const hour = parseInt(timeStr)
  //const hour = parseInt(timeStr, 10);
  if ( hour < 12) return "Good Morning"
  if ( hour > 17) return "Good Evening"
  return "Good Afternoon"

}

function displayMessage(msg) {
  document.getElementById("greeting").textContent = msg;
}

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
