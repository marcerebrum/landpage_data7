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
            <Badge text="Vibe Coding" />
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-red-500 mb-6 font-primary">
            Método Tradicional
          </h2>
          <p class="text-lg text-secondary max-w-2xl mx-auto leading-relaxed mb-12">
            Acelere seu desenvolvimento com nossa IA especializada em criar soluções completas e escaláveis
          </p>

          <!-- Chat Box -->
          <div class="w-full max-w-2xl mx-auto mb-16">
            <ChatBox 
              title="Vibe Coding" 
              text="Crie aplicativo completo de gestão ..." 
            />
          </div>
        </div>

        <!-- Two Columns Section -->
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Left Column -->
          <div class="text-left">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <svg class="w-6 h-6 text-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-tertiary">Problema</h3>
            </div>
            <p class="text-secondary leading-relaxed">
              Esta abordagem falha porque a IA gera código sem considerar princípios fundamentais de <span class="text-red-400">arquitetura de software</span>, como <span class="text-red-400">componentização, separação de responsabilidades</span> e <span class="text-red-400">reutilização de código</span>. Além disso, <span class="text-red-400">perde contexto facilmente</span>, resultando em código ilegível, com <span class="text-red-400">vulnerabilidades de segurança</span>, sujeito a falhas e extremamente difícil de manter no longo prazo.
            </p>
            <p class="text-secondary leading-relaxed mt-4">
              O desenvolvimento sem <span class="text-red-400">metodologia estruturada</span> gera aplicações <span class="text-red-400">monolíticas</span>, com <span class="text-red-400">código duplicado</span>, dependências desnecessárias e <span class="text-red-400">baixa escalabilidade</span>. O resultado são sistemas frágeis que se tornam <span class="text-red-400">pesadelos de manutenção</span> conforme crescem em complexidade.
            </p>
          </div>

          <!-- Right Column -->
          <div class="flex flex-col gap-6">
            <CodeWithErrors />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Badge from '~/components/Badge.vue'
import ChatBox from '~/components/ChatBox.vue'
import CodeWithErrors from '~/components/CodeWithErrors.vue'

const sectionRef = ref(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
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