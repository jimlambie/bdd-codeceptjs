
'use strict'

let I

module.exports = {

  _init () {
    I = require('../stepDefinitions/steps_file.js')()
  },

  // insert your locators and methods here
  locators: {
    homeLink: (locate('a').withText('Home').inside(locate('nav')).as('Home Header Link')),
    networkLink: (locate('a').withText('Network').inside(locate('nav')).as('Network Header Link')),
    webServicesLink: (locate('a').withText('Web services').inside(locate('nav')).as('Web Services Header Link')),
    communityLink: (locate('a').withText('Community').inside(locate('nav')).as('Community Header Link')),
    documentationLink: (locate('a').withText('Documentation').inside(locate('nav')).as('Documentation Header Link')),
    activeNetworkLink: (locate('a').withAttr({ class: 'active' }).withText('Network').inside(locate('nav')).as('Network Header Link Active')),
    activeCommunityLink: (locate('a').withAttr({ class: 'active' }).withText('Community').inside(locate('nav')).as('Community Header Link Active')),
    socialMediaLinks: (locate('li.nav__social.nav--right').as('All Social Media Links')),
    socialMediaLinksCount: (locate('img').inside('li.nav__social.nav--right').as('Social Media Links')),
    webServicesWebLink: (locate('a').withText('Web').inside('#web-services').as('Web Link')),
    webServicesPublishLink: (locate('a').withText('Publish').inside('#web-services').as('Publish Link')),
    webServicesAPILink: (locate('a').withText('API').inside('#web-services').as('API Link')),
    webServicesCDNLink: (locate('a').withText('CDN').inside('#web-services').as('CDN Link')),
    webServicesQueueLink: (locate('a').withText('Queue').inside('#web-services').as('Queue Link')),
    joinSection: (locate('#join').as('Register Form')),
    joinIcon: (locate('img').withAttr({ alt: 'Mail icon'}).as('Envelope Icon')),
    joinText: (locate('p').inside('div.col.w-1-2.read').as('Register Text')),
    joinFirstName: (locate('#mce-FNAME').as('First Name Field')),
    joinSurname: (locate('#mce-LNAME').as('Surname Field')),
    joinEmail: (locate('#mce-EMAIL').as('Email Field')),
    joinCity: (locate('#mce-MMERGE6').as('City Field')),
    joinCountry: (locate('select').withAttr({ name: 'MMERGE5'}).as('Country Field')),
    joinInterest: (locate('select').withAttr({ name: 'MMERGE13'}).as('Interest Field')),
    joinRegister: (locate('#mc-embedded-subscribe').as('Register Button'))
  },

  validateHeaders () {
    I.seeElement(this.locators.homeLink)
    I.seeElement(this.locators.networkLink)
    I.seeElement(this.locators.webServicesLink)
    I.seeElement(this.locators.communityLink)
    I.seeElement(this.locators.documentationLink)
  },

  validateNetworkActive () {
    I.seeElement(this.locators.activeNetworkLink)
  },

  validateCommunityActive () {
    I.seeElement(this.locators.activeCommunityLink)
  },

  validateSocialMedia () {
    I.seeElement(this.locators.socialMediaLinks)
    I.seeNumberOfVisibleElements(this.locators.socialMediaLinksCount, 6)
  },

  validateJoinForm () {
    I.scrollTo(this.locators.joinSection)
    I.seeElement(this.locators.joinIcon)
    I.seeElement(this.locators.joinText)
    I.seeElement(this.locators.joinFirstName)
    I.seeElement(this.locators.joinSurname)
    I.seeElement(this.locators.joinEmail)
    I.seeElement(this.locators.joinCity)
    I.seeElement(this.locators.joinCountry)
    I.seeElement(this.locators.joinInterest)
    I.seeElement(this.locators.joinRegister)
  },

  validateWebServiceLink () {
    I.click(this.locators.webServicesLink)
    I.seeElement(this.locators.webServicesWebLink)
    I.seeElement(this.locators.webServicesPublishLink)
    I.seeElement(this.locators.webServicesAPILink)
    I.seeElement(this.locators.webServicesCDNLink)
    I.seeElement(this.locators.webServicesQueueLink)
  }
}
