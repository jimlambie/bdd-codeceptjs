
'use strict'

const { assert, expect } = require('chai')

let I

module.exports = {

  _init () {
    I = require('../stepDefinitions/steps_file.js')()
  },

  // insert your locators and methods here
  locators: {
    descriptionTitle: (locate('h1').as('Page Title')),
    descriptionText: (locate('p.normal').as('Page Description')),
    descriptionRoadmapArchive: 'Show roadmap archive',
    dateColumn: (locate('#stick').as('Date Column')),
    roadmapBoxes: (locate('#stickContainer > div.roadmap__milestones.grid.col--right > div:nth-child(n)').as('Roadmap Boxes'))
  },

  validatePage () {
    I.amOnPage('/roadmap/?cache=false')
    I.seeTitleEquals('Roadmap | DADI')
  },

  validateDescription () {
    I.seeTextEquals('Roadmap', this.locators.descriptionTitle)
    I.seeTextEquals('A high level roadmap for DADI technology, showing development milestones for both network and web services.', this.locators.descriptionText)
  },

  validateRoadmapArchive () {
    I.click(this.locators.descriptionRoadmapArchive)
    I.waitForText('2017')
    I.seeInTitle('Roadmap | DADI')
  },

  async validateRoadmapSection () {
    I.scrollTo(this.locators.dateColumn)
    I.seeElement(this.locators.dateColumn)
    let count = await I.grabNumberOfVisibleElements(this.locators.roadmapBoxes)
    await I.seeNumberOfElementsAtLeastOne(count, 1)
  }
}
