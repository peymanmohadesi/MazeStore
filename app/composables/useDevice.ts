export const useDevice = () => {
  const isMobile = ref(false)

  const updateDevice = () => {
    isMobile.value = window.innerWidth < 768
  }

  onMounted(() => {
    updateDevice()
    window.addEventListener('resize', updateDevice)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateDevice)
  })

  return {
    isMobile
  }
}