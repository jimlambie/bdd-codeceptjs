
Feature('Community Page - Social Media Links')

Before((I, communityPage) => { // or Background
  communityPage.validatePage()
})

Scenario('Check all Social Media Links are present', (I, basePage) => {
  basePage.validateSocialMedia()
})
