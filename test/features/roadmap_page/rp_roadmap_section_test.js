
Feature('Roadmap Page - Roadmap Section Check')

Before((I, roadmapPage) => { // or Background
  roadmapPage.validatePage()
})

Scenario('Check Roadmap Section is visible', async (I, roadmapPage) => {
  await roadmapPage.validateRoadmapSection()
})
