<template>
  <header class="header">
    <RouterLink :to="{ name: 'HomePage' }" class="main">
      nihongo・drills
    </RouterLink
    >
    <div class="menu">
      <button class="btn-settings" type="button" @click="handleSettingsMenuToggle">
        <span class="avatar"></span>
        <span class="sr-only">Open settings menu</span>
      </button>
      <div class="dropdown" :class="{ open: isMenuOpen }" @click="handleCloseSettingsMenu">
        <router-link :to="{ name: 'ProfilePage' }">
          Profile
        </router-link>
        <router-link :to="{ name: 'SettingsPage' }">
          Settings
        </router-link>
        <router-link :to="{ name: 'LogoutPage' }">
          Log Out
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);

const handleSettingsMenuToggle = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleCloseSettingsMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  border-bottom: 2px solid;
  padding-bottom: 1rem;

  .main {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.0125em;
    text-decoration: none;
    border-bottom: transparent;
  }

  .menu {
    position: relative;
  }

  .btn-settings {
    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;

    .avatar {
      display: block;
      background-color: pink;
      aspect-ratio: 1;
      width: 2rem;
      border-radius: 50%;
    }
  }

  .dropdown {
    display: none;

    &.open {
      position: absolute;
      inset-block-start: 100%;
      inset-inline-end: 0;
      z-index: 1;
      display: flex;
      flex-direction: column;
      background-color: var(--color-white);
      box-shadow: 0 0 0 0.125rem var(--color-black);
      padding: 0.25rem;
      border-radius: 0.125rem;
      min-inline-size: 7rem;

      a {
        line-height: 1;
        padding: 0.25rem;
        border-radius: 0.125rem;
        border: none;

        &:hover,
        &:focus-visible {
          background-color: var(--color-gray-300);
        }
      }
    }
  }
}
</style>
