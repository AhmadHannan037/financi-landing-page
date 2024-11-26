<template>
  <section class="py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-8">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <h2 class="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Trusted by Financial Professionals
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          See how Financi is transforming financial analysis for businesses worldwide
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300
                 border border-gray-100 hover:border-primary/20 group"
        >
          <!-- Quote Icon -->
          <div class="text-primary/20 mb-6">
            <ChatBubbleOvalLeftEllipsisIcon class="w-12 h-12" />
          </div>

          <!-- Testimonial Content -->
          <p class="text-gray-600 mb-6 leading-relaxed">
            "{{ testimonial.quote }}"
          </p>

          <!-- Author Info -->
          <div class="flex items-center">
            <img 
              :src="testimonial.avatar" 
              :alt="testimonial.name"
              class="w-12 h-12 rounded-full object-cover mr-4"
            >
            <div>
              <h4 class="font-bold text-gray-900">{{ testimonial.name }}</h4>
              <p class="text-sm text-gray-500">{{ testimonial.role }}</p>
            </div>
          </div>

          <!-- Company Logo -->
          <img 
            :src="testimonial.companyLogo" 
            :alt="testimonial.company"
            class="h-8 mt-6 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
          >
        </div>
      </div>

      <!-- Trust Indicators -->
      <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div 
          v-for="(stat, index) in trustStats" 
          :key="index"
          class="text-center"
        >
          <div class="text-4xl font-bold text-primary mb-2">
            {{ stat.value }}
          </div>
          <p class="text-gray-600">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/vue/24/outline'

export default {
  name: 'TestimonialsSection',
  components: {
    ChatBubbleOvalLeftEllipsisIcon
  },
  setup() {
    const testimonials = [
      {
        quote: 'Financi has revolutionized how we handle financial analysis. What used to take days now takes minutes.',
        name: 'Sarah Johnson',
        role: 'CFO at TechCorp',
        avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
        company: 'TechCorp',
        companyLogo: 'https://placehold.co/200x50/4F46E5/ffffff?text=TechCorp'
      },
      {
        quote: 'The AI-powered insights have helped us identify opportunities we would have otherwise missed.',
        name: 'Michael Chen',
        role: 'Financial Analyst',
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
        company: 'InvestCo',
        companyLogo: 'https://placehold.co/200x50/4F46E5/ffffff?text=InvestCo'
      },
      {
        quote: 'Implementing Financi was seamless. The ROI was evident within the first month of use.',
        name: 'Emma Davis',
        role: 'Head of Finance',
        avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
        company: 'GrowthFin',
        companyLogo: 'https://placehold.co/200x50/4F46E5/ffffff?text=GrowthFin'
      }
    ]

    const trustStats = [
      { value: '500+', label: 'Companies Using Financi' },
      { value: '98%', label: 'Customer Satisfaction' },
      { value: '$2M+', label: 'Customer Savings' },
      { value: '24/7', label: 'Support Available' }
    ]

    return {
      testimonials,
      trustStats
    }
  }
}
</script> 