Feature('Community Page - Tutorials Section')

Before((I, communityPage) => { // or Background
  communityPage.validatePage()
})

Scenario('Check Tutorials Section is Visible', (I, communityPage) => {
  communityPage.validateTutorialsSection()
})
