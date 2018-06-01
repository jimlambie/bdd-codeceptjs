
'use strict'

let I

module.exports = {

  _init () {
    I = require('../stepDefinitions/steps_file.js')()
  },

  // insert your locators and methods here
  locators: {
    descriptionTitle: (locate('h1').as('Page Title')),
    descriptionText: (locate('p.normal.mb').as('Page Description')),
    descriptionIcon: (locate('img').withAttr({ class: 'mb' }).inside(locate('header'))).as('Description Icon'),
    descriptionPlatformIntro: 'Platform introduction',
    descriptionTechRoadmap: 'Technology roadmap',
    contributeButton: (locate('a').withText('Contribute').as('Contribute Link')),
    howItWorksButton: (locate('a').withText('How it works').as('How It Works Link')),
    useCasesButton: (locate('a').withText('Use cases').as('Use Cases Link')),
    contributeSection: (locate('h3').withText('Be part of the network')).as('Contribute Section'),
    contributeDesc: (locate('p.normal.mb--x2').as('Contribute Description')),
    howItWorksSection: (locate('h3').withText('How it works').as('How It Works Section')),
    useCaseSection: (locate('h3').withText('What can it be used for?').as('What Can It Be Used For Section')),
    stargateBox: (locate('div.col.box--small').at(1).as('Stargate Box')),
    stargateIcon: (locate('img').before(locate('h2').withText('Stargate')).as('Stargate Icon')),
    stargateTitle: (locate('h2').withText('Stargate').inside(locate('div.col.box--small')).as('Stargate Title')),
    stargateDesc: (locate('p.normal').withText('DADI Stargate').inside(locate('div.col.box--small')).as('Stargate Description')),
    gatewayBox: (locate('div.col.box--small').at(2).as('Gateway Box')),
    gatewayIcon: (locate('img').before(locate('h2').withText('Gateway')).as('Gateway Icon')),
    gatewayTitle: (locate('h2').withText('Gateway').inside(locate('div.col.box--small')).as('Gateway Title')),
    gatewayDesc: (locate('p.normal').withText('DADI Gateway is').inside(locate('div.col.box--small')).as('Gateway Description')),
    hostBox: (locate('div.col.box--small').at(3).as('Host Box')),
    hostIcon: (locate('img').before(locate('h2').withText('Host')).as('Host Icon')),
    hostTitle: (locate('h2').withText('Host').inside(locate('div.col.box--small')).as('Host Title')),
    hostDesc: (locate('p.normal').withText('DADI Host').inside(locate('div.col.box--small')).as('Host Description')),
    networkDiagram: (locate('img').at(1).withAttr({ alt: 'Network diagram' }).as('Network Diagram')),
    useCaseBox: (locate('div.col.box.box--x2')).as('Use Case Boxes'),
    useCaseBoxIcon: (locate('img').inside('div.col.box.box--x2').as('Use Case Box Icon')),
    useCaseBoxTitle: (locate('h2').inside('div.col.box.box--x2').as('Use Case Box Title')),
    useCaseBoxDesc: (locate('p').inside('div.col.box.box--x2').as('Use Case Box Description')),
    testnetHeader: (locate('div.badge__primary').withText('TESTNET STATUS').as('Testnet Status')),
    testnetAvgRespHeader: (locate('div.badge__primary').withText('Av. response time').as('Average Response Time')),
    testnetAvgResp: (locate('#average_response').as('Avg Response Count')),
    testnetConReqHeader: (locate('div.badge__primary').withText('Concurrent requests').as('Concurrent Requests')),
    testnetConReq: (locate('#concurrent_requests').as('Concurrent Requests Count')),
    testnetHostsHeader: (locate('div.badge__primary').withText('Hosts online').as('Hosts Online')),
    testnetHosts: (locate('#host_count').as('Hosts Count')),
    testnetMap: (locate('#map').as('World Map'))
  },

  validatePage () {
    I.amOnPage('/network')
    I.seeTitleEquals('Network | DADI')
  },

  validatePlatformIntro () {
    I.click(this.locators.descriptionPlatformIntro)
    I.waitForText('DADI Network: introduction', 'h1')
    I.seeInTitle('DADI Network: introduction | DADI')
  },

  validateTechRoadmap () {
    I.click(this.locators.descriptionTechRoadmap)
    I.waitForText('Roadmap', 'h1')
    I.seeInTitle('Roadmap | DADI')
  },

  validateDescription () {
    I.seeElement(this.locators.descriptionIcon)
    I.seeTextEquals('Network', this.locators.descriptionTitle)
    I.seeTextEquals('DADI is a global, decentralized cloud platform with a suite of web services to help you build, launch and grow your digital products.', this.locators.descriptionText)
  },

  validateContribute () {
    I.click(this.locators.contributeButton)
    I.seeTextEquals('BE PART OF THE NETWORK', this.locators.contributeSection)
    I.seeTextEquals('If you have spare computational power, DADI is a great application of your resource, delivering real world services for individuals, businesses and governments, whilst delivering income for you.', this.locators.contributeDesc)
  },

  validateStargate () {
    I.seeElement(this.locators.stargateBox)
    I.seeElement(this.locators.stargateIcon)
    I.seeTextEquals('Stargate', this.locators.stargateTitle)
    I.seeTextEquals('DADI Stargate provides intelligent routing for dapps, as well securing the network and providing the interface for DADI\'s smart contract layer, handling rate negotiation and payouts.', this.locators.stargateDesc)
  },

  validateGateway () {
    I.seeElement(this.locators.gatewayBox)
    I.seeElement(this.locators.gatewayIcon)
    I.seeTextEquals('Gateway', this.locators.gatewayTitle)
    I.seeTextEquals('DADI Gateway is the entry point to the DADI network. It bridges end users and task response through the maintenance of a job queue for Hosts and handles caching at object level.', this.locators.gatewayDesc)
  },

  validateHost () {
    I.seeElement(this.locators.hostBox)
    I.seeElement(this.locators.hostIcon)
    I.seeTextEquals('Host', this.locators.hostTitle)
    I.seeTextEquals('DADI Host is the workhorse of the DADI network. It runs individual DADI web services in secure containers and connects in to the job queue that is maintained by DADI Gateway, requesting and responding to tasks.', this.locators.hostDesc)
  },

  validateHowItWorks () {
    I.click(this.locators.howItWorksButton)
    I.seeTextEquals('HOW IT WORKS', this.locators.howItWorksSection)
    I.seeElement(this.locators.networkDiagram)
  },

  validateUseCases () {
    I.click(this.locators.useCasesButton)
    I.seeTextEquals('WHAT CAN IT BE USED FOR?', this.locators.useCaseSection)
    I.seeNumberOfVisibleElements(this.locators.useCaseBox, 12)
    I.seeNumberOfVisibleElements(this.locators.useCaseBoxIcon, 12)
    I.seeNumberOfVisibleElements(this.locators.useCaseBoxTitle, 12)
    I.seeNumberOfVisibleElements(this.locators.useCaseBoxDesc, 12)
  },

  validateTestNet () {
    I.seeTextEquals('TESTNET STATUS', this.locators.testnetHeader)
    I.seeTextEquals('Av. response time', this.locators.testnetAvgRespHeader)
    I.seeNumberOfVisibleElements(this.locators.testnetAvgResp, 1)
    I.seeTextEquals('Concurrent requests', this.locators.testnetConReqHeader)
    I.seeNumberOfVisibleElements(this.locators.testnetConReq, 1)
    I.seeTextEquals('Hosts online', this.locators.testnetHostsHeader)
    I.seeNumberOfVisibleElements(this.locators.testnetHosts, 1)
    I.seeElement(this.locators.testnetMap)
  }
}
