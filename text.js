let text = 'Enter your text here...';

//create input field
let input = document.createElement('input');
input.style.position = 'fixed';
input.style.top = '20px';
input.style.left = '30%';
input.style.width = '20vw';
input.style.border = 'none';
input.style.borderBottom = '2px solid rgba(0, 0, 0, .87)';
input.style.fontSize = '18px';
input.setAttribute('placeholder', text);

//change text on input
input.addEventListener('input', function () {
   text = this.value;
   setElementsToText();
});

//append input field to change default text
document.querySelector('header').append(input);

//set default text to input text on scroll
window.addEventListener('scroll', function() {
   setElementsToText();
});

//set example default sentences to input text
function setElementsToText(){
   let el = document.querySelectorAll('gf-content-editable');

   [].forEach.call(el, function(e) {
      e.textContent = text;
   });
}