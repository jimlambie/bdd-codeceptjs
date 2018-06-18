
Feature('Token Page - Header Links')

Before((I, tokenPage) => { // or Background
  tokenPage.validatePage()
})

Scenario('Check all Header Links are present', (I, basePage) => {
  basePage.validateHeaders()
})
