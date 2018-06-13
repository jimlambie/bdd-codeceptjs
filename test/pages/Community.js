
'use strict'

let I

module.exports = {

  _init () {
    I = require('../stepDefinitions/steps_file.js')()
  },

  // insert your locators and methods here
  locators: {
    descriptionTitle: (locate('h1').as('Page Title')),
    descriptionText: (locate('p.normal.header__intro').as('Page Description')),
    findUsBoxes: (locate('a.box').as('Find Us Boxes')),
    twitterBoxDesc: (locate('p').withText('Follow us on Twitter').as('Twitter Box Description')),
    twitterBoxLogo: (locate('img').before(locate('p').withText('Follow us on Twitter')).as('Twitter Box Logo')),
    telegramBoxDesc: (locate('p').withText('Talk to us on Telegram').as('Telegram Box Description')),
    telegramBoxLogo: (locate('img').before(locate('p').withText('Talk to us on Telegram')).as('Telegram Box Logo')),
    discordBoxDesc: (locate('p').withText('Find us on Discord').as('Discord Box Description')),
    discordBoxLogo: (locate('img').before(locate('p').withText('Find us on Discord')).as('Discord Box Logo')),
    articleBoxes: (locate('article')),
    tutorialsHeader: (locate('h2').withText('Tutorials').as('Tutorials Section')),
    tutorialBadges: (locate('a').withText('Tutorials').inside(locate('div.badge__primary')).as('Tutorial Badges')),
    allTutorials: (locate('a').withText('All tutorials').as('All Tutorials Link')),
    updatesHeader: (locate('h2').withText('Updates').as('Updates Section')),
    updatesBadges: (locate('a').withText('Updates').inside(locate('div.badge__primary')).as('Updates Badges')),
    allUpdates: (locate('a').withText('All updates').as('All Updates Link')),
    knowledgeHeader: (locate('h2').withText('Knowledge').as('Knowledge Section')),
    knowledgeBadges: (locate('a').withText('Knowledge').inside(locate('div.badge__primary')).as('Knowledge Badges')),
    allKnowledge: (locate('a').withText('All knowledge').as('All Knowledge Link'))
  },

  validatePage () {
    I.amOnPage('/community')
    I.seeTitleEquals('Community | DADI')
  },

  validateDescription () {
    I.seeTextEquals('Community', this.locators.descriptionTitle)
    I.seeTextEquals('Everything you need to know to be a part of the DADI network – or to build amazing digital products with our web services', this.locators.descriptionText)
  },

  validateFindUsBoxes () {
    I.seeNumberOfVisibleElements(this.locators.findUsBoxes, 3)
    I.seeTextEquals('Follow us on Twitter', this.locators.twitterBoxDesc)
    I.seeElement(this.locators.twitterBoxLogo)
    I.seeTextEquals('Talk to us on Telegram', this.locators.telegramBoxDesc)
    I.seeElement(this.locators.telegramBoxLogo)
    I.seeTextEquals('Find us on Discord', this.locators.discordBoxDesc)
    I.seeElement(this.locators.discordBoxLogo)
  },

  validateTutorialsSection () {
    I.scrollTo(this.locators.tutorialsHeader)
    I.seeTextEquals('Tutorials', this.locators.tutorialsHeader)
    I.seeNumberOfVisibleElements(this.locators.articleBoxes, 12)
    I.seeNumberOfVisibleElements(this.locators.tutorialBadges, 4)
    I.seeElement(this.locators.allTutorials)
  },

  validateUpdatesSection () {
    I.scrollTo(this.locators.updatesHeader)
    I.seeTextEquals('Updates', this.locators.updatesHeader)
    I.seeNumberOfVisibleElements(this.locators.updatesBadges, 4)
    I.seeElement(this.locators.allUpdates)
  },

  validateKnowledgeSection () {
    I.scrollTo(this.locators.knowledgeHeader)
    I.seeTextEquals('Knowledge', this.locators.knowledgeHeader)
    I.seeNumberOfVisibleElements(this.locators.knowledgeBadges, 4)
    I.seeElement(this.locators.allKnowledge)
  }
}
