<template>
  <component
    :is="element"
    class="btn"
    :class="{
      'btn-primary': primary,
      'btn-reverse': reverse,
      'btn-text': text,
      'btn-destructive': destructive,
    }"
    :disabled="isDisabled"
    :type="buttonType"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  isDisabled: {
    default: false,
    required: false,
    type: Boolean,
  },
  isLink: {
    default: false,
    required: false,
    type: Boolean,
  },
  isExternalLink: {
    default: false,
    required: false,
    type: Boolean,
  },
  isSubmit: {
    default: false,
    required: false,
    type: Boolean,
  },
  primary: {
    default: false,
    required: false,
    type: Boolean,
  },
  reverse: {
    default: false,
    required: false,
    type: Boolean,
  },
  text: {
    default: false,
    required: false,
    type: Boolean,
  },
  destructive: {
    default: false,
    required: false,
    type: Boolean,
  },
});

const element = computed(() => {
  if (props.isLink) {
    return 'router-link';
  } else if (props.isExternalLink) {
    return 'a';
  }
  return 'button';
});

const buttonType = computed(() => {
  if (props.isSubmit) {
    return 'submit';
  } else if (element.value === 'button') {
    return 'button';
  }
  return null;
});
</script>

<style scoped lang="scss">
.btn {
  display: block;
  font-size: 1rem;
  line-height: 1;
  font-weight: 700;
  text-align: center;
  border: none;
  border-radius: 0.125rem;
  padding: 0.5rem .75rem;
  cursor: pointer;
  transition: .2s;
  text-decoration: none;
  min-width: 7rem;

  &:hover,
  &:focus {
    text-decoration: none;
  }

  &:disabled {
    background-color: var(--color-btn-disabled);
    color: var(--color-white);
    text-shadow: var(--text-shadow);
    cursor: not-allowed;

    &:hover,
    &:focus {
      background-color: var(--color-btn-disabled);
    }
  }

  &.btn-text:not(:disabled) {
    font-weight: 400;
    padding: 0;
    background-color: transparent;

    &:focus,
    &:hover {
      text-decoration: underline;
    }
  }

  &.btn-reverse:not(:disabled) {
    background-color: #fff;

    &.btn-destructive {
      color: var(--color-error);

      &:hover,
      &:focus {
        background-color: var(--color-error-background);
      }
    }

    &:hover,
    &:focus {
      background-color: var(--color-gray-200);
    }
  }

  &.btn-primary:not(:disabled) {
    background-color: var(--color-btn-primary);
    color: #fff;
    text-shadow: var(--text-shadow);

    &:focus,
    &:hover {
      background-color: var(--color-btn-primary-hover);
    }
  }

  &.btn-destructive:not(:disabled, .btn-reverse) {
    background-color: var(--color-error);
    color: #fff;
    text-shadow: var(--text-shadow);

    &:focus,
    &:hover {
      background-color: var(--color-error-hover);
    }
  }
}
</style>
