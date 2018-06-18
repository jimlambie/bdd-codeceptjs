
Feature('Team Page - Description and Title Check')

Before((I, teamPage) => { // or Background
  teamPage.validatePage()
})

Scenario('Check page header and description are visible', (I, teamPage) => {
  teamPage.validateDescription()
})
