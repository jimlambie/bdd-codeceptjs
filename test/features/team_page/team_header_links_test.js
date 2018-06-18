
Feature('Team Page - Header Links')

Before((I, teamPage) => { // or Background
  teamPage.validatePage()
})

Scenario('Check all Header Links are present', (I, basePage) => {
  basePage.validateHeaders()
})
