/**
 * @component ChatDemo
 * @description Interactive chat demonstration showing AI capabilities
 * 
 * Features:
 * - Animated chat sequence
 * - File upload simulation
 * - AI responses
 * - Progress tracking
 * - Error handling
 * 
 * States:
 * - Loading
 * - File upload
 * - Processing
 * - Response
 * 
 * @example
 * ```vue
 * <ChatDemo />
 * ```
 */

<template>
  <div class="relative bg-white rounded-lg overflow-hidden">
    <!-- Chat Header -->
    <div class="bg-gray-50 p-4 border-b border-gray-200">
      <div class="flex items-center">
        <div class="w-3 h-3 rounded-full bg-primary animate-pulse mr-2"></div>
        <span class="text-sm font-medium text-gray-700">AI Assistant Active</span>
      </div>
    </div>

    <!-- Chat Messages -->
    <div class="h-[400px] overflow-y-auto p-4 space-y-4" ref="chatContainer">
      <!-- File Upload Message -->
      <div 
        class="flex items-start space-x-3"
        :class="{ 'opacity-0': step < 1, 'animate-fade-in': step >= 1 }"
      >
        <div class="flex-shrink-0">
          <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <UserIcon class="w-5 h-5 text-gray-500" />
          </div>
        </div>
        <div class="flex-1">
          <div class="bg-gray-100 rounded-2xl p-4 max-w-md">
            <div class="flex items-center space-x-2 mb-2">
              <DocumentIcon class="w-5 h-5 text-primary" />
              <span class="font-medium">Financial_Report_2021.pdf</span>
            </div>
            <div class="text-sm text-gray-600">
              Uploaded and processed successfully
            </div>
          </div>
        </div>
      </div>

      <!-- First Question -->
      <div 
        class="flex items-start space-x-3"
        :class="{ 'opacity-0': step < 2, 'animate-fade-in': step >= 2 }"
      >
        <div class="flex-shrink-0">
          <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <UserIcon class="w-5 h-5 text-gray-500" />
          </div>
        </div>
        <div class="flex-1">
          <div class="bg-gray-100 rounded-2xl p-4">
            <p>What is Lyft's revenue for 2021?</p>
          </div>
        </div>
      </div>

      <!-- First Answer -->
      <div 
        class="flex items-start space-x-3"
        :class="{ 'opacity-0': step < 3, 'animate-fade-in': step >= 3 }"
      >
        <div class="flex-shrink-0">
          <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <SparklesIcon class="w-5 h-5 text-white" />
          </div>
        </div>
        <div class="flex-1">
          <div class="bg-primary/5 border border-primary/10 rounded-2xl p-4">
            <p class="text-gray-800">$3,208.3 million <span class="text-gray-500">(Page 63)</span></p>
            <div class="mt-2 flex items-center text-sm text-gray-500">
              <DocumentMagnifyingGlassIcon class="w-4 h-4 mr-1" />
              Source: Annual Report 2021
            </div>
          </div>
        </div>
      </div>

      <!-- Second Question -->
      <div 
        class="flex items-start space-x-3"
        :class="{ 'opacity-0': step < 4, 'animate-fade-in': step >= 4 }"
      >
        <div class="flex-shrink-0">
          <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <UserIcon class="w-5 h-5 text-gray-500" />
          </div>
        </div>
        <div class="flex-1">
          <div class="bg-gray-100 rounded-2xl p-4">
            <p>Compare revenue growth of Uber and Lyft.</p>
          </div>
        </div>
      </div>

      <!-- Second Answer -->
      <div 
        class="flex items-start space-x-3"
        :class="{ 'opacity-0': step < 5, 'animate-fade-in': step >= 5 }"
      >
        <div class="flex-shrink-0">
          <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <SparklesIcon class="w-5 h-5 text-white" />
          </div>
        </div>
        <div class="flex-1">
          <div class="bg-primary/5 border border-primary/10 rounded-2xl p-4">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <div class="text-sm text-gray-600">Uber</div>
                <div class="text-lg font-semibold text-green-600">+57%</div>
              </div>
              <div>
                <div class="text-sm text-gray-600">Lyft</div>
                <div class="text-lg font-semibold text-green-600">+36%</div>
              </div>
            </div>
            <div class="mt-3 text-sm text-gray-600">
              Analysis shows Uber had stronger revenue growth in 2021, outperforming Lyft by 21 percentage points.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Chat Input -->
    <div class="border-t border-gray-200 p-4 bg-white">
      <div class="flex items-center space-x-3">
        <input 
          type="text"
          placeholder="Ask a question about the financial report..."
          class="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-primary"
          :disabled="true"
        >
        <button 
          class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300"
          :disabled="true"
        >
          <PaperAirplaneIcon class="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue'
import { 
  UserIcon, 
  DocumentIcon, 
  SparklesIcon,
  DocumentMagnifyingGlassIcon,
  PaperAirplaneIcon
} from '@heroicons/vue/24/outline'

export default {
  name: 'ChatDemo',
  components: {
    UserIcon,
    DocumentIcon,
    SparklesIcon,
    DocumentMagnifyingGlassIcon,
    PaperAirplaneIcon
  },
  setup() {
    const step = ref(0)
    const chatContainer = ref(null)
    const error = ref(null)

    const handleError = (err) => {
      error.value = err.message
      console.error(err)
    }

    const animateDemo = async () => {
      try {
        for (let i = 1; i <= 5; i++) {
          await new Promise(resolve => setTimeout(resolve, 2000))
          step.value = i
        }
      } catch (err) {
        handleError(err)
      }
    }

    watch(step, () => {
      if (chatContainer.value) {
        chatContainer.value.scrollTop = chatContainer.value.scrollHeight
      }
    })

    onMounted(() => {
      animateDemo()
    })

    return {
      step,
      chatContainer,
      error
    }
  }
}
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 