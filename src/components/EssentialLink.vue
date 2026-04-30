<template>
  <q-item
    clickable
    v-ripple
    @click="handleClick"
    :class="['menu-item', { active }]"
  >
    <q-item-section>
      {{ title }}
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
interface Props {
  title: string
  keyName: string
  active: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'click', key: string): void
}>()

function handleClick(): void {
  emit('click', props.keyName)
}
</script>
