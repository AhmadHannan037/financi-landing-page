<template>
  <div class="logo-container" :style="{ width, height }">
    <svg 
      viewBox="0 0 180 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      :class="className"
    >
      <!-- Main Icon -->
      <g class="logo-icon">
        <!-- Chart Lines -->
        <path 
          d="M12 28L20 20L28 24L36 16"
          stroke="url(#gradient-primary)"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="animate-draw"
        />
        
        <!-- AI Circuit Elements -->
        <circle 
          cx="20" 
          cy="20" 
          r="2.5" 
          fill="url(#gradient-secondary)"
          class="animate-pulse"
        />
        <circle 
          cx="28" 
          cy="24" 
          r="2.5" 
          fill="url(#gradient-secondary)"
          class="animate-pulse delay-100"
        />
        
        <!-- Connecting Lines -->
        <path 
          d="M20 20L28 24M28 24L36 20"
          stroke="url(#gradient-secondary)"
          stroke-width="1.5"
          stroke-dasharray="2 2"
          class="animate-dash"
        />
      </g>

      <!-- Logo Text -->
      <text 
        x="50" 
        y="28" 
        class="text-2xl font-bold"
        fill="currentColor"
      >
        Financi
      </text>

      <!-- Gradients -->
      <defs>
        <linearGradient id="gradient-primary" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color: #4F46E5" />
          <stop offset="100%" style="stop-color: #10B981" />
        </linearGradient>
        <linearGradient id="gradient-secondary" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color: #10B981" />
          <stop offset="100%" style="stop-color: #4F46E5" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'FinanciLogo',
  props: {
    width: {
      type: String,
      default: '180px'
    },
    height: {
      type: String,
      default: '40px'
    },
    className: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.animate-draw {
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: draw 1.5s ease-out forwards;
}

.animate-dash {
  animation: dash 15s linear infinite;
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes dash {
  to {
    stroke-dashoffset: -100;
  }
}

.delay-100 {
  animation-delay: 100ms;
}

.logo-container svg {
  width: 100%;
  height: 100%;
}
</style> 