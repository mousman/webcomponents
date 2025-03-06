export interface Notifications {
  namespace: string
}

export const NOTIFICATION_TYPE = {
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info',
} as const

export type NotificationType = (typeof NOTIFICATION_TYPE)[keyof typeof NOTIFICATION_TYPE]

export interface Notification {
  id: string
  title: string
  description: string
  type: NotificationType
}
