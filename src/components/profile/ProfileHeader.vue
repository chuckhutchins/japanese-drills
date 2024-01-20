<template>
  <AppCard class="profile-header">
    <div class="avatar" />
    <h1 class="username">chuckchuckchuckchuck</h1>
    <p class="member-since">Member since 1/19/2024</p>
  </AppCard>
</template>

<script setup lang="ts">
import AppCard from '@/components/common/AppCard.vue';
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