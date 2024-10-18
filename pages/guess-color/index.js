// alert(".js Connected.");
let num = 6;
let bgc = '#770000';
let colors = generateRandomColors(num);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorCode = document.getElementById('colorCode');
let message = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#resetButton');
let diffEasy = document.querySelector('#diffEasy');
let diffHard = document.querySelector('#diffHard');

diffEasy.addEventListener('click', function() {
  this.classList.add('selected');
  diffHard.classList.remove('selected');
  num = 3;
  reset();
  for(let i=3; i<squares.length; i++) {
    squares[i].style.display = 'none';
  }


});

diffHard.addEventListener('click', function() {
  this.classList.add('selected');
  diffEasy.classList.remove('selected');
  num = 6;
  reset();
  for(let i=3; i<squares.length; i++) {
    squares[i].style.display = 'block';
  }
});


colorCode.textContent = pickedColor;

for(let i=0; i<squares.length; i++) {
  squares[i].style.background = colors[i];
}

for(let i=0; i<squares.length; i++) {
  squares[i].addEventListener("click", function() {
    let clickedColor = this.style.background;
    // alert(clickedColor);
    if(clickedColor === pickedColor) {
      // alert("correct");
      for(let j=0; j<squares.length; j++) {
        squares[j].style.background = pickedColor;
      }
      h1.style.background = pickedColor;
      message.textContent = "Correct.";
      resetButton.textContent = "Play Again!!";
    }
    else {
      // alert('Wrong');
      this.style.background = bgc;
      message.textContent = "Try Again";
    }
  });
}


function pickColor() {
  let i = Math.floor(Math.random() * colors.length);
  return colors[i];
}

function generateRandomColors(num) {
  let colors = [];
  for(let i=0; i<num; i++) {
    colors.push(`rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`);
  }
  console.log(colors);
  return colors;
}


resetButton.addEventListener('click', reset);

function reset() {
  this.textContent = "New Colors";
  h1.style.background = "steelblue";
  message.textContent = "";

  colors = generateRandomColors(num);


  for(let i=0; i<squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  colorCode.textContent = pickedColor;
  pickedColor = pickColor();
};
