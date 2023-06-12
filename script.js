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
// for (let i = 0; i < 1; i++) {
//   let color = prompt("Enter a number:");
//   if (color.toLowerCase() === "red") {
//     return("That is my favorite color too!");
//   }
// }
// for (let i=0; i < 1; i++)

const numTimes = parseInt(prompt("How many cats would you like to see? :"));

if (!isNaN(numTimes) && numTimes > 0) {
  for (let i = 0; i < numTimes; i++) {
    const image = new Image();
    image.src = 'cat.jpeg';
    document.body.appendChild(image);
    // counter++;
  }
} else {
  alert("Invalid input! Please enter a positive number.");
}
