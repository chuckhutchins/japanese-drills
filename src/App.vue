<template>
  <div class="container">
    <TheHeader />
    <main>
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheFooter from '@/components/common/TheFooter.vue';
import TheHeader from '@/components/common/TheHeader.vue';
</script>

<style scoped lang="scss">
.container {
  width: calc(100% - 2rem);
  max-width: 1024px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 1rem 0;
  display: grid;
  grid-template-rows: auto 1fr auto;
  align-items: start;
  grid-gap: 2rem;
  min-height: 100dvh;
}
</style>
