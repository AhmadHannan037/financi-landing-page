<template>
  <div 
    v-if="show"
    class="fixed bottom-4 right-4 max-w-md bg-white rounded-lg shadow-lg border border-gray-100 p-4 animate-slide-up"
    :class="typeClasses"
  >
    <div class="flex items-start">
      <div class="flex-shrink-0">
        <component :is="icon" class="w-5 h-5" />
      </div>
      <div class="ml-3 w-0 flex-1">
        <p class="text-sm font-medium">{{ title }}</p>
        <p class="mt-1 text-sm text-gray-500">{{ message }}</p>
      </div>
      <button 
        @click="dismiss"
        class="ml-4 flex-shrink-0 text-gray-400 hover:text-gray-500"
      >
        <span class="sr-only">Close</span>
        <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    show: Boolean,
    type: {
      type: String,
      default: 'success'
    },
    title: String,
    message: String
  },
  computed: {
    typeClasses() {
      return {
        'bg-green-50 text-green-800': this.type === 'success',
        'bg-red-50 text-red-800': this.type === 'error',
        'bg-blue-50 text-blue-800': this.type === 'info'
      }
    },
    icon() {
      const icons = {
        success: 'CheckCircleIcon',
        error: 'XCircleIcon',
        info: 'InformationCircleIcon'
      }
      return icons[this.type]
    }
  },
  methods: {
    dismiss() {
      this.$emit('update:show', false)
    }
  }
}
</script> 