<template>
    <section id="contact" class="section column">
        <div class="text-h4 text-center q-mb-lg">{{ $t('callMe') }}</div>

        <div class="row justify-center q-gutter-md">
            <q-btn round class="bg-linkedin text-white" icon="mdi-linkedin" @click="open(linkedin)"><q-tooltip>Linkedin</q-tooltip></q-btn>
            <q-btn round class="bg-github" icon="mdi-github" @click="open(github)"><q-tooltip>Github</q-tooltip></q-btn>
        </div>
    </section>
</template>

<script setup lang="ts">
const linkedin = "https://www.linkedin.com/in/leonardo-cigalotti";
const github = "https://github.com/LeonardoCigalotti";

function open(url: string) {
  window.open(url, "_blank");
}
</script>

<style scoped>
.contact-section {
  min-height: 60vh;
  background: linear-gradient(135deg, #1e1e2f, #2c2c3e);
}

.contact-card {
  width: 100%;
  max-width: 400px;
  border-radius: 16px;
  text-align: center;
  backdrop-filter: blur(10px);
}

.q-btn {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.q-btn:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
}

.bg-linkedin {
  background-color: #0072B1;
}

.bg-github {
  background-color: var(--color-black-white);
  color: var(--color-white-black);
}
</style>