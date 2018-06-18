
Feature('Home Page - Article Test')

Before((I, homePage) => { // or Background
  homePage.validatePage()
})

Scenario('Check Facebook Share Button Works', (I, homePage) => {
  homePage.validateArticleFacebook()
})

Scenario('Check LinkedIn Share Button Works', (I, homePage) => {
  homePage.validateArticleLinkedin()
})

Scenario('Check Twitter Share Button Works', (I, homePage) => {
  homePage.validateArticleTwitter()
})

Scenario('Check Reddit Share Button Works', (I, homePage) => {
  homePage.validateArticleReddit()
})
