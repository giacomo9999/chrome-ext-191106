// console.log("Here.");
// document.addEventListener("mouseover", test);

// function test(e) {
//   e.target.style.color = "pink";
//   document.body.style.background = "pink";
//   document.body.style.color = "pink";
// }

// const divs = document.querySelectorAll("div");

// document.addEventListener("DOMContentLoaded", ready);

const ps = document.querySelectorAll("p");
// const divs = document.querySelectorAll("div");
// const h1s = document.querySelectorAll('h1');
// const h2s = document.querySelectorAll('h2')

function arrayMaker(tags) {
  for (let i = 0; i < ps.length; i++) {
    let text = ps[i].innerHTML; // that's a string;
    text = text.replace("release", "Pikachu");
    ps[i].innerHTML = text;
    window.stop()
    ;
  }
}

arrayMaker(ps);
// arrayMaker(divs);
// arrayMaker(h1s);
// arrayMaker(h2s)
// divs.forEach(div => {
//   div.style.color = "purple";
//   div.style.background = "pink";
// });
