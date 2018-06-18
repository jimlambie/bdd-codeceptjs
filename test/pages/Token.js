
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
    tokenValue: (locate('div.stat__metric').withText('Token value').as('Token Value')),
    tokenDollar: (locate('div.stat__figure').after(locate('div.stat__metric').withText('Token value')).as('Token Dollar')),
    tokenBTC: (locate('div.stat__metric').withText('BTC').after(locate('div.stat__metric').withText('Token value')).as('Token BTC')),
    tokenETH: (locate('div.stat__metric').withText('ETH').after(locate('div.stat__metric').withText('Token value')).as('Token ETH')),
    marketCap: (locate('div.stat__metric').withText('Market cap').as('Market Cap')),
    marketDollar: (locate('div.stat__figure').after(locate('div.stat__metric').withText('Market cap')).as('Market Cap Dollar')),
    marketBTC: (locate('div.stat__metric').withText('BTC').after(locate('div.stat__metric').withText('Market cap')).as('Market Cap BTC')),
    marketETH: (locate('div.stat__metric').withText('ETH').after(locate('div.stat__metric').withText('Market cap')).as('Market Cap ETH')),
    twentyFourVolume: (locate('div.stat__metric').withText('24 hour volume').as('24 Hour Volume')),
    twentyFourVolumeDollar: (locate('div.stat__figure').after(locate('div.stat__metric').withText('24 hour volume')).as('24 Hour Volume Dollar')),
    twentyFourVolumeBTC: (locate('div.stat__metric').withText('BTC').after(locate('div.stat__metric').withText('24 hour volume')).as('24 Hour Volume BTC')),
    twentyFourVolumeETH: (locate('div.stat__metric').withText('ETH').after(locate('div.stat__metric').withText('24 hour volume')).as('24 Hour Volume ETH')),
    circSupply: (locate('div.stat__metric').withText('Circulating supply').as('Circulating Supply')),
    circAmount: (locate('div.stat__figure').after(locate('div.stat__metric').withText('Circulating supply')).as('Circulating Supply Amount')),
    totalSupply: (locate('div.stat__metric').withText('Total supply').after(locate('div.stat__metric').withText('Circulating supply')).as('Total Supply')),
    totalSupplyAmount: (locate('div.stat__metric').withText('100,000,000').after(locate('div.stat__metric').withText('Circulating supply')).as('Total Supply Amount')),
    graph: (locate('#token').as('Graph')),
    priceInETH: (locate('span').withText('Price in ETH').as('Price in ETH')),
    priceInBTC: (locate('span').withText('Price in BTC').as('Price in BTC')),
    updateDisclaimer: (locate('div.fm.small').withText('Stats').as('Stats Update')),
    exchangePartners: (locate('h3').withText('Exchange partners').as('Exchange Partners')),
    exchangePartnersBoxes: (locate('body > main > div > div:nth-child(2) > div:nth-child(n)')).as('Exchange Partner Boxes'),
    findUsOn: (locate('h3').withText('Find us on').as('Find Us On')),
    findUsOnBoxes: (locate('body > main > div > div:nth-child(4) > div:nth-child(n)').as('Find Us On Boxes'))
  },

  validatePage () {
    I.amOnPage('/token/?cache=false')
    I.seeTitleEquals('Token | DADI')
  },

  validateDescription () {
    I.seeTextEquals('Token', this.locators.descriptionTitle)
    I.seeTextEquals('DADI uses its own ERC20 token (DADI), an integral part of the DADI Cloud network. Consumers will be charged tokens for their usage of DADI Cloud services, contributors can earn them by offering up computing power.', this.locators.descriptionText)
  },

  validateTokenValue () {
    I.scrollTo(this.locators.tokenValue)
    I.seeTextEquals('Token value', this.locators.tokenValue)
    I.see('$', this.locators.tokenDollar)
    I.see('BTC', this.locators.tokenBTC)
    I.see('ETH', this.locators.tokenETH)
  },

  validateMarketCap () {
    I.scrollTo(this.locators.marketCap)
    I.seeTextEquals('Market cap', this.locators.marketCap)
    I.see('$', this.locators.marketDollar)
    I.see('BTC', this.locators.marketBTC)
    I.see('ETH', this.locators.marketETH)
  },

  validateTwentyFourVolume () {
    I.scrollTo(this.locators.twentyFourVolume)
    I.seeTextEquals('24 hour volume', this.locators.twentyFourVolume)
    I.see('$', this.locators.twentyFourVolumeDollar)
    I.see('BTC', this.locators.twentyFourVolumeBTC)
    I.see('ETH', this.locators.twentyFourVolumeETH)
  },

  async validateCirculatingSupply () {
    I.scrollTo(this.locators.circSupply)
    I.seeTextEquals('Circulating supply', this.locators.circSupply)
    I.see('Total supply', this.locators.totalSupply)
    I.see('100,000,000', this.locators.totalSupplyAmount)
    let value = await I.grabTextFrom(this.locators.circAmount)
    console.log('Value: ', value)
    assert(value !== '')
  },

  validateGraph () {
    I.scrollTo(this.locators.graph)
    I.seeElement(this.locators.graph)
    I.seeTextEquals('Price in ETH', this.locators.priceInETH)
    I.seeTextEquals('Price in BTC', this.locators.priceInBTC)
    I.seeTextEquals(' Stats updated hourly', this.locators.updateDisclaimer)
  },

  async validateExchangePartners () {
    I.scrollTo(this.locators.exchangePartners)
    I.seeTextEquals('EXCHANGE PARTNERS', this.locators.exchangePartners)
    let count = await I.grabNumberOfVisibleElements(this.locators.exchangePartnersBoxes)
    await I.seeNumberOfElementsBetween(count, 1, 4)
  },

  async validateFindUsOn () {
    I.scrollTo(this.locators.findUsOn)
    I.seeTextEquals('FIND US ON', this.locators.findUsOn)
    let count = await I.grabNumberOfVisibleElements(this.locators.findUsOnBoxes)
    await I.seeNumberOfElementsBetween(count, 1, 9)
  }
}
