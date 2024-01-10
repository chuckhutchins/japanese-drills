<template>
  <RouterLink class="back-link">
    <IconChevronDoubleLeft />
    <slot> Back </slot>
  </RouterLink>
</template>

<script setup lang="ts">
import IconChevronDoubleLeft from '@/components/icons/IconChevronDoubleLeft.vue';
</script>

<style scoped lang="scss">
.back-link {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  color: var(--color-text);
  transition: 0.2s;
  text-decoration: none;
  border-bottom: 0;
  line-height: 1;

  &:hover,
  &:focus {
    text-decoration: underline;

    svg {
      transform: translateX(-0.25rem);
    }
  }

  svg {
    display: block;
    height: 1.25rem;
    width: 1.25rem;
    transition: 0.2s;
  }
}
</style>
