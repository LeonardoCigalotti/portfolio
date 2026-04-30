<template>
    <section id="about" class="section column">
        <div class="q-mx-auto" style="max-width: 800px; width: 100%;">
            <div class="text-h4 text-weight-bold q-mb-lg">{{ $t('about') }}</div>
            <div class="text-body1 line-height-lg about-text">{{ $t('aboutMeDescription') }}</div>
        </div>
    </section>
</template>

<style scoped>
.about-text {
  white-space: pre-line;
}
</style>