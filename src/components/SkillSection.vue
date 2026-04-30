<template>
  <section id="skill" class="section column">
    <div class="container">

      <div v-for="category in skills" :key="category.title" class="category-section">

        <h2 class="category-title">{{ category.title }}</h2>

        <div class="skills-grid">

          <div v-for="skill in category.items" :key="skill.id" class="skill-item">
            <div class="skill-card">

              <i :class="skill.icon + ' skill-icon'" :style="{ color: getColor(skill.name) }" />
              <span class="skill-name">{{ skill.name }}</span>

            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
interface Skill {
  id: string;
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  items: Skill[];
}

defineProps<{
  skills: SkillCategory[];
}>();

function getColor(name: string): string {
  const colors: Record<string, string> = {
    JavaScript: '#f7df1e',
    TypeScript: '#3178c6',
    PHP: '#8892be',
    Python: '#3776ab',
    'C#': '#9b4f96',
    Java: '#f89820',
    Kotlin: '#7f52ff',
    Swift: '#fa7343',
    Go: '#00add8',
    Rust: '#ce422b',
    
    HTML: '#e34c26',
    CSS: '#264de4',
    'Vue 3': '#42b883',
    Vue: '#42b883',
    React: '#61dafb',
    'React Native': '#61dafb',
    Angular: '#dd0031',
    Svelte: '#ff3e00',
    Tailwind: '#06b6d4',
    Bootstrap: '#7952b3',
    Sass: '#cc6699',
    
    Laravel: '#ff2d20',
    'Node.js': '#68a063',
    Express: '#000000',
    NestJS: '#e0234e',
    Django: '#092e20',
    Flask: '#000000',
    '.NET': '#512bd4',
    '.NET MAUI': '#512bd4',
    Spring: '#6db33f',
    
    MySQL: '#00758f',
    PostgreSQL: '#336791',
    MongoDB: '#47a248',
    Redis: '#dc382d',
    'SQL Server': '#cc2927',
    SQLite: '#003b57',
    
    Git: '#f1502f',
    Docker: '#2496ed',
    Kubernetes: '#326ce5',
    AWS: '#ff9900',
    Azure: '#0078d4',
    Firebase: '#ffca28',
    Vercel: '#000000',
    Netlify: '#00c7b7',
  };

  return colors[name] || '#6366f1'; 
}
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 100%;
  padding: 3rem 1.5rem;
  box-sizing: border-box;
}

.category-section {
  margin-bottom: 3rem;
}

.category-section:last-child {
  margin-bottom: 0;
}

.category-title {
  margin: 0 0 1.5rem 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-black-white, #1a1a1a);
  padding-left: 1rem;
  border-left: 4px solid var(--q-primary, #1976d2);
  letter-spacing: -0.02em;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
  max-width: 1400px;
}

.skill-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.5rem 1rem;
  background: var(--background-card, #ffffff);
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.05),
    0 4px 12px rgba(0, 0, 0, 0.03);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  min-height: 120px;
}

.skill-icon {
  font-size: 2.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.skill-name {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text, #333);
  text-align: center;
  line-height: 1.3;
}

.skill-card::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: linear-gradient(
    135deg,
    transparent 0%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 16px;
}

.skill-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 
    0 4px 8px rgba(0, 0, 0, 0.08),
    0 12px 24px rgba(0, 0, 0, 0.12);
  border-color: rgba(0, 0, 0, 0.1);
}

.skill-card:hover::before {
  opacity: 1;
}

.skill-card:hover .skill-icon {
  transform: scale(1.15) rotate(-5deg);
  filter: 
    drop-shadow(0 0 8px currentColor)
    drop-shadow(0 0 16px currentColor)
    drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
}

@media (max-width: 640px) {
  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 0.75rem;
  }

  .skill-card {
    padding: 1rem 0.75rem;
    min-height: 100px;
  }

  .skill-icon {
    font-size: 2rem;
  }

  .skill-name {
    font-size: 0.75rem;
  }

  .category-title {
    font-size: 1.25rem;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  }
}

</style>