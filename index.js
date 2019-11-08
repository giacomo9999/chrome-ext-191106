
let blueButton = document.getElementById('blueButton')
blueButton.addEventListener("click", changeTest)


function changeTest(e){
    blueButton.style.backgroundColor = 'yellow'
    // function test(e) {
//   e.target.style.color = "pink";
//   document.body.style.background = "pink";
//   document.body.style.color = "pink";
// }
}

document.getElementById('myP').style.cursor = "pointer"

// from manifest.json:
// "default_popup": "index.html"