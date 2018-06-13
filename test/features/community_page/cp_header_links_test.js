
Feature('Community Page - Header Links')

Before((I, communityPage) => { // or Background
  communityPage.validatePage()
})

Scenario('Check all Header Links are present', (I, basePage) => {
  basePage.validateHeaders()
  basePage.validateCommunityActive()
})
