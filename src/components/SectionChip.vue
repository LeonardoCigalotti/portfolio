<template>
  <div class="row items-center full-width q-my-xl">
        <div class="col"><q-separator :color="$q.dark.isActive ? 'white' : 'grey-4'" /></div>
        <div class="q-px-md text-grey-7 text-caption"><q-chip class="text-black text-divider-row" :color="$q.dark.isActive ? 'white' : 'grey-4'">{{ $t(tString) }}</q-chip></div>
        <div class="col"><q-separator :color="$q.dark.isActive ? 'white' : 'grey-4'" /></div>
    </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'

interface Props {
    tString: string;
}

defineProps<Props>();

const $q = useQuasar()
</script>

<style scoped>
@media (max-width: 600px) {
   .text-divider-row {
        flex-wrap: nowrap !important;
    } 
}
</style>