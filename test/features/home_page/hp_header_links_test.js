
Feature('Home Page - Header Links')

Before((I, homePage) => { // or Background
  homePage.validatePage()
})

Scenario('Check Home Link', (I, homePage) => {
  homePage.validateOverviewActive()
})

Scenario('Check Network Link', (I, homePage) => {
  homePage.validateNetworkLink()
})

Scenario('Check Community Link', (I, homePage) => {
  homePage.validateCommunityLink()
})
