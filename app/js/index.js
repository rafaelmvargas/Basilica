const el = document.querySelector('h2')
const basilChefs = ['mama', 'papa', 'baby']
const basilTexture = ['greasy', 'frozen', 'spicy']

function random(array) {
  const max = array.length
  const randomIndex = Math.floor(Math.random() * max)
  return array[randomIndex]
}

var recipeName =
  'My ' + random(basilChefs) + "'s " + random(basilTexture) + ' pesto'
console.log(recipeName)

var recipeName = `${random(basilChefs)}'s ${random(basilTexture)} pesto`

el.innerHTML = recipeName

/**
 * api
 */
const API = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'

fetch(API)
  .then((response) => response.json())
  .then(function (data) {
    document.querySelector('.quote').innerText = data
  })