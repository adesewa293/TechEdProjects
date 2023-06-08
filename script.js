const userName = prompt('Hi user, pleaase tell me your name!')
const isConfirmed = confirm('Confirm your name is ' + userName)
if (isConfirmed){
  alert('welcome to my page ' + userName)
  const titleElem =  document.getElementById('contactTitle')
  titleElem.innerText += ': ' + userName;
} else {
  alert ('Reload to enter your name again')
}
// myFunction(){}