
Feature('Team Page - Core Team Check')

Before((I, teamPage) => { // or Background
  teamPage.validatePage()
})

Scenario('Check Core Team boxes are visible', (I, teamPage) => {
  teamPage.validateCoreTeam()
})
