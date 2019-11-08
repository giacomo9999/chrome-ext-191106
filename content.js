// // console.log("Here.");
document.addEventListener("mouseover", test);

function test(e) {
  // e.target.style.color = "pink";
  // e.target.innerHTML = "Hi Le";

  const ps = document.querySelectorAll("p");
  const divs = document.querySelectorAll("div");
  const h1s = document.querySelectorAll("h1");
  const h2s = document.querySelectorAll("h2");
  const as = document.querySelectorAll("a");

  function arrayMaker(tags) {
    for (let i = 0; i < tags.length; i++) {
      let text = tags[i].innerHTML; // that's a string;
      text = text.replace("Trump", "Pikachu");

      tags[i].innerHTML = text;
    }
  }

  arrayMaker(as);
  arrayMaker(ps);
  arrayMaker(divs);
  arrayMaker(h1s);
  arrayMaker(h2s);
  // e.style.cursor = "pointer"
  // document.body.style.background = "red";
}

// // const divs = document.querySelectorAll("div");

// // document.addEventListener("DOMContentLoaded", ready);

// // var blueButton = document.createElement("BUTTON");
// // blueButton.innerHTML = "Blue";

// // let blueButton = document.querySelector("#blueButton")

// // // blueButton.addEventListener("click", myFunction);

// // function myFunction() {
// //   console.log("I am blue");
// // }

// arrayMaker(ps);
// arrayMaker(divs);
// arrayMaker(h1s);
// arrayMaker(h2s)
// // divs.forEach(div => {
// //   div.style.color = "purple";
// //   div.style.background = "pink";
// // });
