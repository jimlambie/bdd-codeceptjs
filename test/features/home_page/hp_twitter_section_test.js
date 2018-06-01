
Feature('Home Page - Twitter  Section')

Before((I, homePage) => { // or Background
  homePage.validatePage()
})

Scenario('Check The Twitter Section is visible', (I, homePage) => {
  homePage.validateTwitterSection()
})
