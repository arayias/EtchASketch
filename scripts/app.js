const canvas = document.querySelector('#canvas');
const gridSizeInput = document.querySelector('#grid-size');
const gridOutlineBtn = document.querySelector('#grid-outline');
const clearBtn = document.querySelector('#clear');
const randomColorBtn = document.querySelector('#random');

const states = {
  defaultGridSize: 16,
  currentGridSize: 16,
  gridOutline: true,
  currentTool: 'pen',
  currentColor: 'black',
  randomColor: false
}

initializeGrid(canvas);

function initializeGrid(canvas,dimensions = states.defaultGridSize){
  canvas.innerHTML = '';
  const gridSizePreview = document.querySelector('.js-grid-size');
  gridSizePreview.innerText = dimensions;
  canvas.style.gridTemplateColumns = `repeat(${dimensions}, 1fr)`;
  canvas.style.gridTemplateRows = `repeat(${dimensions}, 1fr)`;

  for (let i = 0; i < dimensions*dimensions; i++) {
    const div = document.createElement('div');
    div.classList.add('cell');
    states.gridOutline ? div.classList.add('grid-outline') : null;
    canvas.appendChild(div);
  }

  canvas.addEventListener('mousedown', (e) => {
    if(e.target.classList.contains('cell')){
      states.randomColor ? states.currentColor = getRandomColor() : null;
      e.target.style.backgroundColor = states.currentColor;
    }
    e.preventDefault();
    }
  );

  canvas.addEventListener('mouseover', (e) => {
    if(e.target.classList.contains('cell') && e.buttons == 1){
      states.randomColor ? states.currentColor = getRandomColor() : null;
      e.target.style.backgroundColor = states.currentColor;
      }
    e.preventDefault();
    }
  );

}

function getRandomColor(){
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++){
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

gridSizeInput.addEventListener('change', (e) => {
  states.currentGridSize = e.target.value;
  initializeGrid(canvas, states.currentGridSize);
  }
);

gridOutlineBtn.addEventListener('click', (e) => {
  states.gridOutline = !states.gridOutline;
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.classList.toggle('grid-outline');
  });
});

clearBtn.addEventListener('click', (e) => {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.style.backgroundColor = 'white';
  });
});

randomColorBtn.addEventListener('click', (e) => {
  states.randomColor = !states.randomColor;

  states.randomColor ? states.currentColor = getRandomColor() : states.currentColor = 'black';
});








