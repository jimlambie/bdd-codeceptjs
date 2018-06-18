
Feature('Team Page - Advisors Check')

Before((I, teamPage) => { // or Background
  teamPage.validatePage()
})

Scenario('Check Advisor boxes are visible', (I, teamPage) => {
  teamPage.validateAdvisors()
})
