
'use strict'

const { expect } = require('chai')

class MyHelper extends Helper {
  seeNumberOfElementsBetween (elementCount, minimum, maximum) {
    expect(elementCount >= minimum).to.be.true
    expect(elementCount <= maximum).to.be.true
  }
}

module.exports = MyHelper
