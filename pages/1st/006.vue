<script setup lang="ts">
import { use006 } from "~/composables/section/1st";

const container = ref<HTMLElement | null>(null);

const { render, renderer, isKeydown } = use006();

onMounted(() => {
  if (container.value === null || renderer === undefined) {
    return;
  }
  container.value.appendChild(renderer.domElement);
  render();
});
</script>

<template>
  <div
    ref="container"
    tabindex="0"
    @keydown.space="isKeydown = true"
    @keyup.space="isKeydown = false"
  ></div>
</template>
