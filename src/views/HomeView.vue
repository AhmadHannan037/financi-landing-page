<template>
  <ErrorBoundary>
    <div class="home">
      <!-- Navigation -->
      <NavBar />

      <!-- Hero Section -->
      <header class="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-32 min-h-[90vh] mt-20 gap-8 sm:gap-12">
        <div class="flex-1 max-w-2xl text-left">
          <h1 class="text-5xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Simplify Financial Analysis with AI
          </h1>
          <p class="text-xl leading-relaxed text-gray-600 mb-8">
            Upload financial documents, extract insights, and make informed decisions in minutes with Financi - your AI-powered financial analyst.
          </p>
          <div class="flex gap-4">
            <button class="px-6 py-3 rounded-lg text-lg font-semibold bg-primary text-white hover:-translate-y-0.5 hover:shadow-lg transition-all">
              Try for Free
            </button>
            <button class="px-6 py-3 rounded-lg text-lg font-semibold text-primary border-2 border-primary hover:-translate-y-0.5 hover:shadow-lg transition-all">
              Watch Demo
            </button>
          </div>
        </div>
        <div class="flex-1 max-w-xl w-full">
          <HeaderVideo />
        </div>
      </header>

      <!-- Main Content -->
      <main>
        <ProblemSection id="features" />
        <SolutionSection id="solution" />
        <HowItWorksSection id="how-it-works" />
        <TestimonialsSection id="testimonials" />
        <PricingSection id="pricing" />
      </main>

      <!-- Footer -->
      <FooterSection />
    </div>
  </ErrorBoundary>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import HeaderVideo from '@/components/HeaderVideo.vue'
import ProblemSection from '@/components/ProblemSection.vue'
import SolutionSection from '@/components/SolutionSection.vue'
import HowItWorksSection from '@/components/HowItWorksSection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import PricingSection from '@/components/PricingSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import ErrorBoundary from '@/components/ErrorBoundary.vue'

export default {
  name: 'HomeView',
  components: {
    ErrorBoundary,
    NavBar,
    HeaderVideo,
    ProblemSection,
    SolutionSection,
    HowItWorksSection,
    TestimonialsSection,
    PricingSection,
    FooterSection
  }
}
</script>

<style>
.home {
  overflow-x: hidden;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px; /* Accounts for fixed navbar */
}

.text-gradient {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
</style>
