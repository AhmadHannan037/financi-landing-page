<template>
  <svg
    class="financial-animation"
    viewBox="0 0 800 400"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Background Grid -->
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path
        d="M 40 0 L 0 0 0 40"
        fill="none"
        stroke="#f0f0f0"
        stroke-width="1"
      />
    </pattern>
    <rect width="100%" height="100%" fill="url(#grid)" />

    <!-- Line Chart -->
    <path
      :d="lineChartPath"
      fill="none"
      stroke="#4F46E5"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="line-chart"
    >
      <animate
        attributeName="stroke-dashoffset"
        from="1000"
        to="0"
        dur="2s"
        repeatCount="indefinite"
      />
    </path>

    <!-- Bar Chart -->
    <g class="bar-chart">
      <template v-for="(bar, index) in bars" :key="index">
        <rect
          :x="bar.x"
          :y="bar.y"
          :width="bar.width"
          :height="bar.height"
          :fill="bar.color"
          class="bar"
        >
          <animate
            attributeName="height"
            from="0"
            :to="bar.height"
            dur="1s"
            :begin="`${index * 0.1}s`"
            fill="freeze"
          />
        </rect>
      </template>
    </g>

    <!-- Insight Circles -->
    <g class="insights">
      <template v-for="(insight, index) in insights" :key="index">
        <circle
          :cx="insight.x"
          :cy="insight.y"
          :r="insight.radius"
          :fill="insight.color"
          class="insight-point"
        >
          <animate
            attributeName="r"
            from="0"
            :to="insight.radius"
            dur="0.5s"
            :begin="`${index * 0.2}s`"
            fill="freeze"
          />
        </circle>
      </template>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'HeaderAnimation',
  data() {
    return {
      lineChartPath: this.generateLinePath(),
      bars: this.generateBars(),
      insights: this.generateInsights(),
    }
  },
  methods: {
    generateLinePath() {
      // Generate smooth line chart path
      const points = Array.from({ length: 10 }, (_, i) => ({
        x: 80 + i * 80,
        y: 200 + Math.sin(i * 0.5) * 50 + Math.random() * 30,
      }))
      
      return `M ${points.map(p => `${p.x},${p.y}`).join(' L ')}`
    },
    generateBars() {
      // Generate animated bar chart data
      return Array.from({ length: 6 }, (_, i) => ({
        x: 100 + i * 60,
        y: 300,
        width: 40,
        height: -(100 + Math.random() * 100),
        color: `rgba(79, 70, 229, ${0.4 + i * 0.1})`,
      }))
    },
    generateInsights() {
      // Generate insight points
      return Array.from({ length: 5 }, (_, i) => ({
        x: 150 + i * 120,
        y: 150 + Math.random() * 100,
        radius: 8,
        color: '#10B981',
      }))
    },
  },
}
</script>

<style scoped>
.financial-animation {
  width: 100%;
  height: auto;
  max-width: 800px;
}

.line-chart {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: dash 2s linear forwards;
}

.bar {
  transform-origin: bottom;
  transition: all 0.3s ease;
}

.bar:hover {
  filter: brightness(1.1);
  transform: scaleY(1.05);
}

.insight-point {
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
  transition: all 0.3s ease;
}

.insight-point:hover {
  filter: drop-shadow(0 8px 12px rgba(0, 0, 0, 0.2));
  transform: scale(1.2);
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
</style> 