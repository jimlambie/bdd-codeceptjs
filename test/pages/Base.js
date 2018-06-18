
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
    joinCity: (locate('#mce-CITY').as('City Field')),
    joinCountry: (locate('select').withAttr({ name: 'COUNTRY'}).as('Country Field')),
    joinInterest: (locate('select').withAttr({ name: 'INTEREST'}).as('Interest Field')),
    joinRegister: (locate('#mc-embedded-subscribe').as('Register Button')),
    footerDeploy: (locate('div.badge').inside('footer').as('Deployment Badge')),
    footerText: (locate('p').withText('This site is built').as('Footer Text')),
    elsewhereFooter: (locate('h3').withText('Elsewhere').as('Elsewhere Footer Heading')),
    footerGithub: (locate('a').withText('GitHub').as('GitHub Link')),
    footerMedium: (locate('a').withText('Medium').as('Medium Link')),
    footerTwitter: (locate('a').withText('Twitter').as('Twitter Link')),
    footerReddit: (locate('a').withText('Reddit').as('Reddit Link')),
    footerDiscord: (locate('a').withText('Discord').as('Discord Link')),
    footerTelegram: (locate('a').withText('Telegram').as('Telegram Link')),
    sitemapFooter: (locate('h3').withText('Sitemap').as('Sitemap Footer Heading')),
    sitemapNetwork: (locate('a').withText('Network').inside(locate('footer')).as('Sitemap Network Link')),
    sitemapRoadmap: (locate('a').withText('Roadmap').inside(locate('footer')).as('Sitemap Roadmap Link')),
    sitemapCommunity: (locate('a').withText('Community').inside(locate('footer')).as('Sitemap Community Link')),
    sitemapToken: (locate('a').withText('Token').inside(locate('footer')).as('Sitemap Token Link')),
    sitemapCareers: (locate('a').withText('Careers').inside(locate('footer')).as('Sitemap Careers Link')),
    sitemapCulture: (locate('a').withText('Culture').inside(locate('footer')).as('Sitemap Culture Link')),
    sitemapTeam: (locate('a').withText('Team').inside(locate('footer')).as('Sitemap Team Link')),
    sitemapContact: (locate('a').withText('Contact').inside(locate('footer')).as('Sitemap Contact Link')),
    sitemapPrivacy: (locate('a').withText('Privacy').inside(locate('footer')).as('Sitemap Privacy Link')),
    sitemapRSS: (locate('a').withText('RSS Feed').inside(locate('footer')).as('Sitemap RSS Feed Link')),
    webServicesFooter: (locate('h3').withText('Web services').as('Web Services Footer Heading')),
    webServicesWeb: (locate('a').withText('Web').inside(locate('footer')).as('Web Services Web Link')),
    webServicesWebLogo: (locate('img').withAttr({ alt: 'Icon for DADI Web' }).inside(locate('footer')).as('Web Services Web Logo')),
    webServicesPublish: (locate('a').withText('Publish').inside(locate('footer')).as('Web Services Publish Link')),
    webServicesPublishLogo: (locate('img').withAttr({ alt: 'Icon for DADI Publish' }).inside(locate('footer')).as('Web Services Publish Logo')),
    webServicesAPI: (locate('a').withText('API').inside(locate('footer')).as('Web Services API Link')),
    webServicesAPILogo: (locate('img').withAttr({ alt: 'Icon for DADI API' }).inside(locate('footer')).as('Web Services API Logo')),
    webServicesCDN: (locate('a').withText('CDN').inside(locate('footer')).as('Web Services CDN Link')),
    webServicesCDNLogo: (locate('img').withAttr({ alt: 'Icon for DADI CDN' }).inside(locate('footer')).as('Web Services CDN Logo')),
    webServicesQueue: (locate('a').withText('Queue').inside(locate('footer')).as('Web Services Queue Link')),
    webServicesQueueLogo: (locate('img').withAttr({ alt: 'Icon for DADI Queue' }).inside(locate('footer')).as('Web Services Queue Logo')),
    webServicesDoc: (locate('a').withText('Documentation').inside(locate('footer')).as('Web Services Documentation Link')),
    webServicesDocLogo: (locate('img').withAttr({ alt: 'External link' }).inside(locate('footer')).as('Web Services Documentation Logo')),
    communityFooter: (locate('h3').withText('Community').as('Community Footer Heading')),
    communityOverview: (locate('a').withText('Overview').inside(locate('footer')).as('Community Overview Link')),
    communityUpdates: (locate('a').withText('Updates').inside(locate('footer')).as('Community Updates Link')),
    communityTutorials: (locate('a').withText('Tutorials').inside(locate('footer')).as('Community Tutorials Link')),
    communityKnowledge: (locate('a').withText('Knowledge').inside(locate('footer')).as('Community Knowledge Link')),
    foundationText: (locate('p').withText('A proud supporter').inside('footer').as('Foundation Text')),
    foundationLogo: (locate('img').withAttr({ alt: 'DADI Foundation logo' }).inside('footer').as('Foundation Logo')),
    foundationLink: (locate('a').withText('More about the foundation').as('Foundation Link'))
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
  },

  validateFooter () {
    I.scrollTo(this.locators.footerDeploy)
    I.seeElement(this.locators.footerDeploy)
    I.seeTextEquals('This site is built with our own technology and is open source. © DADI+ Ltd. Map data © OpenStreetMap contributors.', this.locators.footerText)
  },

  validateElsewhereFooter () {
    I.scrollTo(this.locators.elsewhereFooter)
    I.seeTextEquals('ELSEWHERE', this.locators.elsewhereFooter)
    I.seeElement(this.locators.footerGithub)
    I.seeElement(this.locators.footerMedium)
    I.seeElement(this.locators.footerTwitter)
    I.seeElement(this.locators.footerReddit)
    I.seeElement(this.locators.footerDiscord)
    I.seeElement(this.locators.footerTelegram)
  },

  validateSitemapFooter () {
    I.scrollTo(this.locators.sitemapFooter)
    I.seeTextEquals('SITEMAP', this.locators.sitemapFooter)
    I.seeElement(this.locators.sitemapNetwork)
    I.seeElement(this.locators.sitemapRoadmap)
    I.seeElement(this.locators.sitemapCommunity)
    I.seeElement(this.locators.sitemapToken)
    I.seeElement(this.locators.sitemapCareers)
    I.seeElement(this.locators.sitemapCulture)
    I.seeElement(this.locators.sitemapTeam)
    I.seeElement(this.locators.sitemapContact)
    I.seeElement(this.locators.sitemapPrivacy)
    I.seeElement(this.locators.sitemapRSS)
  },

  validateWebServicesFooter () {
    I.scrollTo(this.locators.webServicesFooter)
    I.seeTextEquals('WEB SERVICES', this.locators.webServicesFooter)
    I.seeElement(this.locators.webServicesWeb)
    I.seeElement(this.locators.webServicesWebLogo)
    I.seeElement(this.locators.webServicesPublish)
    I.seeElement(this.locators.webServicesPublishLogo)
    I.seeElement(this.locators.webServicesAPI)
    I.seeElement(this.locators.webServicesAPILogo)
    I.seeElement(this.locators.webServicesCDN)
    I.seeElement(this.locators.webServicesCDNLogo)
    I.seeElement(this.locators.webServicesQueue)
    I.seeElement(this.locators.webServicesQueueLogo)
    I.seeElement(this.locators.webServicesDoc)
    I.seeElement(this.locators.webServicesDocLogo)
  },

  validateCommunityFooter () {
    I.scrollTo(this.locators.communityFooter)
    I.seeTextEquals('COMMUNITY', this.locators.communityFooter)
    I.seeElement(this.locators.communityOverview)
    I.seeElement(this.locators.communityUpdates)
    I.seeElement(this.locators.communityTutorials)
    I.seeElement(this.locators.communityKnowledge)
  },

  validateFoundationFooter () {
    I.scrollTo(this.locators.foundationText)
    I.seeTextEquals("A proud supporter of the DADI Foundation. The foundation's mission is to harness technologies to empower the most marginalised, ensuring fair access to technology and supporting robust and inclusive democracies.", this.locators.foundationText)
    I.seeElement(this.locators.foundationLogo)
    I.seeElement(this.locators.foundationLink)
  }
}
