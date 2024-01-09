<template>
  <header class="header">
    <RouterLink :to="{name: 'HomePage'}" class="main">Japanese Drills</RouterLink>
  </header>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
header {
  border-bottom: 2px solid;
  padding-bottom: 1rem;

  .main {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -.0125em;
    text-decoration: none;
    border-bottom: transparent;
  }
}
</style>
