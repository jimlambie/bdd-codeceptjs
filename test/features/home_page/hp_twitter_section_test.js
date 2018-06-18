const { assert, expect } = require('chai')

Feature('Home Page - Twitter  Section')

Before((I, homePage) => { // or Background
  homePage.validatePage()
})

Scenario('Check The Twitter Section is visible', async (I, homePage) => {
  // await homePage.validateTwitterSection()
  I.scrollTo(homePage.locators.twitterTitle)
  I.seeTextEquals('FOLLOW US ON TWITTER @DADI', homePage.locators.twitterTitle)
  let value = await I.grabTextFrom(homePage.locators.twitterPara)
  // console.log('Value:', value, ':')
  expect(value).to.be.empty
})
