<template>
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-8">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <h2 class="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Common Financial Analysis Challenges
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Traditional financial analysis is time-consuming and prone to errors
        </p>
      </div>

      <!-- Problems Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(problem, index) in problems" 
          :key="index"
          class="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300
                 border border-gray-100 hover:border-primary/20 group"
        >
          <div class="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
            <component :is="problem.icon" class="w-12 h-12" />
          </div>
          <h3 class="text-xl font-bold mb-4 text-gray-900">
            {{ problem.title }}
          </h3>
          <p class="text-gray-600 leading-relaxed">
            {{ problem.description }}
          </p>
          <div class="mt-6 flex items-center text-primary">
            <span class="text-sm font-semibold">{{ problem.stat }}</span>
            <ArrowTrendingUpIcon class="w-4 h-4 ml-2" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { 
  ClockIcon, 
  ExclamationTriangleIcon,
  DocumentDuplicateIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ArrowTrendingUpIcon
} from '@heroicons/vue/24/outline'

export default {
  name: 'ProblemSection',
  components: {
    ClockIcon,
    ExclamationTriangleIcon,
    DocumentDuplicateIcon,
    CurrencyDollarIcon,
    UserGroupIcon,
    ArrowTrendingUpIcon
  },
  setup() {
    const problems = [
      {
        title: 'Time-Consuming Process',
        description: 'Manual financial analysis can take days or weeks, delaying critical business decisions.',
        icon: ClockIcon,
        stat: '68% time reduction with AI'
      },
      {
        title: 'Human Error Risk',
        description: 'Manual data entry and analysis are susceptible to mistakes that can cost businesses.',
        icon: ExclamationTriangleIcon,
        stat: '99.9% accuracy rate'
      },
      {
        title: 'Data Overload',
        description: 'Managing multiple financial documents and sources can be overwhelming.',
        icon: DocumentDuplicateIcon,
        stat: 'Process 1000s of pages instantly'
      },
      {
        title: 'High Costs',
        description: 'Traditional financial analysis requires expensive software and skilled professionals.',
        icon: CurrencyDollarIcon,
        stat: '75% cost reduction'
      },
      {
        title: 'Limited Insights',
        description: 'Manual analysis often misses hidden patterns and opportunities in financial data.',
        icon: UserGroupIcon,
        stat: '3x more insights discovered'
      }
    ]

    return {
      problems
    }
  }
}
</script> 