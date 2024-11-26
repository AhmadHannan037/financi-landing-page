<template>
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Background -->
    <rect width="32" height="32" rx="8" fill="#4F46E5" />
    
    <!-- Chart Lines -->
    <path 
      d="M8 22L13 16L19 19L24 12"
      stroke="#FFFFFF"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    
    <!-- AI Circuit Elements -->
    <circle 
      cx="13" 
      cy="16" 
      r="2" 
      fill="#10B981"
    />
    <circle 
      cx="19" 
      cy="19" 
      r="2" 
      fill="#10B981"
    />
    
    <!-- Connecting Lines -->
    <path 
      d="M13 16L19 19M19 19L24 16"
      stroke="#10B981"
      stroke-width="1.5"
      stroke-dasharray="2 2"
    />
  </svg>
</template>

<script>
export default {
  name: 'FaviconSvg'
}
</script> 