import { describe, expect, it } from 'vitest'

import { useNotificationStore } from './notifications-store'
import { NOTIFICATION_TYPE } from '@/notifications/types/notifications'

describe('useNotificationStore', () => {
  it('should work', () => {
    localStorage.clear()

    const { notifications, addNotification, removeNotification } = useNotificationStore('namespace')
    const myNotification = {
      title: 'title',
      description: 'desc',
      type: NOTIFICATION_TYPE.SUCCESS,
    }

    expect(notifications.value).toBe(undefined)

    addNotification(myNotification)
    expect(notifications.value).toMatchObject([myNotification])

    const { notifications: otherNotificationsDomain } = useNotificationStore('namespace2')
    expect(otherNotificationsDomain.value).toBe(undefined)

    removeNotification(notifications.value[0].id)
    expect(notifications.value).toEqual([])
  })
})
