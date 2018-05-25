
'use strict'

let I

module.exports = {

  _init () {
    I = require('../stepDefinitions/steps_file.js')()
  },

  // insert your locators and methods here
  locators: {
    contributeSection: '#contribute > h3 > span'
  },

  validate () {
    I.scrollTo(this.locators.contributeSection)
    I.seeTextEquals('BE PART OF THE NETWORK', this.locators.contributeSection)
    I.seeTextEquals('If you have spare computational power, DADI is a great application of your resource, delivering real world services for individuals, businesses and governments, whilst delivering income for you.', 'p.normal.mb--x2')
  }
}
