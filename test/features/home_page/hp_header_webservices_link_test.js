
Feature('Home Page - Web Services Link')

Before((I, homePage) => { // or Background
  homePage.validatePage()
})

Scenario('Check The Web Services Link Works', (I, basePage) => {
  basePage.validateWebServiceLink()
})
