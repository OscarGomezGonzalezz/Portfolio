<template>
  <NuxtLink to="/">
    <img src="@/assets/images/logo.svg" alt="Logo" />
  </NuxtLink>
</template>

<script setup>

defineProps({
  size: {
    type: Number,
    default: 64
  },
  type: {
    type: String,
    default: 'white'
  }
});

</script>

<style scoped>

.main-logo {
  display: block;
}

</style>
