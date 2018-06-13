Feature('Community Page - Updates Section')

Before((I, communityPage) => { // or Background
  communityPage.validatePage()
})

Scenario('Check Updates Section is Visible', (I, communityPage) => {
  communityPage.validateUpdatesSection()
})
