<template>
  <div class="relative w-full max-w-4xl mx-auto group">
    <!-- Video Container -->
    <div class="relative aspect-video rounded-2xl overflow-hidden border border-secondary/20 bg-primary/40 backdrop-blur-sm">
      <!-- Thumbnail/Preview Container -->
      <div v-if="!isPlaying" class="absolute inset-0 bg-primary/60 backdrop-blur-sm flex items-center justify-center">
        <!-- Play Button -->
        <button 
          @click="play" 
          class="group/btn relative z-10 w-20 h-20 bg-secondary rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:bg-secondary/90"
        >
          <span class="sr-only">Play video</span>
          <svg 
            class="w-8 h-8 text-primary transform translate-x-0.5" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z"/>
          </svg>
          
          <!-- Glow Effect -->
          <div class="absolute inset-0 rounded-full bg-secondary/20 blur-xl scale-150 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
        </button>
        
        <!-- Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
      </div>

      <!-- YouTube iFrame -->
      <iframe 
        v-if="isPlaying"
        :src="videoUrl + '?autoplay=1'"
        class="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <!-- Decorative Elements -->
    <div class="absolute -inset-0.5 bg-gradient-secondary-primary rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
    <div class="absolute -inset-1 bg-gradient-primary-secondary rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-20"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  videoId: string
}>()

const isPlaying = ref(false)
const videoUrl = computed(() => `https://www.youtube.com/embed/${props.videoId}`)

function play() {
  isPlaying.value = true
}
</script>