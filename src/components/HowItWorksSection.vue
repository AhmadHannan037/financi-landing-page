<template>
  <section class="py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-8">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <h2 class="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          How Financi Works
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Transform your financial documents into actionable insights in three simple steps
        </p>
      </div>

      <!-- Steps Container -->
      <div class="grid md:grid-cols-3 gap-12">
        <div 
          v-for="(step, index) in steps" 
          :key="index"
          class="relative group"
          @mouseenter="activeStep = index"
        >
          <!-- Step Card -->
          <div 
            class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full
                   border border-gray-100 hover:border-primary/20"
          >
            <!-- Step Number -->
            <div 
              class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6
                     text-primary font-bold text-lg group-hover:bg-primary group-hover:text-white
                     transition-all duration-300"
            >
              {{ index + 1 }}
            </div>

            <!-- Step Icon -->
            <div class="mb-6 text-primary">
              <component 
                :is="step.icon" 
                class="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <!-- Step Content -->
            <h3 class="text-xl font-bold mb-4 text-gray-900">
              {{ step.title }}
            </h3>
            <p class="text-gray-600 leading-relaxed">
              {{ step.description }}
            </p>

            <!-- Features List -->
            <ul class="mt-6 space-y-3">
              <li 
                v-for="(feature, fIndex) in step.features" 
                :key="fIndex"
                class="flex items-center text-gray-600"
              >
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-2" />
                {{ feature }}
              </li>
            </ul>
          </div>

          <!-- Connection Line (except for last item) -->
          <div 
            v-if="index < steps.length - 1" 
            class="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gray-200"
          >
            <div 
              class="absolute top-1/2 left-0 h-0.5 bg-primary transition-all duration-500"
              :class="activeStep >= index ? 'w-full' : 'w-0'"
            ></div>
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="text-center mt-16">
        <button 
          class="px-8 py-4 bg-primary text-white rounded-lg font-semibold 
                 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
        >
          Get Started Now
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import { 
  DocumentTextIcon, 
  ChartBarIcon, 
  LightBulbIcon,
  CheckCircleIcon 
} from '@heroicons/vue/24/outline'

export default {
  name: 'HowItWorksSection',
  components: {
    DocumentTextIcon,
    ChartBarIcon,
    LightBulbIcon,
    CheckCircleIcon
  },
  setup() {
    const activeStep = ref(0)

    const steps = [
      {
        title: 'Upload Documents',
        description: 'Simply drag and drop your financial documents. We support various formats including PDF, Excel, and CSV files.',
        icon: DocumentTextIcon,
        features: [
          'Secure file handling',
          'Multiple format support',
          'Batch processing'
        ]
      },
      {
        title: 'AI Analysis',
        description: 'Our AI engine processes your documents, extracting key metrics and patterns while identifying trends and anomalies.',
        icon: ChartBarIcon,
        features: [
          'Real-time processing',
          'Advanced pattern recognition',
          'Accuracy verification'
        ]
      },
      {
        title: 'Get Insights',
        description: 'Receive comprehensive insights and actionable recommendations based on your financial data.',
        icon: LightBulbIcon,
        features: [
          'Visual reports',
          'Actionable recommendations',
          'Export capabilities'
        ]
      }
    ]

    return {
      steps,
      activeStep
    }
  }
}
</script>

<style scoped>
/* Add any additional custom styles here */
.from-primary {
  --tw-gradient-from: #4F46E5;
}

.to-secondary {
  --tw-gradient-to: #10B981;
}
</style> 