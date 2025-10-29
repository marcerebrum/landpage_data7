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
              <div class="w-10 h-10 rounded-xl bg-yellow-100 border border-yellow-200 flex items-center justify-center">
                <svg class="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L14.4 7.2L20 8.4L16 12.6L17.2 18L12 15.6L6.8 18L8 12.6L4 8.4L9.6 7.2L12 2Z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-tertiary">Porque Funciona</h3>
            </div>
            <p class="text-secondary leading-relaxed">
              Com o método de <span class="text-[#13a36e]">componentização extrema</span>, você cria componentes de forma isolada, definindo claramente suas responsabilidades, métodos, funções e propriedades. Esses componentes são então importados e reutilizados dentro de outros componentes, montando o aplicativo de forma modular. Esta abordagem segue os <span class="text-[#13a36e]">princípios de design de código</span> e arquitetura de software, mantendo o código <span class="text-[#13a36e]">limpo, escalável, seguro</span> e, principalmente, <span class="text-[#13a36e]">sob seu total controle</span>.
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