
console.log("Here.")
document.addEventListener("mouseover", test);

function test(e) {
  e.target.style.color = "orange";
  document.body.style.background = "green";
}

// const divs = document.querySelectorAll("div");
// console.log(divs);
