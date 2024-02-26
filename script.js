const input = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const result = document.getElementById('result')


button.addEventListener('click', () => {

  if(input.value.length === 0) {alert('Please input a value')} else {
    
  let myArr = []

  for (let iter = 0; iter<input.value.length; iter++) {
    if(input.value[iter].match(/[a-zA-Z0-9]/)) {
      myArr.push(input.value[iter].toUpperCase())
    } 
  };

  if (myArr.join('') == myArr.reverse().join('')) {
    result.textContent = `${input.value} is a palindrome`
  } else {
    result.textContent = `${input.value} is not a palindrome`
  }
  }
});