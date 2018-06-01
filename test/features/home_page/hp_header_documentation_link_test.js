
Feature('Home Page - Documentation Link')

Before((I, homePage) => { // or Background
  homePage.validatePage()
})

Scenario('Check Documentation Link', (I, homePage) => {
  homePage.validateDocumentationLink()
})
