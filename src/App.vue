<script lang="ts">
import { defineComponent, computed, watch, provide } from 'vue';
import { useWindowSize } from '@vueuse/core';
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/sections/TheFooter.vue';

export default defineComponent({
  components: {
    TheHeader,
    TheFooter
  },
  setup() {
    const { width } = useWindowSize();
    const isMobile = computed(() => width.value <= 800);

    // Watch for changes in width and log the value
    watch(width, (newWidth) => {
      console.log(newWidth);
    });

    // Provide the isMobile value to the rest of the app
    provide('isMobile', isMobile);

    return {
      isMobile
    };
  }
});
</script>

<template>
  <TheHeader></TheHeader>
  <router-view></router-view>
  <TheFooter></TheFooter>
</template>

<style scoped>
</style>
