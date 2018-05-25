
Feature('Header Links')

Before((I) => { // or Background
  I.amOnPage('/network')
})

Scenario('Check all Header Links are present', (I) => {
  I.seeElement(
    locate('a')
      .withText('Home')
      .inside(locate('nav')))
  I.seeElement(
    locate('a')
      .withText('Network')
      .inside(locate('nav')))

  I.seeElement(
    locate('a')
      .withText('Jim')
      .inside(locate('nav')))

  I.seeElement(
    locate('a')
      .withText('Web services')
      .inside(locate('nav')))
  I.seeElement(
    locate('a')
      .withText('Community')
      .inside(locate('nav')))
  I.seeElement(
    locate('a')
      .withText('Documentation')
      .inside(locate('nav')))
  I.seeElement(
    locate('a')
      .withAttr({ class: 'active' })
      .withText('Network')
      .inside(locate('nav'))
  )
})
