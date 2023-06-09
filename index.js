const option = document.querySelector('.option');
const sketchContainer = document.querySelector('#sketch-container');
const inputRange = document.querySelector('input[type=range]');

const getDimensions = ()=> {
  return Number(inputRange.value);
};

const createTiles = dimensions => {
  for (let j = 0; j < dimensions; j++) {
    const tileRow = document.createElement('div');
    tileRow.classList.add('tile-row');

    for (let i = 0; i < dimensions; i ++) {
      const tile = document.createElement('div');
      tile.classList.add('tile');
      // tile.addEventListener('mouseover', function(){
      //   this.classList.add('clicked');
      // });
  
      tileRow.appendChild(tile);
    }
    sketchContainer.appendChild(tileRow);
  }  
};

const clearSketchContainer = () => {
  sketchContainer.textContent = '';
};

const updateText = newDimension => {
  document.querySelectorAll('.dimensionText').forEach(span => {
    span.textContent = newDimension;
  });
};

const updateSketchSize = () => {
  clearSketchContainer();
  createTiles(getDimensions());
  updateText(inputRange.value);
}

let isCursorInSketch = false;
let color = generateColor();
sketchContainer.addEventListener('mouseover', function(e){
  isCursorInSketch = true;
  

  if (isCursorInSketch) {
    document.querySelectorAll('.tile').forEach(tile => {
      tile.addEventListener('mouseover', function(){
        this.style.backgroundColor = color;
      });
    });
  }
});

function generateRandNum() {
  return Math.round(Math.random()*255);
};

function generateColor() {
  return `rgb(${generateRandNum()}, ${generateRandNum()}, ${generateRandNum()})`;
}

sketchContainer.addEventListener('mouseleave', function(){
  isCursorInSketch = false;
  color = generateColor();
})

window.onload = createTiles(getDimensions());
inputRange.addEventListener('change', updateSketchSize);

