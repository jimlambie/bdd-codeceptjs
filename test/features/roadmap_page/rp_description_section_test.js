
Feature('Roadmap Page - Description and Title Check')

Before((I, roadmapPage) => { // or Background
  roadmapPage.validatePage()
})

Scenario('Check page header and description are visible', (I, roadmapPage) => {
  roadmapPage.validateDescription()
})

Scenario('Check Show Roadmap Archive link is visible and works correctly', (I, roadmapPage) => {
  roadmapPage.validateRoadmapArchive()
})
