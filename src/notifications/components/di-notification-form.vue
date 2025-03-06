<script setup lang="ts">
import { reactive, ref } from 'vue'
import { NOTIFICATION_TYPE, type NotificationType } from '@/notifications/types/notifications'
import { useNotificationStore } from '@/notifications/composables/notifications-store'

const { namespace } = defineProps<{
  namespace: string
}>()

const isCollapsed = ref<boolean>(false)
const { addNotification } = useNotificationStore(namespace)

interface FormState {
  title: string
  type: NotificationType
  description: string
}

const form = reactive<FormState>({
  title: '',
  type: NOTIFICATION_TYPE.INFO,
  description: '',
})

const handleSubmit = () => {
  addNotification({
    title: form.title,
    type: form.type,
    description: form.description,
  })

  form.title = ''
  form.type = NOTIFICATION_TYPE.INFO
  form.description = ''
  toggle()
}

function toggle() {
  isCollapsed.value = !isCollapsed.value
}
</script>

<template>
  <div class="bg-primary p-2 shadow-lg">
    <div class="flex justify-between mt-1 font-semibold cursor-pointer" @click="toggle">
      <div>Add notification</div>
      <div class="hover:bg-black/10 p-1 text-lg">
        <i-mdi-chevron-up v-if="isCollapsed" />
        <i-mdi-chevron-down v-else />
      </div>
    </div>
    <form
      v-if="isCollapsed"
      @submit.prevent="handleSubmit"
      class="di-notification-form flex flex-col gap-2"
    >
      <div class="flex flex-col gap-1">
        <label for="title">Title :</label>
        <input id="title" v-model="form.title" type="text" required />
      </div>

      <div class="flex flex-col gap-1">
        <label for="description">Description :</label>
        <textarea id="description" v-model="form.description" required></textarea>
      </div>

      <div class="flex flex-col gap-1">
        <label for="type">Type :</label>
        <select id="type" v-model="form.type" required>
          <option :value="NOTIFICATION_TYPE.INFO">Info</option>
          <option :value="NOTIFICATION_TYPE.SUCCESS">Success</option>
          <option :value="NOTIFICATION_TYPE.ERROR">Error</option>
        </select>
      </div>

      <button
        type="submit"
        class="m-auto mt-4 px-6 py-0.5 font-semibold text-sm"
        data-testid="notification-submit"
      >
        OK
      </button>
    </form>
  </div>
</template>
