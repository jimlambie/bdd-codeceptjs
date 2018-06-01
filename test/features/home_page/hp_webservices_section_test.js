
Feature('Home Page - Web Services  Section')

Before((I, homePage) => { // or Background
  homePage.validatePage()
})

Scenario('Check The Web Services Section is visible', (I, homePage) => {
  homePage.validateWebServiceSection()
})
