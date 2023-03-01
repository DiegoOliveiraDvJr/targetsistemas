function reverseString(texto){

  let string = texto;
  let invertedString = "";
  
  for (let i = string.length - 1; i >= 0; i--) {
    invertedString += string[i];
  }

  return invertedString;
  
}

document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('form-program');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let texto = document.getElementById('string').value;
    let msg =  document.getElementById('response-msg');
    msg.innerHTML = reverseString(texto);

  })

});





