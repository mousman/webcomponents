<script setup lang="ts">
import { ref } from 'vue'
import DiNotification from './di-notification.vue'
import { NOTIFICATION_TYPE } from '@/notifications/types/notifications'

const { namespace } = defineProps<{ namespace: string }>()

const notifications = ref([
  {
    id: 1,
    type: NOTIFICATION_TYPE.INFO,
    title: 'Info',
    description: 'This is an info notification',
  },
  {
    id: 2,
    type: NOTIFICATION_TYPE.SUCCESS,
    title: 'Success',
    description: 'This is a success notification',
  },
  {
    id: 3,
    type: NOTIFICATION_TYPE.ERROR,
    title: 'Error',
    description: 'This is an error notification',
  },
])

function onClose(id: number) {
  notifications.value = notifications.value.filter((notification) => notification.id !== id)
}
</script>

<template>
  <div class="flex flex-col gap-1">
    <slot>my slot</slot>
    <div class="bg-blue-500 mb-2">{{ namespace }}</div>
    <di-notification
      v-for="notification in notifications"
      :notification
      :key="notification.id"
      @close="onClose"
    />
  </div>
</template>
