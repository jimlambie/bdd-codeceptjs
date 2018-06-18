
Feature('Token Page - Social Media Links')

Before((I, tokenPage) => { // or Background
  tokenPage.validatePage()
})

Scenario('Check all Social Media Links are present', (I, basePage) => {
  basePage.validateSocialMedia()
})
