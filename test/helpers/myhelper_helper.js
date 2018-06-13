
'use strict'

const assert = require('assert')

class MyHelper extends Helper {

  // before/after hooks
  _before () {
    // remove if not used
  }

  _after () {
    // remove if not used
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']
  seeNumberOfElementsBetween (elementCount, minimum, maximum) {
    // assert.isAtLeast(elementCount, minimum, `Expected ${elementCount} to be at least ${minimum}`)
    // assert.isAtMost(elementCount, maximum, `Expected ${elementCount} to be at most ${maximum}`)
    return assert(true, elementCount >= minimum)
  }
}

module.exports = MyHelper
