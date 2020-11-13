var form = document.querySelector('.input')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

form.addEventListener('submit', function(e) {
 e.preventDefault()
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=35249d85811d90b11a4bbda03f6c2eba')
.then(response => response.json())
.then(data => {
var nameValue = data['name'];
var tempValue = data['main']['temp'];
var descValue = data['weather'][0]['description'];

name.innerHTML =  nameValue;
temp.innerHTML = tempValue;
desc.innerHTML = descValue;

})
.catch(err => alert('Wrong city name!'))


})
