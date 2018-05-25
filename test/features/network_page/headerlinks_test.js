//
// Feature('Network page - header links')
//
// // define data table inside a test or load from another module
// let links = new DataTable(['linkText'])
// links.add(['Home'])
// links.add(['Network']) // adding records to a table
// links.add(['Web services'])
// links.add(['Community'])
// links.add(['Documentation'])
//
// // You can skip some data. But add them to report as skipped (just like with usual scenarios):
// // accounts.xadd(['admin', '23456'])
// Before((I) => { // or Background
//   I.amOnPage('/network')
// })
//
// // Pass dataTable to Data()
// // Use special param `current` to get current data set
// xData(links).Scenario('Header contains links for other pages', (I, current) => {
//   // I.amOnPage('/en/network')
//   I.seeElement(
//     locate('a')
//       // .withAttr({ class: 'active' })
//       .withText(current.linkText)
//       .inside(locate('nav'))
//   )
// })
//
// xScenario('Network link has "active" class', (I) => {
//   // I.amOnPage('/en/network')
//   // I.seeElement('nav a.active')
//   I.seeElement(
//     locate('a')
//       .withAttr({ class: 'active' })
//       .withText('Network')
//       .inside(locate('nav'))
//   )
// })
