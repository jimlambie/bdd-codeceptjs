
Feature('Network Page - Be part of the network section')

Before((I, networkPage) => { // or Background
  networkPage.validatePage()
})

Scenario('Check section title and description are visible', (I, networkPage) => {
  networkPage.validateContribute()
})

Scenario('Check there is a Stargate box with title, icon and description', (I, networkPage) => {
  networkPage.validateStargate()
})

Scenario('Check there is a Gateway box with title, icon and description', (I, networkPage) => {
  networkPage.validateGateway()
})

Scenario('Check there is a Host box with title, icon and description', (I, networkPage) => {
  networkPage.validateHost()
})
