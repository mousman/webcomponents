import { test, expect } from '@playwright/test'

test.describe('Notification System', () => {
  test('displays 3 notifications web components', async ({ page }) => {
    await page.goto('/demo')
    await expect(page.locator('di-notifications')).toHaveCount(3)

    const firstNotification = page.locator('di-notifications').nth(0)
    await expect(firstNotification.locator('button')).toBeVisible()
    await expect(firstNotification).toHaveAttribute('namespace', 'the namespace')
    await expect(firstNotification.getByTestId('di-notifications-header')).toHaveText(
      'the namespace 0 unread',
    )
    await expect(firstNotification.locator('form')).toBeHidden()

    const secondNotification = page.locator('di-notifications').nth(1)
    await expect(secondNotification.locator('button')).toBeHidden()
    await expect(secondNotification).toHaveAttribute('namespace', 'the namespace')
    await expect(secondNotification.getByTestId('di-notifications-header')).toHaveText(
      'the namespace 0 unread',
    )

    const thirdNotification = page.locator('di-notifications').nth(2)
    await expect(thirdNotification).toHaveAttribute('namespace', 'the namespace 2')
    await expect(thirdNotification.getByTestId('di-notifications-header')).toHaveText(
      'the namespace 2 0 unread',
    )
  })

  test('handles correctly interactions', async ({ page }) => {
    await page.goto('/demo')

    const firstNotification = page.locator('di-notifications').nth(0)
    const secondNotification = page.locator('di-notifications').nth(1)
    const thirdNotification = page.locator('di-notifications').nth(2)

    await firstNotification.locator('button').click()

    await expect(firstNotification.locator('form')).toBeVisible()
    await firstNotification.locator('input').fill('the title')
    await firstNotification.locator('textarea').fill('the description')
    await firstNotification.locator('select').selectOption({ label: 'Success' })
    await firstNotification.getByTestId('notification-submit').click()

    await expect(firstNotification.getByTestId('di-notification')).toBeVisible()
    await expect(secondNotification.getByTestId('di-notification')).toBeVisible()
    await expect(thirdNotification.getByTestId('di-notification')).toBeHidden()

    await page.reload()
    await expect(firstNotification.getByTestId('di-notification')).toBeVisible()
    await expect(secondNotification.getByTestId('di-notification')).toBeVisible()
    await expect(thirdNotification.getByTestId('di-notification')).toBeHidden()
    await expect(firstNotification.getByTestId('di-notifications-header')).toHaveText(
      'the namespace 1 unread',
    )

    await secondNotification.getByTestId('di-notification').locator('button').click()
    await expect(firstNotification.getByTestId('di-notification')).toBeHidden()
    await expect(secondNotification.getByTestId('di-notification')).toBeHidden()
    await expect(firstNotification.getByTestId('di-notifications-header')).toHaveText(
      'the namespace 0 unread',
    )

    await page.reload()
    await expect(firstNotification.getByTestId('di-notification')).toBeHidden()
    await expect(firstNotification.getByTestId('di-notifications-header')).toHaveText(
      'the namespace 0 unread',
    )
    await expect(secondNotification.getByTestId('di-notification')).toBeHidden()
    await expect(secondNotification.getByTestId('di-notifications-header')).toHaveText(
      'the namespace 0 unread',
    )
  })
})
