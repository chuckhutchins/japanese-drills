<template>
  <div class="wrapper">
    <div class="header">
      <BackToLink :to="{ name: 'HomePage' }" />
      <h1>X Days</h1>
    </div>
    <div class="card">
      <div v-if="showFront" class="face">
        {{ randomizedExercise[currentIndex].english }}
      </div>
      <div v-else class="face">
        {{ randomizedExercise[currentIndex].japanese }}
      </div>
    </div>
    <Teleport :disabled="!isMobile" to="body">
      <div class="controls">
        <div class="control-item flip">
          <button class="btn-icon" @click="handleFlipCard">
            <IconFlip />
            <span class="sr-only">Flip card</span>
          </button>
        </div>
        <div class="control-item previous">
          <button class="btn-icon" @click="handlePreviousCard">
            <IconArrowLeft />
            <span class="sr-only">Previous card</span>
          </button>
        </div>
        <div class="control-item next">
          <button class="btn-icon" @click="handleNextCard">
            <IconArrowRight />
            <span class="sr-only">Next card</span>
          </button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import randomizeArray from '@/utils/randomizeArray';
import useWindowSize from '@/utils/useWindowSize';
import { days } from '@/assets/data/days';
import BackToLink from '@/components/common/BackToLink.vue';
import IconFlip from '@/components/icons/IconFlip.vue';
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue';
import IconArrowRight from '@/components/icons/IconArrowRight.vue';

const currentIndex = ref(0);

const { pageWidth } = useWindowSize();
const isMobile = computed(() => {
  return pageWidth.value < 640;
});

const randomizedExercise = computed(() => {
  return randomizeArray([...days.exercises]);
});

const handlePreviousCard = () => {
  if (currentIndex.value <= 0) {
    return;
  }
  currentIndex.value--;
};

const handleNextCard = () => {
  if (currentIndex.value >= randomizedAge.value.length) {
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
  display: grid;
  gap: 2rem;
}

.header {
  display: grid;
  gap: 1rem;

  h1 {
    text-align: center;
  }
}

.card {
  justify-self: stretch;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid white;
  border-radius: 1rem;
  padding: 2rem;
  min-height: 15rem;

  .face {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 2rem;
    line-height: 1;
  }
}

.controls {
  position: absolute;
  inset-block-end: 0;
  inset-inline: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: var(--color-light-gray);
  height: 10rem;

  @media (min-width: 40rem) {
    position: relative;
    grid-template-columns: repeat(3, 1fr);
    height: 5rem;
  }

  .control-item {
    display: flex;
    justify-content: stretch;
    align-items: stretch;

    @media (min-width: 40rem) {
      grid-row: 1;
    }
  }

  .flip {
    grid-column: span 2;

    @media (min-width: 40rem) {
      grid-column: 2;
    }
  }

  .previous {
    @media (min-width: 40rem) {
      grid-column: 1;
    }
  }

  .next {
    @media (min-width: 40rem) {
      grid-column: 3;
    }
  }

  .btn-icon {
    flex-grow: 1;
    border-radius: 0;
    background-color: transparent;
    border: 0;
    cursor: pointer;

    &:focus,
    &:hover {
      background-color: var(--color-gray);
    }
  }
}
</style>
