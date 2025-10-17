<template>
  <section class="min-h-screen flex items-center justify-center bg-primary relative overflow-hidden">
    <!-- Background Decorative Elements -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-0 w-96 h-96 bg-gradient-radial-secondary opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial-secondary opacity-20 translate-x-1/2 translate-y-1/2"></div>
      <div class="absolute top-1/2 left-1/2 w-full h-full bg-gradient-primary-secondary opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
    </div>
    
    <div class="container mx-auto px-4 py-8 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Hero Content -->
        <div class="animate-fade-in">
          <!-- Decorative Element -->
          <div class="w-24 h-24 bg-gradient-radial-secondary rounded-full mx-auto mb-8 animate-pulse-slow shadow-lg"></div>
          
          <!-- Badge -->
          <div class="mb-8 flex justify-center">
            <Badge text="Método componentização extrema" />
          </div>
          
          <!-- Main Title -->
          <h1 class="font-primary text-6xl md:text-7xl font-bold text-tertiary mb-8 leading-tight">
            Crie seu SaaS com IA em até 10 x mais rápidos sem programar
          </h1>
          
          <!-- Subtitle -->
          <p class="font-primary text-xl md:text-2xl text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
            Desenvolva aplicativos de forma segura, escalável e com total controle sobre seu código
          </p>

          <!-- Video Player -->
          <div class="mb-12 px-4">
            <VideoPlayer videoId="dQw4w9WgXcQ" />
          </div>
          
          <!-- CTA Button -->
          <div class="flex justify-center items-center">
            <ActionButton text="COMEÇAR AGORA" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Badge from '~/components/Badge.vue'
import VideoPlayer from '~/components/VideoPlayer.vue'
import ActionButton from '~/components/ActionButton.vue'
</script>