
'use strict'

let I

module.exports = {

  _init () {
    I = require('../stepDefinitions/steps_file.js')()
  },

  // insert your locators and methods here
  locators: {
    descriptionTitle: (locate('h1').as('Page Title')),
    descriptionText: (locate('p.normal.header__intro').as('Page Description'))
  },

  validatePage () {
    I.amOnPage('/token')
    I.seeTitleEquals('Token | DADI')
  },

  validateDescription () {
    I.seeTextEquals('Token', this.locators.descriptionTitle)
    I.seeTextEquals('Everything you need to know to be a part of the DADI network – or to build amazing digital products with our web services', this.locators.descriptionText)
  }
}
