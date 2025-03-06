<script setup lang="ts">
import { type Notification } from '@/notifications/types/notifications'
import NotificationCore from './notification-core.vue'

// I could have used <Component :is="" /> in parent component
// but this way gives more flexibility
const { notification } = defineProps<{ notification: Notification }>()

const emit = defineEmits<{
  close: [string]
}>()
</script>

<template>
  <notification-core :variant="notification.type" @close="emit('close', notification.id)">
    <template v-slot:title>{{ notification.title }}</template>
    <template v-slot:description>{{ notification.description }}</template>
  </notification-core>
</template>
