import {describe, expect, it} from 'vitest'
import { shallowMount,  } from '@vue/test-utils'

import NotificationCore from '@/notifications/components/notification-core.vue'
import { NOTIFICATION_TYPE } from '@/notifications/types/notifications'
import IMdiSuccessCircleOutline from "~icons/mdi/success-circle-outline"
import IMdiErrorOutline from "~icons/mdi/error-outline"
import IMdiInformationVariantCircleOutline from "~icons/mdi/information-variant-circle-outline"
import IMdiClose from "~icons/mdi/close"


describe('NotificationCore.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(NotificationCore, {
      props: {
        variant: NOTIFICATION_TYPE.SUCCESS,
      },
      slots: {
        title: 'Title',
        description: 'Description'
      }
    })
    expect(wrapper.find('.di-notification').exists()).toBe(true)
    expect(wrapper.findComponent(IMdiSuccessCircleOutline).exists()).toBe(true)
    expect(wrapper.text()).toBe("TitleDescription")
    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.findComponent(IMdiClose).exists()).toBe(true)
  })

  it('renders notification with info variant', () => {
    const wrapper = shallowMount(NotificationCore, {
      props: {
        variant: NOTIFICATION_TYPE.INFO,
      },
      slots: {
        title: 'Info Title',
        description: 'Info Description'
      }
    })
    expect(wrapper.findComponent(IMdiInformationVariantCircleOutline).exists()).toBe(true)
  })

  it('renders notification with error variant', () => {
    const wrapper = shallowMount(NotificationCore, {
      props: {
        variant: NOTIFICATION_TYPE.ERROR,
      },
      slots: {
        title: 'Error Title',
        description: 'Error Description'
      }
    })
    expect(wrapper.findComponent(IMdiErrorOutline).exists()).toBe(true)
  })

  it('renders notification with info variant', () => {
    const wrapper = shallowMount(NotificationCore, {
      props: {
        variant: NOTIFICATION_TYPE.INFO,
      },
      slots: {
        title: 'Info Title',
        description: 'Info Description'
      }
    })
    expect(wrapper.findComponent(IMdiInformationVariantCircleOutline).exists()).toBe(true)
  })

  it('emits close event when close button is clicked', () => {
    const wrapper = shallowMount(NotificationCore, {
      props: {
        variant: NOTIFICATION_TYPE.INFO,
      },
    })
    wrapper.find('button').trigger('click')
    expect(wrapper.emitted().close).toBeTruthy()
  })

  it('renders notification without close button', () => {
    const wrapper = shallowMount(NotificationCore, {
      props: {
        variant: NOTIFICATION_TYPE.INFO,
        closable: false
      },
    })
    expect(wrapper.find('button').exists()).toBe(false)
  })
})
