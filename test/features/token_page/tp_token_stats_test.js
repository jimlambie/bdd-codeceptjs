const { assert, expect } = require('chai')

Feature('Token Page - Token Stats Check')

Before((I, tokenPage) => { // or Background
  tokenPage.validatePage()
})

Scenario('Check Token value box displays correctly', (I, tokenPage) => {
  tokenPage.validateTokenValue()
})

Scenario('Check Market cap box displays correctly', (I, tokenPage) => {
  tokenPage.validateMarketCap()
})

Scenario('Check 24 hour volume box displays correctly', (I, tokenPage) => {
  tokenPage.validateTwentyFourVolume()
})

Scenario('Check Circulating supply box displays correctly', async (I, tokenPage) => {
  // tokenPage.validateCirculatingSupply()
  I.scrollTo(tokenPage.locators.circSupply)
  I.seeTextEquals('Circulating supply', tokenPage.locators.circSupply)
  I.see('Total supply', tokenPage.locators.totalSupply)
  I.see('100,000,000', tokenPage.locators.totalSupplyAmount)
  let value = await I.grabTextFrom(tokenPage.locators.circAmount)
  // console.log('Value:', value, ':')
  expect(value).to.not.be.empty
})

Scenario('Check Graph displays correctly', (I, tokenPage) => {
  tokenPage.validateGraph()
})
