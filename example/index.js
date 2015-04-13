const domify = require('domify')

document.registerElement('xhr-form', require('../'))
const form = document.createElement('form', 'xhr-form')

form.appendChild(domify('<input type="text" name="something">'))
form.appendChild(domify('<button type="submit">submit</button>'))

form.addEventListener('xhr', function (e) {
  console.log(e.data)
})

document.body.appendChild(form)
