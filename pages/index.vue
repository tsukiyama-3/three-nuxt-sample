<script setup lang="ts">
const container = ref<HTMLElement | null>(null);

onMounted(() => {
  if (container.value === null) {
    return;
  }
  const { init } = useBox(container as Ref<HTMLElement>);
  init();
});
</script>

<template>
  <div ref="container"></div>
</template>
