
Feature('Home Page - The Network  Section')

Before((I, homePage) => { // or Background
  homePage.validatePage()
})

Scenario('Check The Network Section is visible', (I, homePage) => {
  homePage.validateNetworkSection()
})
