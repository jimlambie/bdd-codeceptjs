
Feature('Network Page - Be part of the network section')

Before((I, networkPage) => { // or Background
  networkPage.validatePage()
})

Scenario('Check How It Works Section is displayed correctly', (I, networkPage) => {
  networkPage.validateHowItWorks()
})
