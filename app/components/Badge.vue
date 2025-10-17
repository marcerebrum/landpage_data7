<template>
  <div class="inline-flex items-center gap-2 bg-primary border border-secondary/30 rounded-full px-4 py-2 text-secondary hover:border-secondary/50 transition-colors duration-300">
    <span class="text-sm font-medium">{{ text }}</span>
    <svg
      class="w-4 h-4"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12H19M19 12L12 5M19 12L12 19"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>