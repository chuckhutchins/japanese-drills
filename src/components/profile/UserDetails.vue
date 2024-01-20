<template>
  <AppCard v-if="accountStore.isLoggedIn" class="user-details">
    <div class="detail">
      <h2>Name</h2>
      <p>{{ accountStore.user?.name ?? '-' }}</p>
    </div>
    <div class="detail">
      <h2>Email</h2>
      <p>{{ accountStore.user?.email ?? '-' }}</p>
    </div>
    <div class="detail">
      <h2>Birthday</h2>
      <p>{{ formatBirthday(accountStore.user?.birthday) ?? '-' }}</p>
    </div>
  </AppCard>
</template>

<script setup lang="ts">
import { useAccountStore } from '@/stores/AccountStore';
import { formatBirthday } from '@/utils/formatDate';
import AppCard from '@/components/common/AppCard.vue';

const accountStore = useAccountStore();
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
