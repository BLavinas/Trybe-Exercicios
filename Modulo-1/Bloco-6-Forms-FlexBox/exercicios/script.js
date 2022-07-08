let submitButton = document.querySelector("#submitButton");
function preventDefaultButton(event) {
  event.preventDefault();
}
submitButton.addEventListener("click", preventDefaultButton);
// window.onload = function () {
//   submitButton.addEventListener("click", preventDefaultButton);
// };
