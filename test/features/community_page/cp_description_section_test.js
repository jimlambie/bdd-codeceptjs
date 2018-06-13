Feature('Community Page - Description and Title Check')

Before((I, communityPage) => { // or Background
  communityPage.validatePage()
})

Scenario('Check page header and description are visible', (I, communityPage) => {
  communityPage.validateDescription()
})

Scenario('Check Find Us Boxes are visible', (I, communityPage) => {
  communityPage.validateFindUsBoxes()
})
