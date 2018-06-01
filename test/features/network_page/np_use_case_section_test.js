
Feature('Network Page - What can it be used for? section')

Before((I, networkPage) => { // or Background
  networkPage.validatePage()
})

Scenario('Check What Can It Be Used For? Section is displayed correctly', (I, networkPage) => {
  networkPage.validateUseCases()
})
