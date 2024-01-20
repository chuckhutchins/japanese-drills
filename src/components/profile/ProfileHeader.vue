<template>
  <AppCard v-if="hasUser" class="profile-header">
    <div class="avatar" />
    <h1 class="username">{{ accountStore.user?.username ?? '-' }}</h1>
    <p class="member-since">
      Member since {{ formatDate(accountStore.user?.createdDate) ?? '-' }}
    </p>
  </AppCard>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useAccountStore } from '@/stores/AccountStore';
import { formatDate } from '@/utils/formatDate';
import AppCard from '@/components/common/AppCard.vue';

const accountStore = useAccountStore();

const hasUser = computed(() => {
  return !!accountStore.user;
});
</script>

<style>
.profile-header {
  display: grid;
  grid-template-columns: 5rem 1fr;
  gap: 1rem;
  padding: 1rem;

  .avatar,
  .username {
    align-self: center;
  }

  .avatar {
    background-color: pink;
    aspect-ratio: 1;
  }

  .username {
    font-size: 2rem;
  }

  .member-since {
    grid-column: span 2;
  }
}
</style>
