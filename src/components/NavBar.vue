/**
 * @component NavBar
 * @description Main navigation component for the application
 * 
 * Features:
 * - Responsive design with mobile menu
 * - Smooth scroll navigation
 * - Fixed positioning with blur effect
 * - Animated transitions
 * - Accessibility compliant
 * 
 * @example
 * ```vue
 * <NavBar />
 * ```
 */

<template>
  <nav aria-label="Main navigation" role="navigation" class="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg z-50 border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="#" class="block">
            <FinanciLogo class="h-8 w-auto" />
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a 
            v-for="item in navItems" 
            :key="item.name"
            :href="item.href"
            class="text-gray-600 hover:text-primary transition-colors duration-300"
          >
            {{ item.name }}
          </a>
        </div>

        <!-- CTA Buttons -->
        <div class="hidden md:flex items-center space-x-4">
          <button class="text-primary font-semibold hover:text-primary/80 transition-colors duration-300">
            Sign In
          </button>
          <button class="px-4 py-2 rounded-lg bg-primary text-white font-semibold hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
            Get Started
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button 
            aria-label="Toggle mobile menu"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="text-gray-600 hover:text-primary transition-colors duration-300"
          >
            <Bars3Icon v-if="!isMobileMenuOpen" class="w-6 h-6" />
            <XMarkIcon v-else class="w-6 h-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-show="isMobileMenuOpen"
        class="md:hidden"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a
            v-for="item in navItems"
            :key="item.name"
            :href="item.href"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-all duration-300"
            @click="isMobileMenuOpen = false"
          >
            {{ item.name }}
          </a>
          <div class="mt-4 space-y-2">
            <button class="w-full px-3 py-2 text-primary font-semibold hover:bg-gray-50 rounded-md transition-all duration-300">
              Sign In
            </button>
            <button class="w-full px-3 py-2 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import FinanciLogo from './FinanciLogo.vue'

export default {
  name: 'NavBar',
  components: {
    Bars3Icon,
    XMarkIcon,
    FinanciLogo
  },
  setup() {
    const isMobileMenuOpen = ref(false)

    const navItems = [
      { name: 'Features', href: '#features' },
      { name: 'How it Works', href: '#how-it-works' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Pricing', href: '#pricing' }
    ]

    return {
      isMobileMenuOpen,
      navItems
    }
  }
}
</script> 