
Feature('Network Page - Description and Title Check')

Before((I) => { // or Background
  I.amOnPage('/network')
})

Scenario('Check page header and description are visible', (I) => {
  I.seeTextEquals('Network', 'h1')
  I.seeTextEquals('DADI is a global, decentralized cloud platform with a suite of web services to help you build, launch and grow your digital products.', 'p.normal.mb')
})

Scenario('Check Platform introduction link is visible and works correctly', (I) => {
  I.click('Platform introduction')
  I.waitForText('DADI Network: introduction', 'h1')
  I.seeInTitle('DADI Network: introduction | DADI')
})

Scenario('Check Technology roadmap link is visible and works correctly', (I) => {
  I.click('Technology roadmap')
  I.waitForText('Roadmap', 'h1')
  I.seeInTitle('Roadmap | DADI')
})
