<template>
  <button 
    class="
      bg-secondary hover:bg-secondary/80 
      text-primary font-bold 
      py-4 px-8 
      rounded-full 
      transition-all duration-300 
      transform hover:scale-105 
      shadow-lg 
      text-lg 
      font-primary
      relative
      group
      overflow-hidden
    "
  >
    <!-- Texto do botão -->
    <span class="relative z-10">{{ text }}</span>

    <!-- Efeito de hover -->
    <div class="
      absolute inset-0 
      bg-gradient-secondary-primary 
      opacity-0 
      group-hover:opacity-20 
      transition-opacity 
      duration-300
    "></div>

    <!-- Efeito de glow -->
    <div class="
      absolute -inset-1 
      bg-secondary/30 
      blur-xl 
      opacity-0 
      group-hover:opacity-50 
      transition-opacity 
      duration-300 
      -z-10
    "></div>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>