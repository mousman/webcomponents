<script setup lang="ts">
import type { Notification } from '@/notifications/types/notifications'

const { notification } = defineProps<{
  notification: Notification
}>()
</script>

<template>
  <div class="di-notification bg-success">
    <div>{{ notification.title }}</div>
    <div>{{ notification.description }}</div>
  </div>
</template>
