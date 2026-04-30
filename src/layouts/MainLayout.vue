<template>
  <q-layout view="lHh Lpr lff">
    <q-header class="top">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen" class="lt-md"/>
        <q-space />

        <q-btn flat round icon="language">
          <q-tooltip>{{ $t('language') }}</q-tooltip>

          <q-menu transition-show="jump-down" transition-hide="jump-up">
            <q-list>

              <q-item clickable v-close-popup @click="setLanguage('pt')">
                <q-item-section>Português</q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="setLanguage('en')">
                <q-item-section>English</q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="setLanguage('es')">
                <q-item-section>Español</q-item-section>
              </q-item>

            </q-list>
          </q-menu>
        </q-btn>

        <q-btn flat round :icon="isDark ? 'light_mode' : 'dark_mode'" @click="toggleDark">
          <q-tooltip>
            {{ isDark ? $t('lightMode') : $t('darkMode') }}
          </q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-footer class="text-white">
    <q-toolbar>
      <q-toolbar-title class="text-center">
        © {{ new Date().getFullYear() }} Leonardo Cigalotti
      </q-toolbar-title>
    </q-toolbar>
  </q-footer>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="sidebar" :width="200">

      <div class="profile-container" @click="scrollToSection('hero')">
        <q-img src="../assets/Me.jpg" class="profile-img" />
      </div>

      <q-list class="menu-list">
        <EssentialLink
          v-for="link in linksList"
          :key="link.keyName"
          :title="link.title"
          :keyName="link.keyName"
          :active="active === link.keyName"
          @click="setActive"
        />
      </q-list>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'
import EssentialLink from 'src/components/EssentialLink.vue'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
import type { Language, NavLink } from 'src/types/Navigation'

const active = ref<string>('about')
const leftDrawerOpen = ref<boolean>(false)

const quasar = useQuasar()
const { locale, t } = useI18n()

const isDark = computed<boolean>(() => quasar.dark.isActive)

function toggleDark(): void {
  quasar.dark.set(!isDark.value)
}

function setLanguage(lang: Language): void {
  locale.value = lang
}

async function setActive(key: string): Promise<void> {
  active.value = key
  
  if (quasar.screen.lt.md) {
    leftDrawerOpen.value = false
    
    await nextTick()
    
    await new Promise(resolve => setTimeout(resolve, 300))
  }
  
  scrollToSection(key)
}

function scrollToSection(id: string): void {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth'
  })
}

const linksList = computed<NavLink[]>(() => [
  { title: t('about'), keyName: 'about' },
  { title: t('experience'), keyName: 'experience' },
  { title: t('project'), keyName: 'project' },
  { title: t('skill'), keyName: 'skill' },
  { title: t('education'), keyName: 'education' },
  { title: t('contact'), keyName: 'contact' }
])
</script>
