<template>
  <q-page class="q-pa-md">
    <home-section />

    <section-chip tString="about" />
    <about-section />

    <section-chip tString="experience" />
    <experience-section :experiences="experiences" />

    <section-chip tString="project" />
    <project-section :projects="projects" />

    <section-chip tString="skill" />
    <skill-section :skills="skills" />

    <section-chip tString="education" />
    <education-section :educations="educations" />
    
    <section-chip tString="contact" />
    <contact-section />
  </q-page>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import type { Experience } from 'src/types/Experience'
import type { Project } from 'src/types/Project'
import type { Education } from 'src/types/Education'

import HomeSection from 'src/components/HomeSection.vue'
import SectionChip from 'src/components/SectionChip.vue'
import AboutSection from 'src/components/AboutSection.vue'
import ExperienceSection from 'src/components/ExperienceSection.vue'
import ProjectSection from 'src/components/ProjectSection.vue'
import SkillSection from 'src/components/SkillSection.vue'
import EducationSection from 'src/components/EducationSection.vue'
import ContactSection from 'src/components/ContactSection.vue'

const i18n = useI18n()
const { t } = useI18n()

const experiences = computed<Experience[]>(() => {
  const data = i18n.tm('experiences')

  return Array.isArray(data) ? data as Experience[] : []
})

const projects = computed<Project[]>(() => {
  const data = i18n.tm('projects');

  if (!Array.isArray(data)) return [];

  return data.map((p) => ({
    ...p,
    type: p.type as Project['type']
  }));
});

const educations = computed<Education[]>(() => {
  const data = i18n.tm('educations')

  return Array.isArray(data) ? data as Education[] : []
})

const skills = computed(() => [
  {
    title: t('codes'),
    items: [
      { id: 'code-1', name: 'PHP', icon: 'devicon-php-plain colored' },
      { id: 'code-2', name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { id: 'code-3', name: 'HTML', icon: 'devicon-html5-plain colored' },
      { id: 'code-4', name: 'CSS', icon: 'devicon-css3-plain colored' },
      { id: 'code-5', name: 'C#', icon: 'devicon-csharp-plain colored' },
      { id: 'code-6', name: 'Java', icon: 'devicon-java-plain colored' },
      { id: 'code-7', name: 'TypeScript', icon: 'devicon-typescript-plain colored'},
    ]
  },
  {
    title: 'Frameworks',
    items: [
      { id: 'fw-1', name: 'Laravel', icon: 'devicon-laravel-plain colored' },
      { id: 'fw-2', name: 'Lumen', icon: 'devicon-lumen-original' },
      { id: 'fw-3', name: 'Vue 3', icon: 'devicon-vuejs-plain colored' },
      { id: 'fw-4', name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
      { id: 'fw-5', name: 'React Native', icon: 'devicon-react-original colored' },
      { id: 'fw-6', name: '.NET', icon: 'devicon-dotnetcore-plain colored' },
    ]
  },
  {
    title: t('others'),
    items: [
      { id: 'other-1', name: 'Git', icon: 'devicon-git-plain colored' },
      { id: 'other-2', name: 'MySQL', icon: 'devicon-mysql-plain colored' },
      { id: 'other-3', name: 'SQL Server', icon: 'devicon-microsoftsqlserver-plain colored' },
    ]
  }
]);
</script>
