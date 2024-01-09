<template>
  <div class="wrapper">
    <button class="btn-navigation" @click="handlePreviousCard">Previous</button>
    <div class="card">
      <div v-if="showFront" class="face">
        {{ randomizedAge[currentIndex].number }}
      </div>
      <div v-else class="face">
        {{ randomizedAge[currentIndex].japanese }}
      </div>
      <button class="btn-flip" @click="handleFlipCard">Flip</button>
    </div>
    <button class="btn-navigation" @click="handleNextCard">Next</button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import randomizeArray from '@/utils/randomizeArray';
import { age } from '@/assets/data/age';

const currentIndex = ref(0);

const randomizedAge = computed(() => {
  return randomizeArray([...age]);
});

const handlePreviousCard = () => {
  if (currentIndex.value <= 0) {
    return;
  }
  currentIndex.value--;
};

const handleNextCard = () => {
  if (currentIndex.value >= randomizedAge.length) {
    return;
  }
  currentIndex.value++;
};

const handleFlipCard = () => {
  showFront.value = !showFront.value;
};

const showFront = ref(true);
watch(currentIndex, () => {
  showFront.value = true;
});
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.btn-navigation {
  display: block;
}

.card {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid white;
  border-radius: 1rem;
  padding: 2rem;
  min-width: 20rem;
  aspect-ratio: 3 / 2;

  .face {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 2rem;
    line-height: 1;
  }

  .btn-flip {
    position: absolute;
    inset-block-end: 0.5rem;
    inset-inline-end: 0.5rem;

  }
}
</style>
