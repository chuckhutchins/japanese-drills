import { ref, onMounted, onUnmounted } from 'vue';

export default function useWindowSize() {
  const bodyEl = document.querySelector('body');
  if (!bodyEl) {
    return;
  }
  const pageWidth = ref(0);
  const pageHeight = ref(0);

  const resizeObserver = new ResizeObserver((el) => {
    pageWidth.value = el[0].contentRect.width;
    pageHeight.value = el[0].contentRect.height;
  });

  onMounted(() => resizeObserver.observe(bodyEl));
  onUnmounted(() => resizeObserver.unobserve(bodyEl));

  return { pageWidth, pageHeight };
}