
'use strict'

let I

module.exports = {

  _init () {
    I = require('../stepDefinitions/steps_file.js')()
  },

  // insert your locators and methods here
  locators: {
    overviewLink: (locate('a').withText('Overview').inside(locate('nav')).as('Overview Header Link')),
    networkLink: (locate('a').withText('Network').inside(locate('nav')).as('Network Header Link')),
    webServicesLink: (locate('a').withText('Web services').inside(locate('nav')).as('Web Services Header Link')),
    communityLink: (locate('a').withText('Community').inside(locate('nav')).as('Community Header Link')),
    documentationLink: (locate('a').withText('Documentation').inside(locate('nav')).as('Documentation Header Link')),
    activeOverviewLink: (locate('a').withAttr({ class: 'active' }).withText('Overview').inside(locate('nav')).as('Overview Header Link Active')),
    dadiLogo: (locate('img').inside(locate('h1')).as('DADI Logo')),
    dadiIntro: (locate('h2').withText('Fast, scalable').as('Introduction Text')),
    dadiVideo: (locate('a.btn.intro__video').as('DADI Video Button')),
    dadiVideoPlayer: (locate('player').as('DADI Video Player')),
    dadiVideoClose: (locate('#close-video').as('DADI Video Player Close')),
    aboutSection: (locate('div.bds.pt.pt--x2').as('About Section')),
    aboutBoxes: (locate('div.col.w-1-3.pb').as('About Boxes')),
    firstAboutBox: (locate('div.col.w-1-3.pb').at(1).as('First Box')),
    firstAboutBoxIcon: (locate('img').withAttr({ alt: 'Favoutite icon' }).inside(locate('div.col.w-1-3.pb')).as('First Box Icon')),
    firstAboutBoxTitle: (locate('h2').withText('A fairer internet').inside(locate('div.col.w-1-3.pb')).as('First Box Title')),
    firstAboutBoxDesc: (locate('p').withText('DADI is a peer-to-peer').inside(locate('div.col.w-1-3.pb')).as('First Box Description')),
    secondAboutBox: (locate('div.col.w-1-3.pb').at(2).as('Second Box')),
    secondAboutBoxIcon: (locate('img').withAttr({ alt: 'Bolt icon' }).inside(locate('div.col.w-1-3.pb')).as('Second Box Icon')),
    secondAboutBoxTitle: (locate('h2').withText('Faster and cheaper').inside(locate('div.col.w-1-3.pb')).as('Second Box Title')),
    secondAboutBoxDesc: (locate('p').withText('The DADI network').inside(locate('div.col.w-1-3.pb')).as('Second Box Description')),
    thirdAboutBox: (locate('div.col.w-1-3.pb').at(3).as('Third Box')),
    thirdAboutBoxIcon: (locate('img').withAttr({ alt: 'Bolt icon' }).inside(locate('div.col.w-1-3.pb')).as('Third Box Icon')),
    thirdAboutBoxTitle: (locate('h2').withText('Earn DADI tokens').inside(locate('div.col.w-1-3.pb')).as('Third Box Title')),
    thirdAboutBoxDesc: (locate('p').withText('Anyone with a laptop').inside(locate('div.col.w-1-3.pb')).as('Third Box Description')),
    trustedByBanner: (locate('div.pt.pb').first().inside(locate('#homeMain')).as('Trusted By Banner')),
    latestTitle: (locate('h3').withText('Latest').as('Latest Section')),
    latestArticleBoxes: (locate('article').as('Article Boxes')),
    latestArticleBoxBadges: (locate('div.badge').inside('article').as('Article Badges')),
    latestArticleBoxTitles: (locate('h2').inside('article').as('Article Titles')),
    latestArticleBoxDescs: (locate('p').inside('article').as('Article Descriptions')),
    latestArticleBoxFooters: (locate('div.box__footer').inside('article').as('Article Footer')),
    latestArticleBoxDates: (locate('time').inside('article').as('Article Date')),
    moreArticlesLink: (locate('a').last().inside('article').as('More Articles Link')),
    networkTitle: (locate('h3').withText('The Network').as('Testnet Section')),
    map: (locate('#map').as('World Map')),
    mapTitle: (locate('div.badge__primary').withText('TESTNET').as('Map Title')),
    avgRespHeader: (locate('div.stat__metric').withText('Av. response time').as('Av. Response Header')),
    avgResp: (locate('#average_response').as('Avg Response Count')),
    conReqHeader: (locate('div.stat__metric').withText('Concurrent requests').as('Concurrent Requests Header')),
    conReq: (locate('#concurrent_requests').as('Concurrent Requests Count')),
    hostsHeader: (locate('div.stat__metric').withText('Hosts').as('Hosts Header')),
    hosts: (locate('#host_count').as('Hosts Count')),
    aboutTheNetwork: (locate('a').withText('About the network').as('About The Network Link')),
    webServicesTitle: (locate('h3').withText('Web services').as('Web Services Section')),
    webServicesBoxes: (locate('div.box').inside(locate('div.cols.cols--4.bs-cols--2')).as('Web Services Boxes')),
    twitterTitle: (locate('h3').withText('Follow us on Twitter @DADI').as('Twitter Section'))
  },

  validatePage () {
    I.amOnPage('/')
    I.seeTitleEquals('Decentralized web services | DADI')
  },

  validateHeaders () {
    I.seeElement(this.locators.overviewLink)
    I.seeElement(this.locators.networkLink)
    I.seeElement(this.locators.webServicesLink)
    I.seeElement(this.locators.communityLink)
    I.seeElement(this.locators.documentationLink)
  },

  validateOverviewActive () {
    I.seeElement(this.locators.activeOverviewLink)
  },

  validateIntro () {
    I.seeElement(this.locators.dadiLogo)
    I.seeTextEquals('Fast, scalable, secure and inexpensive web services. This is the cloud, decentralized.', this.locators.dadiIntro)
  },

  validateVideo () {
    I.click(this.locators.dadiVideo)
    I.waitForVisible(this.locators.dadiVideoPlayer, 2)
  },

  validateAboutSection () {
    I.scrollTo(this.locators.aboutSection)
    I.seeNumberOfVisibleElements(this.locators.aboutBoxes, 3)
  },

  validateFirstAboutBox () {
    I.scrollTo(this.locators.aboutSection)
    I.seeElement(this.locators.firstAboutBox)
    I.seeElement(this.locators.firstAboutBoxIcon)
    I.seeElement(this.locators.firstAboutBoxTitle)
    I.seeTextEquals('DADI is a peer-to-peer network owned by the people, shifting the balance of computational power away from large corporations', this.locators.firstAboutBoxDesc)
  },

  validateSecondAboutBox () {
    I.scrollTo(this.locators.aboutSection)
    I.seeElement(this.locators.secondAboutBox)
    I.seeElement(this.locators.secondAboutBoxIcon)
    I.seeElement(this.locators.secondAboutBoxTitle)
    I.seeTextEquals('The DADI network offers improved efficiency and performance, saving up to 90% compared with traditional cloud services', this.locators.secondAboutBoxDesc)
  },

  validateThirdAboutBox () {
    I.scrollTo(this.locators.aboutSection)
    I.seeElement(this.locators.thirdAboutBox)
    I.seeElement(this.locators.thirdAboutBoxIcon)
    I.seeElement(this.locators.thirdAboutBoxTitle)
    I.seeTextEquals('Anyone with a laptop, games console or any connected device can earn income by providing spare computation capacity for rent', this.locators.thirdAboutBoxDesc)
  },

  validateTrustBanner () {
    I.scrollTo(this.locators.aboutSection)
    I.seeElement(this.locators.trustedByBanner)
  },

  validateNetworkLink () {
    I.click(this.locators.networkLink)
    I.seeInTitle('Network | DADI')
  },

  validateCommunityLink () {
    I.click(this.locators.communityLink)
    I.seeInTitle('Community | DADI')
  },

  validateDocumentationLink () {
    I.click(this.locators.documentationLink)
    I.switchToNextTab()
    I.seeInTitle('DADI Documentation')
  },

  validateLatestSection () {
    I.scrollTo(this.locators.latestTitle)
    I.seeTextEquals('LATEST FROM DADI', this.locators.latestTitle)
    I.seeNumberOfVisibleElements(this.locators.latestArticleBoxes, 6)
    I.seeNumberOfVisibleElements(this.locators.latestArticleBoxBadges, 6)
    I.seeNumberOfVisibleElements(this.locators.latestArticleBoxTitles, 6)
    I.seeNumberOfVisibleElements(this.locators.latestArticleBoxDescs, 6)
    I.seeNumberOfVisibleElements(this.locators.latestArticleBoxFooters, 6)
    I.seeNumberOfVisibleElements(this.locators.latestArticleBoxDates, 6)
    I.seeElement(this.locators.moreArticlesLink)
  },

  validateNetworkSection () {
    I.scrollTo(this.locators.networkTitle)
    I.seeTextEquals('THE NETWORK', this.locators.networkTitle)
    I.seeElement(this.locators.map)
    I.seeTextEquals('TESTNET', this.locators.mapTitle)
    I.seeTextEquals('Av. response time', this.locators.avgRespHeader)
    I.seeElement(this.locators.avgResp)
    I.seeTextEquals('Concurrent requests', this.locators.conReqHeader)
    I.seeElement(this.locators.conReq)
    I.seeTextEquals('Hosts', this.locators.hostsHeader)
    I.seeElement(this.locators.hosts)
    I.seeElement(this.locators.aboutTheNetwork)
  },

  validateWebServiceSection () {
    I.scrollTo(this.locators.webServicesTitle)
    I.seeTextEquals('WEB SERVICES', this.locators.webServicesTitle)
    I.seeNumberOfVisibleElements(this.locators.webServicesBoxes, 11)
  },

  validateTwitterSection () {
    I.scrollTo(this.locators.twitterTitle)
    I.seeTextEquals('FOLLOW US ON TWITTER @DADI', this.locators.twitterTitle)
  }
}
