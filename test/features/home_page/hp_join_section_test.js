
Feature('Home Page - Join Section')

Before((I, homePage) => { // or Background
  homePage.validatePage()
})

Scenario('Check Join Registration Form is present', (I, basePage) => {
  basePage.validateJoinForm()
})
