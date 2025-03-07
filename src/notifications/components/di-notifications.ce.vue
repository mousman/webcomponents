<script setup lang="ts">
import DiNotification from './di-notification.vue'
import DiNotificationForm from './di-notification-form.vue'
import { useNotificationStore } from '@/notifications/composables/notifications-store'

const { namespace, creation } = defineProps<{ namespace: string; creation?: string }>()
const { notifications, removeNotification } = useNotificationStore(namespace)

function onClose(id: string) {
  removeNotification(id)
}
</script>

<template>
  <div class="flex flex-col gap-2 min-w-[250px]" data-testid="di-notifications">
    <slot />
    <div
      class="bg-blue-500 mb-2 text-white px-2 flex justify-between"
      data-testid="di-notifications-header"
    >
      <span>
        {{ namespace }}
      </span>
      {{ notifications?.length ?? 0 }} unread
    </div>
    <di-notification
      v-for="notification in notifications"
      :notification
      :key="notification.id"
      @close="onClose(notification.id)"
    />
    <DiNotificationForm :namespace v-if="creation !== 'false'" />
  </div>
</template>
