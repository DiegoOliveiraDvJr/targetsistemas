function existInFibonacci(number){

  let a = 0;
  let b = 1;
  let nextNumber = 0;
  
  while (nextNumber < number) {
    nextNumber = a + b;
    a = b;
    b = nextNumber;
  }

  return nextNumber == number;
}

document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('form-program');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let number = document.getElementById('number').value;
    let msg =  document.getElementById('response-msg');
    msg.innerText = '';
    msg.innerText = existInFibonacci(number) ? `O número informado PERTENCE à sequência de Fibonacci.` : `O número informado NÃO PERTENCE à sequência de Fibonacci.`;

    setTimeout(()=>{
      msg.innerText = '';
    }, 3000);
  })

});





