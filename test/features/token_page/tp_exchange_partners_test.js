
Feature('Token Page - Exchange Partners Check')

Before((I, tokenPage) => { // or Background
  tokenPage.validatePage()
})

Scenario('Check Exchange Partners Section is visible', async (I, tokenPage) => {
  await tokenPage.validateExchangePartners()
})
