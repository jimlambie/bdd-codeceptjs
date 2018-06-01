
Feature('Network Page - Join Section')

Before((I, networkPage) => { // or Background
  networkPage.validatePage()
})

Scenario('Check Join Registration Form is present', (I, basePage) => {
  basePage.validateJoinForm()
})
