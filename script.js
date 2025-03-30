const div = document.querySelector("div");

function printHello() {
  console.log("Hello");
}
function printTableOf2() {
  for (let x = 2; x <= 20; x += 2) {
    console.log(x);
  }
}

// btn.onclick = printHello;

// btn.onclick = printTableOf2;

// event bubbling and event propagation, event delegation

div.addEventListener("click", (event) => {
  console.log(event.target);
});
