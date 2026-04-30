<template>
  <section id="education" class="section column">
    <div :class="$q.screen.lt.sm ? '' : 'q-pa-xl'">
      <div class="row q-col-gutter-lg">

        <div v-for="edu in reversedEducations" :key="edu.id" class="col-12 col-md-6">
          <q-card class="education-card cursor-pointer" @click="openSite(edu.site)">

            <q-badge :color="edu.ok ? 'green' : 'orange' " class="badge-status">
              {{ edu.ok ? $t('concluido') : $t('em_andamento') }}
            </q-badge>

            <q-card-section :class="$q.screen.lt.sm ? 'column items-start' : 'row items-center'">

              <div class="logo-wrapper">
                <q-img :src="getImg(edu.img)" fit="contain" />
              </div>

              <div class="column justify-between full-width">

                <div class="text-h6 text-weight-bold ellipsis-2-lines">
                  {{ edu.degree }}
                </div>

                <div class="text-subtitle2 education-text-sub ellipsis">
                  {{ edu.institution }}
                </div>

                <div class="text-caption education-text">
                  {{ edu.year }}
                </div>

              </div>

            </q-card-section>

            <q-card-actions align="right" class="q-mt-auto">
              <q-btn
                icon="open_in_new"
                flat
                :label="$t('view_site')"
                size="sm"
                class="text-primary"
              />
            </q-card-actions>

          </q-card>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Education {
  id: number;
  degree: string;
  institution: string;
  year: string;
  site: string;
  img: string;
  ok: boolean;
}

const props = defineProps<{
  educations: Education[];
}>();

function openSite(url: string) {
  window.open(url, '_blank');
}

const getImg = (img: string): string =>
  new URL(`../assets/${img}`, import.meta.url).href;

const reversedEducations = computed(() => {
  return [...props.educations].sort((a, b) => b.id - a.id)
})
</script>

<style scoped>
.education-card {
  position: relative;
  border-radius: 16px;
  transition: all 0.25s ease;
  background: var(--background-card, #eeeeee);
  border: 1px solid rgba(0, 0, 0, 0.05);
  height: 100%;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
}

@media (max-width: 600px) {
  .education-card {
    min-height: unset;
    
  }
}

.logo-wrapper {
  width: 70px;
  height: 70px;
  min-width: 70px;
  background: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  margin-right: 5px;
}

.badge-status {
  position: absolute;
  top: 10px;
  right: 10px;
}

@media (min-width: 600px) {
  .education-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
  }
}

.education-card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 16px;
  background: radial-gradient(circle at top left, rgba(0,0,0,0.05), transparent 70%);
  opacity: 0;
  transition: opacity 0.3s;
}

.education-card:hover::after {
  opacity: 1;
}

.education-text {
  color: var(--color-text, #333);
}

.education-text-sub {
  color: var(--color-sub-texts, gray);
}
</style>