import { ref, onMounted, onUnmounted } from 'vue'
import type { Ref } from 'vue'

export function useTypewriter(texts: Ref<string[]>) {
  const displayText = ref('')
  const isFading = ref(false)

  let textIndex = 0
  let charIndex = 0
  let isDeleting = false
  let timeoutId: ReturnType<typeof setTimeout>

  function run() {
    if (!texts.value.length) return

    const currentText = texts.value[textIndex]!

    displayText.value = isDeleting
      ? currentText.substring(0, charIndex--)
      : currentText.substring(0, charIndex++)

    let speed = isDeleting ? 50 : 100

    if (!isDeleting && charIndex === currentText.length) {
      speed = 1200
      isDeleting = true
    } else if (isDeleting && charIndex === 0) {
      isFading.value = true

      setTimeout(() => {
        isDeleting = false
        textIndex = (textIndex + 1) % texts.value.length
        isFading.value = false
      }, 200)

      speed = 200
    }

    timeoutId = setTimeout(run, speed)
  }

  function start() {
    run()
  }

  function stop() {
    clearTimeout(timeoutId)
  }

  onMounted(() => setTimeout(start, 500))
  onUnmounted(stop)

  return { displayText, isFading, start, stop }
}