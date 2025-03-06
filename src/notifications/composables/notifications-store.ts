import { ref, computed } from 'vue'
import type { Notification } from '@/notifications/types/notifications'

const notificationsNS = ref<Record<string, Notification[]>>({})

loadNotifications()

function loadNotifications() {
  const stored = localStorage.getItem(`di-notifications`) ?? '{}'
  notificationsNS.value = JSON.parse(stored)
}

export function useNotificationStore(namespace: string) {
  function addNotification(notification: Omit<Notification, 'id'>) {
    notificationsNS.value[namespace] = [
      {
        ...notification,
        id: crypto.randomUUID(),
      },
      ...(notificationsNS.value[namespace] ?? []),
    ]
    saveNotifications()
  }

  function removeNotification(id: string) {
    notificationsNS.value[namespace] = notificationsNS.value[namespace].filter((n) => n.id !== id)
    saveNotifications()
  }

  function saveNotifications() {
    localStorage.setItem(`di-notifications`, JSON.stringify(notificationsNS.value))
  }

  const notifications = computed(() => notificationsNS.value[namespace])

  return {
    notifications,
    loadNotifications,
    addNotification,
    removeNotification,
  }
}
