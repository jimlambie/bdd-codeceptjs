Feature('Community Page - Knowledge Section')

Before((I, communityPage) => { // or Background
  communityPage.validatePage()
})

Scenario('Check Knowledge Section is Visible', (I, communityPage) => {
  communityPage.validateKnowledgeSection()
})
