
Feature('Home Page - Introduction Section')

Before((I, homePage) => { // or Background
  homePage.validatePage()
})

Scenario('Check Introduction Section is visible', (I, homePage) => {
  homePage.validateIntro()
})

xScenario('Check Video Player', (I, homePage) => {
  homePage.validateVideo()
})
