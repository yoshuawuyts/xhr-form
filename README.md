# xhr-form
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

Create an asynchronous form element with custom elements. wip, does not work as
advertised yet.

## Installation
```bash
$ npm install xhr-form
```

## Usage
```js
document.registerElement('xhr-form', require('../'))

const form = domify(`
  <form is="xhr-form" action="/api/yosh/wow">
    <input type="text" name="something"></input>
    <input type="submit">submit</input>
  </form>
`)

document.body.appendChild(form)

// as a callback
form.addEventListener('xhr', function (e, submit) {
  console.log(e.data)
  submit(e.data, function (err, res) {
    if (err) return console.error(err)
    console.log('submission done', res)
  })
})

// as a promise
form.addEventListener('xhr', function (e, submit) {
  console.log(e.data)
  submit(e.data)
    .then(res => console.log('submission done', res))
    .catch(err => console.log(err))
  })
})
```

## See Also
- [whatwg-fetch](https://github.com/github/fetch) - A window.fetch JavaScript polyfill
- [async-form-element](https://github.com/josh/async-form-element) - Progressively enhances a form element to submit via XHR

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/xhr-form.svg?style=flat-square
[npm-url]: https://npmjs.org/package/xhr-form
[travis-image]: https://img.shields.io/travis/yoshuawuyts/xhr-form.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/xhr-form
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/xhr-form.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/xhr-form?branch=master
[downloads-image]: http://img.shields.io/npm/dm/xhr-form.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/xhr-form
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
