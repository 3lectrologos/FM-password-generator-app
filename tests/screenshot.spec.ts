import { test } from '@playwright/test'

test.describe('screenshot-desktop', () => {
  test.use({
    viewport: { width: 1440, height: 1024 },
  })

  test('screenshot-desktop', async ({ page, browserName }) => {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' })
    await page.waitForTimeout(1000)
    await page.screenshot({
      path: `./screenshots/desktop-${browserName}.png`,
      fullPage: false,
    })
    await page.getByText('Generate').hover()
    await page.waitForTimeout(1000)
    await page.screenshot({
      path: `./screenshots/hover-desktop-${browserName}.png`,
      fullPage: false,
    })
    await page.getByText('Include Uppercase').click()
    await page.getByText('Include Lowercase').click()
    await page.getByText('Include Numbers').click()
    await page.getByText('Generate').hover({ force: true })
    await page.waitForTimeout(1000)
    await page.screenshot({
      path: `./screenshots/tooltip-desktop-${browserName}.png`,
      fullPage: false,
    })
  })
})

test.describe('screenshot-tablet', () => {
  test.use({
    viewport: { width: 768, height: 1280 },
  })

  test('screenshot-tablet', async ({ page, browserName }) => {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' })
    await page.waitForTimeout(1000)
    await page.screenshot({
      path: `./screenshots/tablet-${browserName}.png`,
      fullPage: false,
    })
    await page.getByText('Generate').hover()
    await page.waitForTimeout(1000)
    await page.screenshot({
      path: `./screenshots/hover-tablet-${browserName}.png`,
      fullPage: false,
    })
  })
})

test.describe('screenshot-mobile', () => {
  test.use({
    viewport: { width: 375, height: 1150 },
  })

  test('screenshot-mobile', async ({ page, browserName }) => {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' })
    await page.waitForTimeout(1000)
    await page.screenshot({
      path: `./screenshots/mobile-${browserName}.png`,
      fullPage: false,
    })
    await page.getByText('Generate').hover()
    await page.waitForTimeout(1000)
    await page.screenshot({
      path: `./screenshots/hover-mobile-${browserName}.png`,
      fullPage: false,
    })
  })
})
