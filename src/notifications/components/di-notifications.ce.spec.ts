import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import DiNotifications from './di-notifications.ce.vue'
import DiNotification from './di-notification.vue'
import DiNotificationForm from './di-notification-form.vue'

describe('DiNotifications.vue', () => {
  localStorage.clear()
  localStorage.setItem(
    'di-notifications',
    '{"domaine1":[{"title":"titre2","type":"success","description":"desc2","id":"6dadbf2f-7573-4924-96f9-ad028a597a88"},{"title":"titre1","type":"info","description":"desc1","id":"1bedc1ef-16c7-4224-9007-70468835435d"}],"domaine2":[{"title":"titre3","type":"error","description":"desc3","id":"3a4413cb-5d37-4c75-bf4c-ddcfd5645f8f"}]}',
  )
  it('renders', () => {
    const wrapper = shallowMount(DiNotifications, {
      props: {
        namespace: 'domaine1',
      },
      slots: {
        default: 'Header',
      },
    })
    expect(wrapper.text()).toBe('Headerdomaine1 2 unread')
    const notifications = wrapper.findAllComponents(DiNotification)
    expect(notifications).toHaveLength(2)
    expect(wrapper.findComponent(DiNotificationForm).exists()).toBe(true)
    expect(notifications?.[0].props('notification')).toMatchSnapshot()
    expect(notifications?.[1].props('notification')).toMatchSnapshot()
  })

  it("doesn't show creation form if not wanted", () => {
    const wrapper = shallowMount(DiNotifications, {
      props: {
        namespace: 'domaine1',
        creation: 'false',
      },
    })
    expect(wrapper.findComponent(DiNotificationForm).exists()).toBe(false)
  })

  it('removes a notification', async () => {
    const wrapper = shallowMount(DiNotifications, {
      props: {
        namespace: 'domaine1',
      },
      slots: {
        default: 'Header',
      },
    })
    const notification = wrapper.findComponent(DiNotification)
    expect(wrapper.findAllComponents(DiNotification)).toHaveLength(2)
    notification.vm.$emit('close', '1bedc1ef-16c7-4224-9007-70468835435d')
    await wrapper.vm.$nextTick()
    expect(wrapper.findAllComponents(DiNotification)).toHaveLength(1)
  })
})
