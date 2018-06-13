Feature('Home Page - Latest  Section')

Before((I, homePage) => { // or Background
  homePage.validatePage()
})

Scenario('Check Latest From DADI Section is visible', async (I, homePage) => {
  await homePage.validateLatestSection()
})
