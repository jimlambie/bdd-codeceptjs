
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
    coreTeam: (locate('h3').withText('Core').as('Core Team')),
    teamBoxes: (locate('body > main > div > div:nth-child(2) > div:nth-child(n) > a').as('Team Boxes')),
    advisors: (locate('h3').withText('Advisors').as('Advisors')),
    advisorBoxes: (locate('body > main > div > div:nth-child(4) > div > a').as('Advisor Boxes'))
  },

  validatePage () {
    I.amOnPage('/team/?cache=false')
    I.seeTitleEquals('The Team | DADI')
  },

  validateDescription () {
    I.seeTextEquals('The Team', this.locators.descriptionTitle)
    I.seeTextEquals('DADI has assembled a world class engineering, strategic and design team with over 300 years of collective experience. The team is 18 strong – all full time. DADI today represents the culminiation of four years of R&D by the team and $2 million of direct investment by the founders.', this.locators.descriptionText)
  },

  validateCoreTeam () {
    I.scrollTo(this.locators.coreTeam)
    I.seeTextEquals('CORE TEAM', this.locators.coreTeam)
    I.seeNumberOfVisibleElements(this.locators.teamBoxes, 20)
  },

  validateAdvisors () {
    I.scrollTo(this.locators.advisors)
    I.seeTextEquals('ADVISORS', this.locators.advisors)
    I.seeNumberOfVisibleElements(this.locators.advisorBoxes, 1)
  }
}
