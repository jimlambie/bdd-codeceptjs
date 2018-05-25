
Feature('Header Links')

Before((I) => { // or Background
  I.amOnPage('/network')
})

Scenario('Check all Header Links are present', (I) => {
  I.seeElement(
    locate('a')
    // .withAttr({ class: 'active' })
      .withText('Home')
      .inside(locate('nav')))
  I.seeElement(
    locate('a')
    // .withAttr({ class: 'active' })
      .withText('Network')
      .inside(locate('nav')))
  I.seeElement(
    locate('a')
    // .withAttr({ class: 'active' })
      .withText('Web services')
      .inside(locate('nav')))
  I.seeElement(
    locate('a')
    // .withAttr({ class: 'active' })
      .withText('Community')
      .inside(locate('nav')))
  I.seeElement(
    locate('a')
    // .withAttr({ class: 'active' })
      .withText('Documentation')
      .inside(locate('nav')))
  I.seeElement(
    locate('a')
      .withAttr({ class: 'active' })
      .withText('Network')
      .inside(locate('nav'))
  )
})
