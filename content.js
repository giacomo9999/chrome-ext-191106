// alert("Hello Le!");
// document.querySelector("body");
// document.addEventListener("keypress", test);
document.addEventListener("mouseover", test);
// let body = document.querySelector("body");
let array = [];
function test(e) {
  console.log(e);
  //   console.log("I AM HERE.");
  //   e.target.style.color = "orange";
  //   document.body.style.background = "green";
  array.push(e);
  //   console.log("I AM HERE.");
  console.log(array);
}
