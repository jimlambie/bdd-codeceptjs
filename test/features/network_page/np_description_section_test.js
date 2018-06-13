
Feature('Network Page - Description and Title Check')

Before((I, networkPage) => { // or Background
  networkPage.validatePage()
})

Scenario('Check page header and description are visible', (I, networkPage) => {
  networkPage.validateDescription()
})

Scenario('Check Platform introduction link is visible and works correctly', (I, networkPage) => {
  networkPage.validatePlatformIntro()
})

Scenario('Check Technology roadmap link is visible and works correctly', (I, networkPage) => {
  networkPage.validateTechRoadmap()
})

Scenario('Check Masternode System link is visible and works correctly', (I, networkPage) => {
  networkPage.validateMasternode()
})
