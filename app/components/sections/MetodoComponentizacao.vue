<template>
  <section class="py-16 bg-primary">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- Left Column -->
        <div>
          <div class="mb-6">
            <Badge text="Método Exclusivo" />
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-tertiary mb-4 font-primary">
            Componentização Extrema
          </h2>
          <p class="text-lg text-secondary max-w-xl leading-relaxed">
            Desenvolva aplicativos com inteligência artificial de forma segura e escalável com total controle sobre seu código
          </p>
        </div>

        <!-- Right Column (Showcase) -->
        <div class="flex items-center justify-center">
          <RightShowcase />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Badge from '~/components/Badge.vue'
import RightShowcase from '~/components/sections/RightShowcase.vue'
</script>