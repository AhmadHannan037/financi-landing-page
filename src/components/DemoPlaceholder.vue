<template>
  <svg
    class="w-full h-full"
    viewBox="0 0 800 450"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Background Pattern -->
    <pattern id="demo-grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path
        d="M 40 0 L 0 0 0 40"
        fill="none"
        stroke="#f0f0f0"
        stroke-width="1"
      />
    </pattern>
    <rect width="100%" height="100%" fill="url(#demo-grid)" />

    <!-- Dashboard Elements -->
    <!-- Header Bar -->
    <rect x="40" y="30" width="720" height="60" rx="8" fill="#F3F4F6" />
    <circle cx="80" cy="60" r="15" fill="#4F46E5" opacity="0.2" />
    <rect x="120" y="50" width="120" height="20" rx="4" fill="#4F46E5" opacity="0.1" />

    <!-- Main Content -->
    <!-- Chart Area -->
    <rect x="40" y="110" width="460" height="300" rx="8" fill="white" stroke="#E5E7EB" />
    <path
      :d="chartPath"
      stroke="#4F46E5"
      stroke-width="3"
      fill="none"
      class="chart-line"
    />
    <path
      :d="chartPath"
      stroke="url(#chart-gradient)"
      stroke-width="3"
      fill="none"
      class="chart-line-animated"
    >
      <animate
        attributeName="stroke-dashoffset"
        from="1000"
        to="0"
        dur="2s"
        repeatCount="indefinite"
      />
    </path>

    <!-- Sidebar -->
    <rect x="520" y="110" width="240" height="300" rx="8" fill="white" stroke="#E5E7EB" />
    <template v-for="(item, index) in 4" :key="index">
      <rect
        :x="540"
        :y="130 + index * 70"
        width="200"
        height="50"
        rx="6"
        fill="#F3F4F6"
      />
      <rect
        :x="555"
        :y="145 + index * 70"
        width="80"
        height="8"
        rx="2"
        fill="#4F46E5"
        opacity="0.2"
      />
      <rect
        :x="555"
        :y="157 + index * 70"
        width="120"
        height="8"
        rx="2"
        fill="#E5E7EB"
      />
    </template>

    <!-- Gradient Definitions -->
    <defs>
      <linearGradient id="chart-gradient" x1="0" y1="0" x2="100%" y2="0">
        <stop offset="0%" stop-color="#4F46E5" />
        <stop offset="100%" stop-color="#10B981" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script>
export default {
  name: 'DemoPlaceholder',
  computed: {
    chartPath() {
      // Generate smooth curve path
      const points = Array.from({ length: 10 }, (_, i) => ({
        x: 60 + i * 45,
        y: 250 + Math.sin(i * 0.5) * 50 + Math.random() * 30,
      }))
      
      return `M ${points.map(p => `${p.x},${p.y}`).join(' L ')}`
    }
  }
}
</script>

<style scoped>
.chart-line {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: dash 2s linear forwards;
}

.chart-line-animated {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
</style> 