// console.log("Here.");
// document.addEventListener("mouseover", test);

// function test(e) {
//   e.target.style.color = "pink";
//   document.body.style.background = "pink";
//   document.body.style.color = "pink";
// }

// const divs = document.querySelectorAll("div");

const ps = document.querySelectorAll("p");
// const divs = document.querySelectorAll("div");
// const h1s = document.querySelectorAll('h1');
// const h2s = document.querySelectorAll('h2')

const arrayOfPs = [];
// const arrayOfDivs = [];
// const arrayOfH1s = [];
// const arrayOfH2s = [];

function arrayMaker(tags) {
  for (let i = 0; i < ps.length-1; i++) {
    // console.log(`${tags}`, i)
    console.log(tags[i]);
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
