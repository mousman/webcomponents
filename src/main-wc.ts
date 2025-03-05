import { defineCustomElement } from 'vue'
import styles from './assets/style.css?inline'
import DiNotifications from './notifications/components/di-notifications.ce.vue'

const DiNotificationsEL = defineCustomElement(DiNotifications, {
  styles: [styles],
})

if (!customElements.get('di-notifications')) {
  customElements.define('di-notifications', DiNotificationsEL)
}

export { DiNotificationsEL }

// in case we have several components we could provide a methode to register them all at once
export function register() {
  customElements.define('di-notifications', DiNotificationsEL)
}
