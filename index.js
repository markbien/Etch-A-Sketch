// CREATE 16x16 SQUARE DIVS
const bod = document.querySelector("body");
const main = document.createElement("main");
bod.appendChild(main);
const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
bod.appendChild(resetButton);
let isDrawing = false;

// CREATE 16 MAIN DIVS AND APPEND TO bod
for (let j = 1; j <= 32; j++) {
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("container");
  mainDiv.classList.add(`container-${j}`);

  // APPEND mainDiv TO bod
  main.appendChild(mainDiv);

  // CREATE 16 DIVS AND APPEND TO container1
  for (let i = 1; i <= 32; i++) {
    const div = document.createElement("div");
    div.classList.add(`sub-container`);
    // APPEND div TO mainDiv
    mainDiv.appendChild(div);
  }
}

// EVENT LISTENER
// SELECT THE BOXES
const subContainers = document.querySelectorAll(".sub-container");
main.addEventListener('mousedown', ()=> isDrawing = true);
main.addEventListener('mouseup', ()=> isDrawing = false);
main.addEventListener('mouseleave', ()=> isDrawing = false);

subContainers.forEach((sub) => {
  sub.addEventListener("mouseover", handleEvent);
});

resetButton.addEventListener("click", clearAllBoxes);

// FUNCTIONS
function handleEvent() {
  if (isDrawing === true) {
    this.classList.add("color");
  }
}

function clearAllBoxes() {
  subContainers.forEach((sub) => sub.classList.remove("color"));
}
