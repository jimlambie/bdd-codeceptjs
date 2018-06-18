
Feature('Token Page - Find Us On Check')

Before((I, tokenPage) => { // or Background
  tokenPage.validatePage()
})

Scenario('Check Find Us On Section is visible', async (I, tokenPage) => {
  await tokenPage.validateFindUsOn()
})
