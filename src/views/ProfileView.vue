<template>
  <div class="profile">
    <ProfileHeader />
    <UserDetails />
    <DeleteAccount />
  </div>
</template>

<script setup lang="ts">
import DeleteAccount from '@/components/profile/DeleteAccount.vue';
import ProfileHeader from '@/components/profile/ProfileHeader.vue';
import UserDetails from '@/components/profile/UserDetails.vue';
</script>

<style scoped lang="scss">
.profile {
  display: grid;
  gap: 1rem;
}
</style>
