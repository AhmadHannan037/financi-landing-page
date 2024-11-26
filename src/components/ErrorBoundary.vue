<template>
  <div v-if="error" class="error-boundary">
    <div class="max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Something went wrong
        </h2>
        <p class="mt-4 text-lg text-gray-500">
          {{ error.message }}
        </p>
        <div class="mt-6">
          <button
            @click="handleReset"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  </div>
  <slot v-else></slot>
</template>

<script>
import { ref, onErrorCaptured } from 'vue'

export default {
  name: 'ErrorBoundary',
  setup() {
    const error = ref(null)

    onErrorCaptured((err) => {
      error.value = err
      return false // Prevent error from propagating
    })

    const handleReset = () => {
      error.value = null
      window.location.reload()
    }

    return {
      error,
      handleReset
    }
  }
}
</script> 