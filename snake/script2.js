var FIELD_SIZE_X = 20;
var FIELD_SIZE_Y = 20;
var SNAKE_SPEED = 300;
var NEW_FOOD_TIME = 5000;
var FOOD_PRICE = 100;
var NEW_ROCK_TIME = 5000;

var isGameRunning = false;
var snakeTimer;
var rockTimer;
var snake = [];
var direction = 'x-';



function init() {
  var startButton = document.getElementById('snake-start');
  startButton.addEventListener('click', startGame);

  var renewButton = document.getElementById('snake-renew');
  renewButton.addEventListener('click', refreshGame);

  addEventListener('keydown', changeDirection);

  buildGameField();
  var scoreDiv = document.getElementById('score');
  scoreDiv.innerHTML = score;
}

function buildGameField() {
  var gameTable = document.createElement('table');
  gameTable.classList.add('game-table');

  for(var i = 0; i < FIELD_SIZE_X; i++) {
    var row = document.createElement('tr');
    row.classList.add('game-table-row');

    for(var j = 0; j < FIELD_SIZE_Y; j++) {
      var cell = document.createElement('td');
      cell.classList.add('game-table-cell');
      cell.classList.add('cell-' + i + "-" + j);

      row.appendChild(cell);
    }
    gameTable.appendChild(row);
  }

  document.getElementById('snake-field').appendChild(gameTable);
}

function changeDirection(event) {
  switch (event.keyCode) {
    case 37:
      if(direction != 'y+') {
        direction = 'y-';
      }
      break;
    case 38:
      if(direction != 'x+') {
        direction = 'x-';
      }
      break;
    case 39:
      if(direction != 'y-') {
        direction = 'y+';
      }
      break;
    case 40:
      if(direction != 'x-') {
        direction = 'x+';
      }
      break;

  }
}

function startGame() {
  isGameRunning = true;
  respawn();

  snakeTimer = setInterval(move, SNAKE_SPEED);
  rockTimer = setInterval(createRock, NEW_ROCK_TIME)
  setTimeout(createFood, NEW_FOOD_TIME);
}

function respawn() {
  var startCoordX = Math.floor(FIELD_SIZE_X / 2);
  var startCoordY = Math.floor(FIELD_SIZE_Y / 2);

  var snakeHead
    = document.getElementsByClassName('cell-' + startCoordX + '-' + startCoordY)[0];
  snakeHead.classList.add('snake-unit');

  var snakeTail
    = document.getElementsByClassName('cell-' + (startCoordX - 1) + '-' + startCoordY)[0];

  snakeTail.classList.add('snake-unit');

  snake = [];

  snake.push(snakeHead);
  snake.push(snakeTail);
}

function move() {
  var snakeHeadClasses = snake[snake.length - 1].classList;

  var newUnit;
  var snakeCoords = snakeHeadClasses[1].split('-');
  var coordX = parseInt(snakeCoords[1]);
  var coordY = parseInt(snakeCoords[2]);

  switch(direction) {
    case 'x-':
      newUnit = document.getElementsByClassName('cell-' + (coordX - 1) + '-' + coordY)[0];
      break;
    case 'x+':
      newUnit = document.getElementsByClassName('cell-' + (coordX + 1) + '-' + coordY)[0];
      break;
    case 'y-':
      newUnit = document.getElementsByClassName('cell-' + coordX + '-' + (coordY - 1))[0];
      break;
    case 'y+':
      newUnit = document.getElementsByClassName('cell-' + coordX + '-' + (coordY + 1))[0];
      break;
  }

  if(newUnit !== undefined && !newUnit.classList.contains('snake-unit') && !newUnit.classList.contains('rock-unit')) {
    newUnit.classList.add('snake-unit');
    snake.push(newUnit);

    if(!newUnit.classList.contains('food-unit')) {
      var removed = snake.splice(0, 1)[0];
      removed.classList.remove('snake-unit');
    } else {
      newUnit.classList.remove('food-unit');
      createFood();
      setScore();
    }
  } else {
    finishGame();
  }
}

function setScore() { 
    var score = 0;
    var updateScore = function(){
    score = score + FOOD_PRICE;
    var scoreDiv = document.getElementById('score');
    scoreDiv.innerHTML = score;
    }
}

function createFood() {
  var foodCreated = false;

  while(!foodCreated) {
    var foodX = Math.floor(Math.random() * FIELD_SIZE_X);
    var foodY = Math.floor(Math.random() * FIELD_SIZE_Y);

    var foodCell = document.getElementsByClassName('cell-' + foodX + '-' + foodY)[0];

    if(!foodCell.classList.contains('snake-unit')) {
      foodCell.classList.add('food-unit');
      foodCreated = true;
    }
  }
}

function createRock() {

    var rockX = Math.floor(Math.random() * FIELD_SIZE_X);
    var rockY = Math.floor(Math.random() * FIELD_SIZE_Y);

    var rockCell = document.getElementsByClassName('cell-' + rockX + '-' + rockY)[0];

    if(!rockCell.classList.contains('snake-unit') && !rockCell.classList.contains('food-unit')) {
      rockCell.classList.add('rock-unit');
      var timer = Math.floor(Math.random() * 60000); // препятствие существует случайный промежуток времени, в это время могут появляться другие препятствия
      function removeRock() {
        rockCell.classList.remove('rock-unit');
      }
      var lifeTime = setInterval(removeRock, timer);

    }
  }

function finishGame() {
  clearInterval(snakeTimer);
  isGameRunning = false;

  alert('GAME OVER');
  location.reload(); // иначе если нажать на старт, не нажав сперва на новую игру, и врезаться новой змейкой в труп старой, бесконечно выводится сообщение game over
}

function refreshGame() {
  location.reload();
}

window.onload = init;
