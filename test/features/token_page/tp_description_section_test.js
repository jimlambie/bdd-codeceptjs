Feature('Token Page - Description and Title Check')

Before((I, tokenPage) => { // or Background
  tokenPage.validatePage()
})

Scenario('Check page header and description are visible', (I, tokenPage) => {
  tokenPage.validateDescription()
})
