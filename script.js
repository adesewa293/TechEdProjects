const userName = prompt('Hi user, please tell me your name!')
const isConfirmed = confirm('Confirm your name is ' + userName)
if (isConfirmed){
  alert('welcome to my page ' + userName)
  const titleElem =  document.getElementById('contactTitle')
  titleElem.innerText += ': ' + userName;
} else {
  alert ('Reload to enter your name again')
}
function myFunction(event){
  // console.log('event', event);
  event.preventDefault();
  const inputValue = event.target.elements.name.value;
  // alert('That is my favorite color too' + inputValue)
  const mainElem = document.getElementById('mainContent')
  mainElem.style.backgroundColor = inputValue;
};