import Alpine from 'alpinejs'

window.Alpine = Alpine

if('geolocation' in navigator) {
  /* geolocation is available */
  console.log('avail')
} else {
  /* geolocation IS NOT available */
  console.log('not avail')
}

// Start Alpine when the page is ready.
window.addEventListener('DOMContentLoaded', () => {
  Alpine.start()
});

// Basic Store Example in Alpine.
window.addEventListener('alpine:initializing', () => {
  Alpine.store('nav', {
    isOpen: false,
    close() { return this.isOpen = false },
    open() { return this.isOpen = true },
    toggle() { return this.isOpen = !this.isOpen }
  })
});
