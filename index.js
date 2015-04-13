const customElement = require('custom-element')
const event = require('synthetic-dom-events')
const emitter = require('component-emitter')
const sliced = require('sliced')

const form = customElement(window.HTMLFormElement.prototype)
form.extends = 'form'

module.exports = form

form.on('created', function () {
  this.addEventListener('submit', )
})

function listener (e) {
  e.stopPropagation()
  e.preventDefault()

  const els = e.target.elements || {}
  const res = {}

  sliced(els).forEach(function(el) {
    const name = el.name
    if (name) res[name] = el.value
  })

  this.dispatchEvent(event('xhr', {data: res}))
}.bind(this)
