<script setup lang="ts">
import { use003 } from "~/composables/section/1st";

const container = ref<HTMLElement | null>(null);

onMounted(() => {
  const { render } = use003(container as Ref<HTMLElement>);
  render();
});
</script>

<template>
  <div ref="container"></div>
</template>
