import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import DiNotification from '@/notifications/components/di-notification.vue'
import { NOTIFICATION_TYPE } from '@/notifications/types/notifications'
import NotificationCore from './notification-core.vue'

describe('DiNotification.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(DiNotification, {
      props: {
        notification: {
          id: 'blabla',
          title: 'title',
          description: 'desc',
          type: NOTIFICATION_TYPE.SUCCESS,
        },
      },
    })
    expect(wrapper.findComponent(NotificationCore).props('variant')).toBe(NOTIFICATION_TYPE.SUCCESS)
  })

  it('emits a close event', () => {
    const wrapper = shallowMount(DiNotification, {
      props: {
        notification: {
          id: 'blabla',
          title: 'title',
          description: 'desc',
          type: NOTIFICATION_TYPE.SUCCESS,
        },
      },
    })

    const notificationCore = wrapper.findComponent(NotificationCore)
    notificationCore.vm.$emit('close', '1bedc1ef-16c7-4224-9007-70468835435d')
    expect(wrapper.emitted().close).toBeTruthy()
  })
})
