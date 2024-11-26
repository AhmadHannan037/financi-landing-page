export const trackScroll = () => {
  let ticking = false
  let lastScrollY = 0

  const sections = [
    'hero',
    'problems',
    'solutions',
    'how-it-works',
    'testimonials',
    'pricing'
  ]

  const onScroll = () => {
    lastScrollY = window.scrollY

    if (!ticking) {
      window.requestAnimationFrame(() => {
        sections.forEach(section => {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
              // Track section view
              console.log(`Viewed section: ${section}`)
              // Add your analytics tracking here
            }
          }
        })
        ticking = false
      })

      ticking = true
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true })
} 