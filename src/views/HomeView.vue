<template>
  <div>
    <h1>Drills</h1>
    <ul class="list">
      <li>
        <RouterLink :to="{ name: 'AgePage' }">X Years Old</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'DaysPage' }">X Days</RouterLink>
      </li>
      <li>Dates</li>
      <li>Currency</li>
      <li>Time</li>
      <li>This/That/Which/etc</li>
      <li>X Things</li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
