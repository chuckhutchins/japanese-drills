<template>
  <div>
    <h1>Drills</h1>
    <ul class="list">
      <li>
        <RouterLink :to="{ name: 'AgePage' }">Age</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'TimePage' }">Time</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
