// CREATE 16x16 SQUARE DIVS
const bod = document.querySelector("body");
const main = document.createElement('main');
bod.appendChild(main);

// CREATE 4 MAIN DIVS AND APPEND TO bod
for (let j = 1; j <= 4; j++) {
  const mainDiv = document.createElement("div");
  mainDiv.classList.add('container');
  mainDiv.classList.add(`container-${j}`);

  // APPEND mainDiv TO bod
  main.appendChild(mainDiv);

  // CREATE 4 DIVS AND APPEND TO container1
  for (let i = 1; i <= 4; i++) {
    const div = document.createElement("div");
    div.classList.add(`sub-container`);
    // APPEND div TO mainDiv
    mainDiv.appendChild(div);
  }  
}
