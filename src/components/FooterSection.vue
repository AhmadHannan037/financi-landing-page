<template>
  <footer class="bg-gray-900 text-gray-300">
    <!-- Main Footer -->
    <div class="max-w-7xl mx-auto px-8 pt-20 pb-12">
      <div class="grid grid-cols-2 md:grid-cols-6 gap-8 mb-20">
        <!-- Brand Column -->
        <div class="col-span-2">
          <div class="text-2xl font-bold text-white mb-4">Financi</div>
          <p class="text-gray-400 mb-6 leading-relaxed">
            Transforming financial analysis with AI-powered automation and insights.
          </p>
          <!-- Social Links -->
          <div class="flex space-x-4">
            <a 
              v-for="social in socials" 
              :key="social.name"
              :href="social.url"
              class="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <component :is="social.icon" class="w-6 h-6" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="col-span-1">
          <h3 class="text-white font-semibold mb-4">Product</h3>
          <ul class="space-y-3">
            <li v-for="link in productLinks" :key="link.name">
              <a 
                :href="link.url"
                class="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Company Links -->
        <div class="col-span-1">
          <h3 class="text-white font-semibold mb-4">Company</h3>
          <ul class="space-y-3">
            <li v-for="link in companyLinks" :key="link.name">
              <a 
                :href="link.url"
                class="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Resources Links -->
        <div class="col-span-1">
          <h3 class="text-white font-semibold mb-4">Resources</h3>
          <ul class="space-y-3">
            <li v-for="link in resourceLinks" :key="link.name">
              <a 
                :href="link.url"
                class="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div class="col-span-2 md:col-span-1">
          <h3 class="text-white font-semibold mb-4">Stay Updated</h3>
          <p class="text-gray-400 mb-4">
            Subscribe to our newsletter for the latest updates and insights.
          </p>
          <form @submit.prevent="handleSubmit" class="space-y-3">
            <div class="relative">
              <input 
                v-model="formData.email"
                type="email" 
                placeholder="Enter your email"
                class="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 
                       text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                :class="{ 'border-red-500': formErrors.email }"
                required
              >
              <p v-if="formErrors.email" class="absolute -bottom-6 left-0 text-red-500 text-sm">
                {{ formErrors.email }}
              </p>
            </div>
            <button 
              type="submit"
              class="w-full px-4 py-2 rounded-lg bg-primary text-white font-semibold
                     hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
              :disabled="isSubmitting"
            >
              <span v-if="!isSubmitting">Subscribe</span>
              <span v-else class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Subscribing...
              </span>
            </button>
          </form>
          <div v-if="submitSuccess" class="mt-3 text-green-500 text-sm">
            Thank you for subscribing!
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
        <div class="text-gray-400 mb-4 md:mb-0">
          © {{ new Date().getFullYear() }} Financi. All rights reserved.
        </div>
        <div class="flex space-x-6">
          <a 
            v-for="link in legalLinks" 
            :key="link.name"
            :href="link.url"
            class="text-gray-400 hover:text-white transition-colors duration-300"
          >
            {{ link.name }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref, reactive } from 'vue'
import {
  GlobeAltIcon,
  ChatBubbleLeftIcon,
  DocumentTextIcon
} from '@heroicons/vue/24/outline'

export default {
  name: 'FooterSection',
  components: {
    GlobeAltIcon,
    ChatBubbleLeftIcon,
    DocumentTextIcon
  },
  setup() {
    const formData = reactive({
      email: ''
    })
    
    const formErrors = reactive({
      email: ''
    })
    
    const isSubmitting = ref(false)
    const submitSuccess = ref(false)

    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return re.test(email)
    }

    const handleSubmit = async () => {
      // Reset errors and status
      formErrors.email = ''
      submitSuccess.value = false
      
      // Validate email
      if (!formData.email) {
        formErrors.email = 'Email is required'
        return
      }
      
      if (!validateEmail(formData.email)) {
        formErrors.email = 'Please enter a valid email address'
        return
      }

      try {
        isSubmitting.value = true
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        // Success
        submitSuccess.value = true
        formData.email = ''
        
        // Hide success message after 3 seconds
        setTimeout(() => {
          submitSuccess.value = false
        }, 3000)
      } catch (error) {
        formErrors.email = 'Failed to subscribe. Please try again.'
      } finally {
        isSubmitting.value = false
      }
    }

    const socials = [
      {
        name: 'Twitter',
        url: '#',
        icon: 'GlobeAltIcon'
      },
      {
        name: 'LinkedIn',
        url: '#',
        icon: 'ChatBubbleLeftIcon'
      },
      {
        name: 'GitHub',
        url: '#',
        icon: 'DocumentTextIcon'
      }
    ]

    const productLinks = [
      { name: 'Features', url: '#' },
      { name: 'Pricing', url: '#' },
      { name: 'Security', url: '#' },
      { name: 'API', url: '#' }
    ]

    const companyLinks = [
      { name: 'About', url: '#' },
      { name: 'Careers', url: '#' },
      { name: 'Blog', url: '#' },
      { name: 'Contact', url: '#' }
    ]

    const resourceLinks = [
      { name: 'Documentation', url: '#' },
      { name: 'Help Center', url: '#' },
      { name: 'Guides', url: '#' },
      { name: 'Webinars', url: '#' }
    ]

    const legalLinks = [
      { name: 'Privacy Policy', url: '#' },
      { name: 'Terms of Service', url: '#' },
      { name: 'Cookie Policy', url: '#' }
    ]

    return {
      formData,
      formErrors,
      isSubmitting,
      submitSuccess,
      handleSubmit,
      socials,
      productLinks,
      companyLinks,
      resourceLinks,
      legalLinks
    }
  }
}
</script> 