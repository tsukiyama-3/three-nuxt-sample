// export const useWindowSize = (targetDom: Ref<HTMLElement | null>) => {
//   const width = ref(0);
//   const height = ref(0);
//   onMounted(() => {
//     if (targetDom.value === null) return;
//     width.value = targetDom.value.clientWidth;
//     height.value = targetDom.value.clientHeight;
//     window.addEventListener("resize", updateWindowSize);
//   });
//   const updateWindowSize = () => {
//     if (targetDom.value === null) return;
//     width.value = targetDom.value.clientWidth;
//     height.value = targetDom.value.clientHeight;
//   };
//   return {
//     width,
//     height,
//   };
// };
