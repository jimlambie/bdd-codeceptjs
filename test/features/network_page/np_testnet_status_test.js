
Feature('Network Page - Testnet Status')

Before((I, networkPage) => { // or Background
  networkPage.validatePage()
})

Scenario('Check Testnet Status details are present', (I, networkPage) => {
  networkPage.validateTestNet()
})
