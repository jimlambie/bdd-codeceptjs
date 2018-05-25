
Feature('Network Page - Be part of the network section')

Before((I) => { // or Background
  I.amOnPage('/network')
  // I.scrollTo('#contribute > h3 > span')
})

Scenario('Check section title and description are visible', (I, networkPage) => {
  networkPage.validate()
//   I.seeTextEquals('BE PART OF THE NETWORK', '#contribute > h3 > span')
//   I.seeTextEquals('If you have spare computational power, DADI is a great application of your resource, delivering real world services for individuals, businesses and governments, whilst delivering income for you.', 'p.normal.mb--x2')
})

// Scenario('Check there is a Stargates box with title, description and Learn more link', (I) => {
//   I.click('Platform introduction')
//   I.waitForText('DADI Network: introduction', 'h1')
//   I.seeInTitle('DADI Network: introduction | DADI')
// })

// Scenario('Check Technology roadmap link is visible and works correctly', (I) => {
//   I.click('Technology roadmap')
//   I.waitForText('Roadmap', 'h1')
//   I.seeInTitle('Roadmap | DADI')
// })
