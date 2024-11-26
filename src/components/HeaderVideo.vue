/**
 * @component HeaderVideo
 * @description Hero section animation showing product features
 * 
 * Features:
 * - File upload animation
 * - Progress tracking
 * - Results display
 * - Interactive elements
 * 
 * Animations:
 * - Upload progress
 * - Processing state
 * - Results reveal
 * 
 * @example
 * ```vue
 * <HeaderVideo />
 * ```
 */

<template>
  <div class="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
    <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center bg-white/80">
      <div class="animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent"></div>
    </div>
    <!-- Video Container -->
    <div class="relative bg-white rounded-lg overflow-hidden">
      <!-- Browser-like Header -->
      <div class="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center space-x-2">
        <div class="flex space-x-2">
          <div class="w-3 h-3 rounded-full bg-red-400"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div class="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div class="flex-1 flex justify-center">
          <div class="bg-white px-4 py-1 rounded-md text-sm text-gray-600 flex items-center">
            <LockClosedIcon class="w-4 h-4 mr-2 text-gray-400" />
            app.financi.ai
          </div>
        </div>
      </div>

      <!-- Main Content Area -->
      <div class="p-6">
        <!-- Upload Area -->
        <div 
          class="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center mb-8"
          :class="{ 'border-primary/50 bg-primary/5': step >= 1 }"
        >
          <div v-if="step < 1" class="animate-pulse">
            <ArrowUpTrayIcon class="w-12 h-12 mx-auto text-gray-400 mb-4" />
            <p class="text-gray-500">Drag and drop your financial documents here</p>
          </div>
          <div v-else class="animate-fade-in">
            <CheckCircleIcon class="w-12 h-12 mx-auto text-primary mb-4" />
            <p class="text-primary font-medium">Files uploaded successfully!</p>
          </div>
        </div>

        <!-- Processing Animation -->
        <div v-if="step >= 2" class="mb-8 animate-fade-in">
          <div class="flex items-center justify-between mb-4">
            <span class="text-sm font-medium text-gray-700">Processing documents...</span>
            <span class="text-sm text-gray-500">{{ progress }}%</span>
          </div>
          <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              class="h-full bg-primary transition-all duration-1000 rounded-full"
              :style="{ width: `${progress}%` }"
            ></div>
          </div>
        </div>

        <!-- Analysis Results -->
        <div v-if="step >= 3" class="space-y-6 animate-fade-in">
          <div class="grid grid-cols-2 gap-4">
            <div 
              v-for="(stat, index) in stats" 
              :key="index"
              class="bg-gray-50 p-4 rounded-lg"
            >
              <div class="text-sm text-gray-500 mb-1">{{ stat.label }}</div>
              <div class="text-xl font-bold text-gray-900">{{ stat.value }}</div>
            </div>
          </div>

          <!-- Key Insights -->
          <div class="bg-primary/5 border border-primary/20 rounded-lg p-4">
            <h3 class="text-sm font-medium text-primary mb-3">Key Insights</h3>
            <ul class="space-y-2">
              <li 
                v-for="(insight, index) in insights" 
                :key="index"
                class="flex items-start text-sm text-gray-600"
              >
                <SparklesIcon class="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                {{ insight }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { 
  ArrowUpTrayIcon,
  CheckCircleIcon,
  SparklesIcon,
  LockClosedIcon
} from '@heroicons/vue/24/outline'

export default {
  name: 'HeaderVideo',
  
  components: {
    ArrowUpTrayIcon,
    CheckCircleIcon,
    SparklesIcon,
    LockClosedIcon
  },

  setup() {
    /**
     * @var {ref} step - Controls the current animation step
     * @var {ref} progress - Tracks upload/processing progress (0-100)
     * @var {ref} isLoading - Controls loading state
     */
    const step = ref(0)
    const progress = ref(0)
    const isLoading = ref(true)

    /**
     * @const {Array} stats - Analysis statistics configuration
     * @property {string} label - Statistic label
     * @property {string} value - Statistic value
     */
    const stats = [
      { label: 'Documents Analyzed', value: '3' },
      { label: 'Pages Processed', value: '127' },
      { label: 'Processing Time', value: '2.3s' },
      { label: 'Insights Generated', value: '24' }
    ]

    /**
     * @const {Array} insights - Key insights to display
     */
    const insights = [
      'Revenue increased by 47% year-over-year',
      'Operating margins improved by 12 percentage points',
      'Customer acquisition cost decreased by 23%'
    ]

    /**
     * @function animateDemo
     * @description Controls the demo animation sequence
     */
    const animateDemo = async () => {
      // Upload animation
      await new Promise(resolve => setTimeout(resolve, 1000))
      step.value = 1

      // Processing animation
      await new Promise(resolve => setTimeout(resolve, 1000))
      step.value = 2

      // Progress bar animation
      const progressInterval = setInterval(() => {
        if (progress.value < 100) {
          progress.value += 2
        } else {
          clearInterval(progressInterval)
          step.value = 3
        }
      }, 50)
    }

    // Lifecycle hooks
    onMounted(() => {
      animateDemo()
      setTimeout(() => {
        isLoading.value = false
      }, 1000)
    })

    return {
      step,
      progress,
      stats,
      insights,
      isLoading
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