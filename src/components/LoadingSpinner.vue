<template>
  <div class="loading-overlay" v-if="loading">
    <div class="flex flex-col items-center">
      <div class="loading-spinner"></div>
      <p class="mt-4 text-gray-600 font-medium">{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingSpinner',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: 'Loading...'
    }
  }
}
</script> 