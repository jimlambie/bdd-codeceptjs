
Feature('Network Page - Header Links')

Before((I, networkPage) => { // or Background
  networkPage.validatePage()
})

Scenario('Check all Header Links are present', (I, basePage) => {
  basePage.validateHeaders()
  basePage.validateNetworkActive()
})
