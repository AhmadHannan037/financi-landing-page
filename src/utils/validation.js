export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export const validateForm = (data) => {
  const errors = {}
  
  if (!data.email) {
    errors.email = 'Email is required'
  } else if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email'
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
} 