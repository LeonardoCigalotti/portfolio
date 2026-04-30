<template>
    <section id="hero" class="section">
        <div class="row items-center justify-center full-width no-wrap">

        <div class="col-12 col-md-4 flex flex-center q-mb-lg q-mb-md-none">
          <q-img src="../assets/me.jpg" class="profile-img-page" />
        </div>

        <div class="col-12 col-md-6 text-center text-md-left">

          <div class="text-h3 text-weight-bold q-mb-sm"> Leonardo Cigalotti</div>

          <div class="text-h5 text-primary q-mb-md fade-text" :class="{ fade: isFading }">
            {{ displayText }}<span class="cursor">|</span>
          </div>

          <div class="row q-gutter-md justify-center justify-md-start">
            <q-btn color="primary" unelevated rounded icon-right="arrow_forward" :label="$t('project')" @click="scrollToSection('project')" />
            <q-btn outline color="primary" :label="$t('contact')" rounded @click="scrollToSection('contact')" />
          </div>

        </div>

      </div>
    </section>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
import { useI18n } from 'vue-i18n'
import { useTypewriter } from 'src/composables/useTypewriter';

const i18n = useI18n()
const t = i18n.t

function scrollToSection(id: string): void {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth'
  })
}

const texts = computed<string[]>(() => [
  t('hero.dev'),
  t('hero.junior'),
  t('hero.refactor'),
  t('hero.modern')
])

const { displayText, isFading, start, stop } = useTypewriter(texts)

watch(texts, () => {
  stop()
  start()
})
</script>

<style scoped>
#hero .row {
  max-width: 100%;
  padding: 0 16px;
}

.profile-img-page {
  width: 100%;
  max-width: 500px;
  height: auto;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 2px solid rgba(0,0,0,0.1);
  object-fit: cover;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  transition: transform 0.4s ease;
}

@media (max-width: 1023px) {
  .profile-img-page {
    max-width: 280px;
  }
}

@media (min-width: 600px) and (max-width: 1023px) {
  .row > .col-12, .row > .col-xs-12 {
    height: auto;
    width: 50%;
  }
}

body.body--dark .profile-img-page {
  border: 2px solid rgba(255,255,255,0.1);
}

.profile-img-page:hover {
  transform: scale(1.05);
}

.fade-text {
  transition: opacity 0.2s ease;
}

.fade {
  opacity: 0;
}

.cursor {
  animation: blink 1s infinite;
}
</style>