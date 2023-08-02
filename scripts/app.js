const canvas = document.getElementById('canvas');


function initializeGrid(canvas,dimensions = 10){
  canvas.style.gridTemplateColumns = `repeat(${dimensions}, 1fr)`;
  canvas.style.gridTemplateRows = `repeat(${dimensions}, 1fr)`;

  for (let i = 0; i < dimensions*dimensions; i++) {
    const div = document.createElement('div');
    div.classList.add('cell');
    canvas.appendChild(div);
  }
}


initializeGrid(canvas,100);