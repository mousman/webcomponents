import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import DiWrapper from '@/notifications/components/di-wrapper.vue'
import DiNotifications from '@/notifications/components/di-notifications.ce.vue'

describe('DiWrapper.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(DiWrapper)
    const notifications = wrapper.findAllComponents(DiNotifications)
    expect(notifications).toHaveLength(3)
    expect(notifications[0].props('namespace')).toBe('domaine1')
    expect(notifications[1].props('namespace')).toBe('domaine1')
    expect(notifications[2].props('namespace')).toBe('domaine2')
  })
})
