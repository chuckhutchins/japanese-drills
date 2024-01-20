<template>
  <AppCard destructive class="delete-account">
    <h2>Delete Account</h2>
    <p>You will permanently lose all purchases, subscriptions, and data.</p>
    <AppButton destructive @click="handleDeleteAccount">Delete Account</AppButton>
  </AppCard>
</template>

<script setup lang="ts">
import AppButton from '@/components/common/AppButton.vue';
import AppCard from '@/components/common/AppCard.vue';

const handleDeleteAccount = () => {
  console.log('deleting');
};
</script>

<style scoped lang="scss">
.delete-account {
  display: grid;
  gap: 0.5rem;
  padding: 1rem;
  background-color: var(--color-white);

  .btn {
    justify-self: start;
  }
}
</style>
