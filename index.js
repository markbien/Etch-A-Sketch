// CREATE 16x16 SQUARE DIVS
const bod = document.querySelector("body");
let squaresPerSide = 16;

const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
bod.appendChild(resetButton);
let isDrawing = false;

resetButton.addEventListener("click", clearAllBoxes);

// FUNCTIONS
function handleEvent() {
  if (isDrawing === true) {
    this.classList.add("color");
  }
}

function clearAllBoxes() {
//   createContainer();
  const subContainers = document.querySelectorAll('.sub-container');
  subContainers.forEach((sub) => sub.classList.remove("color"));
}

function createMain() {
  const main = document.createElement("main");
  bod.appendChild(main);
}

function createContainer() {
  // CREATE 16 MAIN DIVS AND APPEND TO bod
  for (let j = 1; j <= squaresPerSide; j++) {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("container");
    mainDiv.classList.add(`container-${j}`);

    // APPEND mainDiv TO bod
    const main = document.querySelector("main");
    main.appendChild(mainDiv);

    // CREATE 16 DIVS AND APPEND TO container1
    for (let i = 1; i <= squaresPerSide; i++) {
      const div = document.createElement("div");
      div.classList.add(`sub-container`);
      // APPEND div TO mainDiv
      mainDiv.appendChild(div);
    }
  }
}

function assignSize() {
  // ASSIGNS THE SIZE OF THE CONTAINERS
  const container = document.querySelectorAll(".container");
  const size = 960;
  container.forEach((cont) => {
    cont.style.height = 960 / squaresPerSide + "px";
  });
}

function createEventListeners() {
  const main = document.querySelector("main");

  // EVENT LISTENER
  // SELECT THE BOXES
  const subContainers = document.querySelectorAll(".sub-container");
  main.addEventListener("mousedown", () => (isDrawing = true));
  main.addEventListener("mouseup", () => (isDrawing = false));
  main.addEventListener("mouseleave", () => (isDrawing = false));

  subContainers.forEach((sub) => {
    sub.addEventListener("mouseover", handleEvent);
  });
}

// test
createMain();
createContainer();
assignSize();
createEventListeners();
