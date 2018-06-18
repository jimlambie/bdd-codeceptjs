
Feature('Roadmap Page - Header Links')

Before((I, roadmapPage) => { // or Background
  roadmapPage.validatePage()
})

Scenario('Check all Header Links are present', (I, basePage) => {
  basePage.validateHeaders()
})
