<template>
  <div class="w-full transform hover:scale-[1.02] transition-transform duration-300">
    <div class="relative p-6 rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-primary/80 border border-secondary/40 overflow-hidden shadow-xl">
      <!-- Decorative Elements -->
      <div class="absolute -top-10 -right-10 w-40 h-40 bg-gradient-secondary-primary opacity-10 rounded-full blur-2xl"></div>
      <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-secondary-primary opacity-5 rounded-full blur-xl"></div>

      <!-- Chat Header -->
      <div class="relative z-10 flex items-center gap-3 mb-4 pb-4 border-b border-secondary/20">
        <div class="w-3 h-3 rounded-full bg-secondary animate-pulse"></div>
        <h3 class="text-lg font-semibold text-secondary">{{ title }}</h3>
      </div>

  <!-- Chat Content -->
  <div class="relative z-10 space-y-4 text-left">
        <!-- Chat Messages Area -->
        <div class="min-h-[120px] max-h-[150px] overflow-y-auto space-y-4 mb-4">
          <!-- Example Message -->
          <div class="flex gap-3">
            <div class="w-8 h-8 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center">
              <svg class="w-4 h-4 text-secondary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="flex-1">
              <p class="text-tertiary text-sm">{{ text }}</p>
            </div>
          </div>
        </div>

        <!-- Chat Input -->
        <div class="relative">
          <div class="flex items-center justify-start bg-primary/40 border border-secondary/30 rounded-xl py-3 px-4">
            <div class="w-8 h-8 rounded-lg bg-[#13a36e] flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 12V22H4V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 7H2V12H22V7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 22V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="relative ml-3 flex-1 group">
              <p class="text-tertiary text-left break-words whitespace-normal line-clamp-1 hover:line-clamp-none transition-all duration-200">{{ text }}</p>
              <div class="absolute left-0 -top-12 bg-black/90 text-xs text-white p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-max max-w-md z-50 pointer-events-none">
                {{ text }}
              </div>
            </div>
          </div>
          <button class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-secondary/10 hover:bg-secondary/20 border border-secondary/20 flex items-center justify-center transition-colors duration-200">
            <svg class="w-4 h-4 text-secondary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 2L11 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <!-- Loading Animation -->
        <div class="flex items-center gap-2 mt-3">
          <div class="w-2 h-2 rounded-full bg-secondary/60 animate-bounce" style="animation-delay: 0ms"></div>
          <div class="w-2 h-2 rounded-full bg-secondary/60 animate-bounce" style="animation-delay: 150ms"></div>
          <div class="w-2 h-2 rounded-full bg-secondary/60 animate-bounce" style="animation-delay: 300ms"></div>
          <span class="text-xs text-secondary/60 ml-2">Gerando código...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  text: string
}>()
</script>