
Feature('Network Page - Social Media Links')

Before((I, networkPage) => { // or Background
  networkPage.validatePage()
})

Scenario('Check all Social Media Links are present', (I, basePage) => {
  basePage.validateSocialMedia()
}).retry(3)
