var buttons = document.querySelectorAll(".alpha-btn");
var display = document.getElementById("pressed-display");

for(i = 0 ; i < buttons.length ; i++ ) {
     buttons[i].addEventListener("click", function() {
       this.style.color = "white";
       var keyWord = this.innerHTML
       onClickButton(keyWord);
       buttonAnimation(keyWord);
     }
   )
}

document.addEventListener("keypress", function(event) {
  onClickButton(event.key);
  buttonAnimation(event.key);
})

function onClickButton(keyWord) {
  var audio = new Audio(`sounds/${keyWord.toLowerCase()}.mp3`);
  display.innerHTML = "";
  display.innerHTML = keyWord.toUpperCase();
  audio.play();
}

function buttonAnimation(currentKey) {
  var button = document.querySelector('.btn-' + currentKey.toLowerCase())
  button.classList.add('pressed');
  setTimeout(() => { button.classList.remove('pressed'); }, 500);
}
