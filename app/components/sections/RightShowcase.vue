<template>
  <div class="w-full max-w-md transform hover:scale-[1.02] transition-transform duration-300">
    <div class="relative p-8 rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-primary/80 border-2 border-dashed border-secondary/40 overflow-hidden shadow-xl">
      <!-- Decorative top-right highlight -->
      <div class="absolute -top-10 -right-10 w-40 h-40 bg-gradient-secondary-primary opacity-10 rounded-full blur-2xl"></div>
      <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-secondary-primary opacity-5 rounded-full blur-xl"></div>

      <!-- Main content box -->
      <div class="relative z-10">
        <!-- Drop area with icon -->
        <div class="h-52 rounded-xl bg-primary/40 border-2 border-dashed border-secondary/30 flex flex-col items-center justify-center gap-4 group hover:border-secondary/50 transition-colors duration-300">
          <!-- File Icon -->
          <div class="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center border border-secondary/20">
            <svg class="w-8 h-8 text-secondary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" fill="currentColor"/>
            </svg>
          </div>
          <!-- Text -->
          <p class="text-secondary/80 text-sm font-primary">Drop files here or click to upload</p>
        </div>

        <!-- Progress bar area -->
        <div class="mt-6 space-y-4">
          <div class="h-2 w-full bg-primary/40 rounded-full overflow-hidden">
            <div class="h-full w-3/4 bg-gradient-to-r from-secondary to-secondary/60 rounded-full"></div>
          </div>
          <div class="flex justify-between items-center text-xs text-secondary/60 font-primary">
            <span>Uploading...</span>
            <span>75%</span>
          </div>
        </div>
      </div>

      <!-- Dotted green outline (simulating the dashed highlight) -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute inset-4 border-2 border-dashed border-secondary rounded-2xl opacity-40"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
