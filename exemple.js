const button = document.querySelector('#mode')
const span = document.querySelector('span')
const dark = document.querySelector('.dark')
var verify = document.body.contains(dark)



button.addEventListener('click',handelClick)


function handelClick(e) {
  e.preventDefault()

 if (verify) {
document.body.classList.remove('dark')
button.textContent="Thème sombre 🌓"
localStorage.setItem('theme', 'clair')
 }
else if(verify= true) {

 modeSombre()
}
 
}
function modeSombre() {

document.body.classList.add('dark')
button.textContent="Thème clair 🌓"
localStorage.setItem('theme','sombre')

}

 if (localStorage.getItem('theme')){
  if(localStorage.getItem('theme')=='sombre'){
modeSombre()
}
 }   


 