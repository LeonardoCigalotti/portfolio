<template>
  <section id="project" class="section column">
    <div class="container">

      <q-tabs v-model="filter" class="q-mb-xl custom-tabs" align="center" active-color="primary" indicator-color="primary">
        <q-tab :label="$t('all')" name="all" />
        <q-tab :label="$t('frontend')" name="frontend" />
        <q-tab :label="$t('backend')" name="backend" />
        <q-tab :label="$t('mobile')" name="mobile" />
      </q-tabs>

      <div class="projects-grid">
        <div v-for="project in filteredProjects" :key="project.id">

          <q-card class="project-card">

            <div class="image-container">
              <q-img :src="getImg(project.img)"  class="project-image"  fit="cover" />
              <div class="image-overlay"></div>
            </div>

            <div class="card-content">
              <div class="project-header">
                <h3 class="project-title">{{ project.title }}</h3>
                <span class="project-type">{{ project.type }}</span>
              </div>

              <p class="project-description">{{ project.description }}</p>

              <div class="tech-stack">
                <span v-for="t in project.tech" :key="t" class="tech-chip">
                  {{ t }}
                </span>
              </div>
            </div>

            <div class="card-actions">
              <button class="action-btn btn-secondary" @click="openGithub(project.github)" >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                <span>{{ $t('code') }}</span>
              </button>
              <button v-if="project.site" class="action-btn btn-primary" @click="openSite(project.site)">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                <span>{{ $t('view_site') }}</span>
              </button>
            </div>

          </q-card>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Project {
  id: number;
  title: string;
  type: 'frontend' | 'backend' | 'mobile';
  description: string;
  tech: string[];
  img: string;
  github: string;
  site?: string;
}

interface Props {
  projects: Project[];
}

const props = defineProps<Props>();

const filter = ref<'all' | Project['type']>('all');

const filteredProjects = computed(() => {
  if (filter.value === 'all') return props.projects;
  return props.projects.filter(p => p.type === filter.value);
});

const getImg = (imagem: string): string =>
  new URL(`../assets/${imagem}`, import.meta.url).href

function openGithub(repo: string) {
  window.open(`https://github.com/${repo}`, '_blank');
}

function openSite(url: string) {
  window.open(url, '_blank');
}
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 100%;
  padding: 2rem 1.5rem;
  box-sizing: border-box;
  overflow-x: hidden;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  grid-auto-rows: 1fr; 
}

.project-card {
  position: relative;
  background: var(--background-card, #ffffff);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.05),
    0 10px 20px rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.06);
  height: 100%; 
  display: flex; 
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.07),
    0 20px 40px rgba(0, 0, 0, 0.08);
  border-color: rgba(0, 0, 0, 0.1);
}

.image-container {
  position: relative;
  width: 100%;
  height: 160px;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.project-image {
  width: 100%;
  height: 100%;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover .project-image {
  transform: scale(1.08);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(0, 0, 0, 0.15) 100%
  );
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

.project-card:hover .image-overlay {
  opacity: 0.3;
}

.card-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
}

.project-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary, #1a1a1a);
  line-height: 1.3;
  letter-spacing: -0.02em;
}

.project-type {
  padding: 0.25rem 0.75rem;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text, #666);
  white-space: nowrap;
  flex-shrink: 0;
}

.project-description {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--color-text, #666);
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.25rem;
}

.tech-chip {
  padding: 0.375rem 0.75rem;
  background: rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--color-text, #333);
  transition: all 0.2s ease;
}

.tech-chip:hover {
  background: rgba(0, 0, 0, 0.06);
  border-color: rgba(0, 0, 0, 0.12);
  transform: translateY(-1px);
}

.card-actions {
  display: flex;
  gap: 0.75rem;
  padding: 1rem 1.5rem 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  margin-top: auto;
}

.action-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border: none;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
}

.btn-secondary {
  background: rgba(0, 0, 0, 0.195);
  color: var(--color-text, #333);
}

.btn-secondary:hover {
  background: rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.btn-primary {
  background: var(--q-primary, #fba225);
  color: white;
  box-shadow: 0 4px 12px rgba(25, 118, 210, 0.2);
}

.btn-primary:hover {
  background: var(--q-primary-dark, #fba225);
  box-shadow: 0 6px 16px rgba(25, 118, 210, 0.3);
  transform: translateY(-2px);
}

.action-btn svg {
  transition: transform 0.3s ease;
}

.btn-primary:hover svg {
  transform: translateX(2px) translateY(-2px);
}

.btn-secondary:hover svg {
  transform: scale(1.1);
}

.custom-tabs {
  font-weight: 600;
  letter-spacing: 0.02em;
}

@media (max-width: 768px) {
  .container {
    padding: 1.5rem 1rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
  
  .card-content {
    padding: 1.25rem;
  }
  
  .card-actions {
    padding: 0.75rem 1.25rem 1.25rem;
  }
  
  .custom-tabs .q-tab {
    min-height: 32px;
    padding: 0 8px;
    font-size: 12px;
  }

  .custom-tabs .q-tab__label {
    font-size: 12px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1025px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>