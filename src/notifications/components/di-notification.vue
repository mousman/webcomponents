<script setup lang="ts">
import { type Notification, NOTIFICATION_TYPE } from '@/notifications/types/notifications'
import DiNotificationInfo from './di-notification-info.vue'
import DiNotificationSuccess from './di-notification-success.vue'
import DiNotificationError from './di-notification-error.vue'

// I could have used <Component :is="" /> in parent component but this way gives more flexibility
const { notification } = defineProps<{ notification: Notification }>()
</script>

<template>
  <DiNotificationInfo v-if="notification.type === NOTIFICATION_TYPE.INFO" :notification />
  <DiNotificationSuccess v-if="notification.type === NOTIFICATION_TYPE.SUCCESS" :notification />
  <DiNotificationError v-if="notification.type === NOTIFICATION_TYPE.ERROR" :notification />
</template>
