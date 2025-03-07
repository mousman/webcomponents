import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import DiNotificationForm from './di-notification-form.vue'

describe('DiNotificationForm.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(DiNotificationForm, {
      props: {
        namespace: 'namespace',
      },
    })
    expect(wrapper.findComponent(DiNotificationForm).exists()).toBe(true)
  })
})

// TODO: Add more tests
