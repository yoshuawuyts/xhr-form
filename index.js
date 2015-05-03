const customElement = require('custom-element')
const event = require('synthetic-dom-events')
const sliced = require('sliced')

const form = customElement(window.HTMLFormElement.prototype)
form.extends = 'form'

module.exports = form

form.on('created', function () {
  this.addEventListener('submit', this.listener = listener.bind(this))
})

form.on('detached', function () {
  this.removeEventListener('submit', this.listener)
})

function listener (e) {
  e.stopPropagation()
  e.preventDefault()

  const els = e.target.elements || []
  const res = {}

  sliced(els).forEach(function (el) {
    const name = el.name
    if (name) res[name] = el.value
  })

  this.dispatchEvent(event('xhr', {data: res}))
}
