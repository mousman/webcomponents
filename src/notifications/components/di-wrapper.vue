<script setup lang="ts">
import DiNotifications from '@/notifications/components/di-notifications.ce.vue'
</script>
<template>
  <div class="flex gap-4 mb-4">
    <di-notifications namespace="domaine1"> Notifications </di-notifications>
    <di-notifications namespace="domaine1" creation="false"> by Moussa </di-notifications>
    <di-notifications namespace="domaine2"> ✨ </di-notifications>
  </div>
</template>
