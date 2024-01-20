<template>
  <AppCard class="user-details">
    <div class="detail">
      <h2>Name</h2>
      <p>Asdf Asdf</p>
    </div>
    <div class="detail">
      <h2>Email</h2>
      <p>asdf@asdf.com</p>
    </div>
    <div class="detail">
      <h2>Birthday</h2>
      <p>00/00</p>
    </div>
  </AppCard>
</template>

<script setup lang="ts">
import AppCard from '@/components/common/AppCard.vue';
</script>

<style scoped lang="scss">
.user-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  background-color: var(--color-white);
}
</style>
