/**
 * @component PricingSection
 * @description Displays pricing plans with monthly/annual toggle and feature comparison
 * 
 * Features:
 * - Monthly/Annual pricing toggle
 * - Free tier option
 * - Popular plan highlighting
 * - Responsive grid layout
 * - Interactive hover states
 * - Feature list for each plan
 * 
 * Usage:
 * ```vue
 * <PricingSection />
 * ```
 * 
 * Dependencies:
 * - @heroicons/vue for icons
 * - Tailwind CSS for styling
 */

<template>
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-8">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <h2 class="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Simple, Transparent Pricing
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose the perfect plan for your business needs
        </p>
      </div>

      <!-- Pricing Toggle -->
      <div class="flex justify-center items-center mb-12 gap-4">
        <span :class="[!isAnnual ? 'text-primary' : 'text-gray-500']">Monthly</span>
        <button 
          @click="isAnnual = !isAnnual"
          class="relative w-16 h-8 rounded-full bg-primary/20 flex items-center px-1"
        >
          <div 
            class="w-6 h-6 rounded-full bg-primary transition-transform duration-300"
            :class="{ 'translate-x-8': isAnnual }"
          ></div>
        </button>
        <span :class="[isAnnual ? 'text-primary' : 'text-gray-500']">
          Annual
          <span class="text-sm text-green-500 ml-1">Save 20%</span>
        </span>
      </div>

      <!-- Pricing Cards -->
      <div class="grid md:grid-cols-4 gap-8">
        <!-- Free Tier -->
        <div 
          class="relative bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300
                 border-2 border-gray-100"
        >
          <!-- Plan Header -->
          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">
              Free
            </h3>
            <div class="flex justify-center items-baseline mb-4">
              <span class="text-4xl font-extrabold text-gray-900">
                $0
              </span>
              <span class="text-gray-500 ml-2">/month</span>
            </div>
            <p class="text-gray-600">Perfect for trying out</p>
          </div>

          <!-- Features List -->
          <ul class="space-y-4 mb-8">
            <li class="flex items-center text-gray-600">
              <CheckCircleIcon class="w-5 h-5 text-green-500 mr-2" />
              1 document/month
            </li>
            <li class="flex items-center text-gray-600">
              <CheckCircleIcon class="w-5 h-5 text-green-500 mr-2" />
              Up to 5 pages
            </li>
            <li class="flex items-center text-gray-600">
              <CheckCircleIcon class="w-5 h-5 text-green-500 mr-2" />
              Basic insights
            </li>
            <li class="flex items-center text-gray-600">
              <CheckCircleIcon class="w-5 h-5 text-green-500 mr-2" />
              Community support
            </li>
          </ul>

          <!-- CTA Button -->
          <button 
            class="w-full py-3 rounded-lg text-lg font-semibold transition-all duration-300
                   hover:-translate-y-0.5 hover:shadow-lg border-2 border-primary text-primary"
          >
            Start Free
          </button>
        </div>

        <!-- Other pricing tiers -->
        <div 
          v-for="(plan, index) in plans" 
          :key="index"
          class="relative bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300
                 border-2"
          :class="[
            plan.popular 
              ? 'border-primary shadow-lg scale-105 md:scale-110' 
              : 'border-gray-100'
          ]"
        >
          <!-- Popular Badge -->
          <div 
            v-if="plan.popular"
            class="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white
                   px-4 py-1 rounded-full text-sm font-semibold"
          >
            Most Popular
          </div>

          <!-- Plan Header -->
          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">
              {{ plan.name }}
            </h3>
            <div class="flex justify-center items-baseline mb-4">
              <span class="text-4xl font-extrabold text-gray-900">
                ${{ isAnnual ? plan.annualPrice : plan.monthlyPrice }}
              </span>
              <span class="text-gray-500 ml-2">/month</span>
            </div>
            <p class="text-gray-600">{{ plan.description }}</p>
          </div>

          <!-- Features List -->
          <ul class="space-y-4 mb-8">
            <li 
              v-for="(feature, fIndex) in plan.features" 
              :key="fIndex"
              class="flex items-center text-gray-600"
            >
              <CheckCircleIcon class="w-5 h-5 text-green-500 mr-2" />
              {{ feature }}
            </li>
          </ul>

          <!-- CTA Button -->
          <button 
            class="w-full py-3 rounded-lg text-lg font-semibold transition-all duration-300
                   hover:-translate-y-0.5 hover:shadow-lg"
            :class="[
              plan.popular 
                ? 'bg-primary text-white' 
                : 'border-2 border-primary text-primary'
            ]"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import { CheckCircleIcon } from '@heroicons/vue/24/outline'

export default {
  name: 'PricingSection',
  components: {
    CheckCircleIcon
  },
  setup() {
    /**
     * @var {ref} isAnnual - Controls monthly/annual pricing display
     */
    const isAnnual = ref(false)

    /**
     * @const {Array} plans - Pricing plan configurations
     * @property {string} name - Plan name
     * @property {number} monthlyPrice - Monthly price in dollars
     * @property {number} annualPrice - Annual price in dollars (monthly equivalent)
     * @property {string} description - Plan description
     * @property {boolean} [popular] - Whether this is the featured plan
     * @property {string[]} features - List of plan features
     */
    const plans = [
      {
        name: 'Starter',
        monthlyPrice: 49,
        annualPrice: 39,
        description: 'Perfect for small businesses',
        features: [
          'Up to 100 documents/month',
          'Basic financial insights',
          'Email support',
          'Export to PDF'
        ]
      },
      {
        name: 'Professional',
        monthlyPrice: 99,
        annualPrice: 79,
        description: 'For growing companies',
        popular: true,
        features: [
          'Up to 1000 documents/month',
          'Advanced AI insights',
          'Priority support',
          'Custom reports',
          'API access',
          'Team collaboration'
        ]
      },
      {
        name: 'Enterprise',
        monthlyPrice: 199,
        annualPrice: 159,
        description: 'For large organizations',
        features: [
          'Unlimited documents',
          'Custom AI models',
          '24/7 dedicated support',
          'White-label reports',
          'Advanced API access',
          'Custom integrations'
        ]
      }
    ]

    return {
      isAnnual,
      plans
    }
  }
}
</script> 