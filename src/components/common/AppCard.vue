<template>
  <div class="app-card" :class="{
      'destructive': props.destructive,
    }">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  destructive: {
    default: false,
    required: false,
    type: Boolean,
  },
});
</script>

<style scoped lang="scss">
.app-card {
  background-color: var(--color-white);
  box-shadow: 0 0 0 0.125rem var(--color-black);
  border-radius: 0.125rem;
  overflow: hidden;

  &.destructive {
    // TODO: light red hash background?
    box-shadow: 0 0 0 0.125rem var(--color-error);
  }
}
</style>
