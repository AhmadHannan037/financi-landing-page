<template>
  <section class="py-24 bg-gradient-to-b from-gray-50 to-white">
    <div class="max-w-7xl mx-auto px-8">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <h2 class="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          The Financi Solution
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Transform your financial analysis with AI-powered automation
        </p>
      </div>

      <!-- Solution Content -->
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left: Features -->
        <div class="space-y-8">
          <div 
            v-for="(feature, index) in features" 
            :key="index"
            class="flex gap-6 p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300
                   border border-gray-100 hover:border-primary/20 group"
          >
            <div class="text-primary group-hover:scale-110 transition-transform duration-300">
              <component :is="feature.icon" class="w-8 h-8" />
            </div>
            <div>
              <h3 class="text-lg font-bold mb-2 text-gray-900">
                {{ feature.title }}
              </h3>
              <p class="text-gray-600">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Right: Interactive Demo -->
        <div class="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <ChatDemo />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { 
  BoltIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  PresentationChartLineIcon
} from '@heroicons/vue/24/outline'
import ChatDemo from './ChatDemo.vue'

export default {
  name: 'SolutionSection',
  components: {
    BoltIcon,
    ChartBarIcon,
    ShieldCheckIcon,
    PresentationChartLineIcon,
    ChatDemo
  },
  setup() {
    const features = [
      {
        title: 'Lightning-Fast Processing',
        description: 'Process hundreds of pages in seconds with our advanced AI engine.',
        icon: BoltIcon
      },
      {
        title: 'Automated Analysis',
        description: 'Get instant insights with our machine learning algorithms.',
        icon: ChartBarIcon
      },
      {
        title: 'Bank-Grade Security',
        description: 'Your financial data is protected with enterprise-level encryption.',
        icon: ShieldCheckIcon
      },
      {
        title: 'Smart Reporting',
        description: 'Generate beautiful, interactive reports with one click.',
        icon: PresentationChartLineIcon
      }
    ]

    return {
      features
    }
  }
}
</script> 