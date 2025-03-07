<script setup lang="ts">
import { computed } from 'vue'
import { NOTIFICATION_TYPE, type NotificationType } from '@/notifications/types/notifications'
import IMdiSuccessCircleOutline from "~icons/mdi/success-circle-outline"
import IMdiInformationVariantCircleOutline from "~icons/mdi/information-variant-circle-outline"
import IMdiErrorOutline from "~icons/mdi/error-outline"

const { variant = 'info', closable = true } = defineProps<{
  variant?: NotificationType
  closable?: boolean
}>()

const variantStyle = computed(() => {
  switch (variant) {
    case NOTIFICATION_TYPE.SUCCESS:
      return { background: 'bg-success', textColor: 'text-success-800' }
    case NOTIFICATION_TYPE.ERROR:
      return { background: 'bg-error', textColor: 'text-error-800' }
    default:
      return { background: 'bg-info', textColor: 'text-info-800' }
  }
})

const Icon = computed(()=> variant === NOTIFICATION_TYPE.SUCCESS ?
  IMdiSuccessCircleOutline : variant === NOTIFICATION_TYPE.INFO ?
    IMdiInformationVariantCircleOutline : IMdiErrorOutline)

const emit = defineEmits<{
  close: []
}>()
</script>

<template>
  <div class="di-notification min-w-[250px]" :class="variantStyle.background">
    <div class="flex flex-no-wrap gap-3" :class="variantStyle.textColor">
      <component :is="Icon"
        class="self-center text-xl"
      />
      <div class="self-center grow">
        <div class="text-m font-medium">
          <slot name="title" />
        </div>
        <div class="text-sm"><slot name="description" /></div>
      </div>
      <button
        v-if="closable"
        @click="emit('close')"
        class="self-start text-xs cursor-pointer hover:bg-black/10 rounded-full p-1"
      >
        <i-mdi-close />
      </button>
    </div>
  </div>
</template>
