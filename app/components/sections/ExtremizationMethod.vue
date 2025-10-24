<template>
  <section 
    class="py-20 bg-primary opacity-0 transition-opacity duration-1000" 
    :class="{ 'opacity-100': isVisible }"
    ref="sectionRef"
  >
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-center text-center max-w-4xl mx-auto">
        <!-- Header Content -->
        <div class="mb-12">
          <div class="mb-6">
            <Badge text="Método" />
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-tertiary mb-6 font-primary">
            Método Componentização Extrema
          </h2>
          <p class="text-lg text-secondary max-w-2xl mx-auto leading-relaxed mb-12">
            Aplicando Componentização Extrema para criar sistemas modulares, testáveis e fáceis de manter — cada peça isolada, com contrato claro e responsabilidades únicas.
          </p>

          <!-- Chat Box -->
          <div class="w-full max-w-2xl mx-auto mb-16">
            <ChatBox 
              title="Componetização Extrema" 
              text="Crie um componente chamado BaseButton e um componente chamado BaseInput, coloque os componentes no Index e ao ser clicado o button, exceute a função principal que está no UserCustomer ..." 
            />
          </div>
        </div>

        <!-- Two Columns Section -->
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Left Column -->
          <div class="text-left">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <svg class="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-tertiary">O que é</h3>
            </div>
            <p class="text-secondary leading-relaxed">
              Componentização extrema significa decompor funcionalidades em pequenos componentes com contrato bem definido, testes isolados e integração via interfaces claras.
            </p>
          </div>

          <!-- Right Column -->
          <div class="flex flex-col gap-6">
            <RightShowcase />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Badge from '~/components/Badge.vue'
import ChatBox from '~/components/ChatBox.vue'
import RightShowcase from '~/components/sections/RightShowcase.vue'

const sectionRef = ref(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (entry && entry.isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    },
    {
      threshold: 0.2
    }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})
</script>