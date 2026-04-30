<template>
  <section id="experience" :class="isMobile ? 'section column' : 'section column timeline'">
    <div
      v-for="(exp, index) in reversedExperiences" :key="exp.id"
      class="timeline-item"
      :class="[
        index % 2 === 0 ? 'left' : 'right',
        { show: visible[index] }
      ]" :style="{ transitionDelay: `${index * 0.15}s` }" ref="items">

      <div v-if="!isMobile" class="timeline-dot" :class="{ current: exp.current }"></div>

      <div class="exp-card cursor-pointer" :class="{ current: exp.current }" @click="openLink(exp.link)">
        <div class="header">
          <div class="left-content">
            <img :src="getLogo(exp.logo)" class="logo" />

            <div>
              <div class="company">{{ exp.company }}</div>
              <div class="role">{{ exp.role }}</div>
            </div>
          </div>

          <span v-if="exp.current" class="badge">Atual</span>
        </div>

        <ul class="description">
          <li v-for="(item, i) in exp.description" :key="i">
            {{ item }}
          </li>
        </ul>

        <div class="period">{{ exp.period }}</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, nextTick, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useQuasar } from 'quasar'

interface Experience {
  id: number
  company: string
  role: string
  period: string
  description: string[]
  logo: string
  link?: string
  current?: boolean
}

const props = defineProps<{
  experiences: Experience[]
}>()

const quasar = useQuasar()
const isMobile = computed(() => quasar.screen.lt.md)
const i18n = useI18n()
const items = ref<HTMLElement[]>([])
const visible = ref<boolean[]>([])
const lineHeight = ref('100%')

const getLogo = (logo: string): string =>
  new URL(`../assets/${logo}`, import.meta.url).href

const openLink = (link?: string): void => {
  if (!link) return
  window.open(link, '_blank')
}

const reversedExperiences = computed(() => {
  return [...props.experiences].sort((a, b) => b.id - a.id)
})

const calculateLineHeight = async () => {
  await nextTick()

  if (items.value.length === 0) return

  const lastItem = items.value[items.value.length - 1]

  if (!lastItem) return

  const itemHeight = lastItem.offsetHeight
  const itemTop = lastItem.offsetTop

  lineHeight.value = `${(itemTop + itemHeight / 2) * 0.95}px`
}

watch(() => i18n.locale.value, () => {
  void calculateLineHeight()
})

watch(() => props.experiences, () => {
  void calculateLineHeight()
}, { deep: true })

onMounted(async () => {
  visible.value = new Array(items.value.length).fill(false)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = items.value.indexOf(entry.target as HTMLElement)
        if (entry.isIntersecting && index !== -1) {
          visible.value[index] = true
        }
      })
    },
    { threshold: 0.2 }
  )

  items.value.forEach((el) => observer.observe(el))

  await calculateLineHeight()
})
</script>

<style scoped>
.timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  height: v-bind(lineHeight);
 background: var(--color-timeline);
}

.timeline-item {
  position: relative;
  width: 50%;
  padding: 20px 40px;
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.6s ease;
}

.timeline-item.show {
  opacity: 1;
  transform: translateY(0);
}

.timeline-item.left {
  left: 0;
}

.timeline-item.right {
  left: 50%;
}

.timeline-line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
}

.timeline-dot {
  position: absolute;
  top: 50%;
  transform: translateX(-50%);
  width: 14px;
  height: 14px;
  background: var(--q-primary);
  border-radius: 50%;
}

.timeline-item.left .timeline-dot {
  left: calc(100%);
}

.timeline-item.right .timeline-dot {
  left: 0px;
}

.timeline-dot.current {
  background: #2ecc71;
  width: 16px;
  height: 16px;
}

.exp-card {
  background: var(--background-card, #eeeeee);
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  transition: 0.3s;
  text-align: left;
}

.exp-card:hover {
  transform: translateY(-5px);
}

.exp-card.current {
  border: 2px solid var(--q-primary);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.left-content {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo {
  width: 35px;
  height: 35px;
}

.company {
  font-weight: bold;
}

.role {
  font-size: 0.85rem;
  color: var(--color-sub-texts, gray);
}

.badge {
  background: #2ecc71;
  color: white;
  padding: 3px 8px;
  border-radius: 8px;
  font-size: 12px;
}

.description {
  padding-left: 16px;
}

.period {
  margin-top: 10px;
  font-size: 12px;
  color: var(--color-sub-texts, gray);
}

@media (max-width: 768px) {
  .timeline::before {
    left: 10px;
  }

  .timeline-item {
    width: 100%;
    padding-left: 40px;
    text-align: left;
  }

  .timeline-item.right {
    left: 0;
  }

  .timeline-dot {
    left: 10px;
  }
}
</style>