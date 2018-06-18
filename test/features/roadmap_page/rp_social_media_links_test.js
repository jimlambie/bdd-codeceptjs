
Feature('Roadmap Page - Social Media Links')

Before((I, roadmapPage) => { // or Background
  roadmapPage.validatePage()
})

Scenario('Check all Social Media Links are present', (I, basePage) => {
  basePage.validateSocialMedia()
})
