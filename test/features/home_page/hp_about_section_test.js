
Feature('Home Page - About Section')

Before((I, homePage) => { // or Background
  homePage.validatePage()
})

Scenario('Check About Section is visible', (I, homePage) => {
  homePage.validateAboutSection()
})

Scenario('Check First About Box is visible', (I, homePage) => {
  homePage.validateFirstAboutBox()
})

Scenario('Check Second About Box is visible', (I, homePage) => {
  homePage.validateSecondAboutBox()
})

Scenario('Check Third About Box is visible', (I, homePage) => {
  homePage.validateThirdAboutBox()
})

Scenario('Check Trusted by Banner is visible', (I, homePage) => {
  homePage.validateTrustBanner()
})
