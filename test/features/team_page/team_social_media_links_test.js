
Feature('Team Page - Social Media Links')

Before((I, teamPage) => { // or Background
  teamPage.validatePage()
})

Scenario('Check all Social Media Links are present', (I, basePage) => {
  basePage.validateSocialMedia()
})
