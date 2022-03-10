// CREATE 16x16 SQUARE DIVS
const bod = document.querySelector("body");
// let squaresPerSide = 16;

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
  //   const subContainers = document.querySelectorAll('.sub-container');
  //   subContainers.forEach((sub) => sub.classList.remove("color"));
  createNewCanvas();
}

function createMain() {
  const main = document.createElement("main");
  bod.appendChild(main);
}

function createContainer(squaresPerSide = 16) {
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

function assignSize(squaresPerSide = 16) {
  // ASSIGNS THE SIZE OF THE CONTAINERS
  const container = document.querySelectorAll(".container");
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

// function createNewCanvas(){
//     const main = document.querySelector('main');
//     if(main) bod.removeChild(main);

//     // createMain();
//     const div = document.createElement('div');
//     const numberInput = document.createElement('input');
//     numberInput.type = 'number';
//     numberInput.max = 100;
//     const createButton = document.createElement('button');
//     createButton.textContent = "Create Grid";

//     div.textContent = "How many squares per side do you want to create?";
//     div.appendChild(numberInput);
//     div.appendChild(createButton);

//     bod.appendChild(div);
//     div.classList.add('message');

//     createButton.addEventListener('click', ()=> {
//         createMain();
//         createContainer();
//         assignSize();
//         createEventListeners();
//     });
// }

// test
createMain();
createContainer();
assignSize();
// createEventListeners();

// createNewCanvas();
