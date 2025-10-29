<template>
  <section 
    class="py-20 bg-primary opacity-0 transition-opacity duration-1000" 
    :class="{ 'opacity-100': isVisible }"
    ref="sectionRef"
  >
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-center text-center max-w-6xl mx-auto">
        <!-- Header Content -->
        <div class="mb-12">
          <div class="mb-6">
            <Badge text="Possibilidades" />
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-tertiary mb-6 font-primary">
            Crie qualquer tipo de aplicativo
          </h2>
          <p class="text-lg text-secondary max-w-2xl mx-auto leading-relaxed mb-12">
            Com Vue.js e Nuxt.js, as possibilidades são infinitas. Explore alguns dos tipos de aplicações que você pode desenvolver usando nossa metodologia.
          </p>
        </div>

        <!-- Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Card 1: Gestão -->
          <div class="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div class="relative mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            <h3 class="text-xl font-bold text-tertiary mb-3 text-center group-hover:text-blue-600 transition-colors">Sistemas de Gestão</h3>
            <p class="text-gray-600 text-center leading-relaxed">ERPs, CRMs, gestão de estoque, financeiro e dashboards analíticos com interfaces modernas e responsivas.</p>
          </div>

          <!-- Card 2: Delivery -->
          <div class="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div class="relative mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <div class="absolute inset-0 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            <h3 class="text-xl font-bold text-tertiary mb-3 text-center group-hover:text-green-600 transition-colors">Apps de Delivery</h3>
            <p class="text-gray-600 text-center leading-relaxed">Plataformas completas de delivery com rastreamento em tempo real, gestão de pedidos e interface para clientes e entregadores.</p>
          </div>

          <!-- Card 3: Saúde -->
          <div class="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div class="relative mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <div class="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            <h3 class="text-xl font-bold text-tertiary mb-3 text-center group-hover:text-red-600 transition-colors">Aplicativos de Saúde</h3>
            <p class="text-gray-600 text-center leading-relaxed">Sistemas de telemedicina, agendamento de consultas, prontuários eletrônicos e apps de monitoramento de saúde.</p>
          </div>

          <!-- Card 4: Redes Sociais -->
          <div class="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div class="relative mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <div class="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            <h3 class="text-xl font-bold text-tertiary mb-3 text-center group-hover:text-purple-600 transition-colors">Redes Sociais</h3>
            <p class="text-gray-600 text-center leading-relaxed">Plataformas sociais com feeds dinâmicos, mensagens em tempo real, compartilhamento de conteúdo e interações entre usuários.</p>
          </div>

          <!-- Card 5: Área de Membros -->
          <div class="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div class="relative mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <div class="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            <h3 class="text-xl font-bold text-tertiary mb-3 text-center group-hover:text-yellow-600 transition-colors">Área de Membros</h3>
            <p class="text-gray-600 text-center leading-relaxed">Plataformas de cursos online, comunidades privadas, sistemas de assinatura e acesso a conteúdo exclusivo.</p>
          </div>

          <!-- Card 6: E-commerce -->
          <div class="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div class="relative mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
              </div>
              <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            <h3 class="text-xl font-bold text-tertiary mb-3 text-center group-hover:text-indigo-600 transition-colors">E-commerce</h3>
            <p class="text-gray-600 text-center leading-relaxed">Lojas virtuais completas com catálogo de produtos, carrinho de compras, pagamentos online e gestão de pedidos.</p>
          </div>

          <!-- Card 7: Educação -->
          <div class="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div class="relative mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14z"></path>
                </svg>
              </div>
              <div class="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            <h3 class="text-xl font-bold text-tertiary mb-3 text-center group-hover:text-pink-600 transition-colors">Plataformas Educacionais</h3>
            <p class="text-gray-600 text-center leading-relaxed">LMS, sistemas de gestão escolar, plataformas de ensino online e apps para aprendizado interativo.</p>
          </div>

          <!-- Card 8: IoT e Dashboards -->
          <div class="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div class="relative mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                </svg>
              </div>
              <div class="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-teal-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            <h3 class="text-xl font-bold text-tertiary mb-3 text-center group-hover:text-teal-600 transition-colors">IoT e Dashboards</h3>
            <p class="text-gray-600 text-center leading-relaxed">Interfaces para dispositivos IoT, painéis de controle em tempo real e visualização de dados com gráficos interativos.</p>
          </div>

          <!-- Card 9: Landing Pages -->
          <div class="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div class="relative mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
              </div>
              <div class="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            <h3 class="text-xl font-bold text-tertiary mb-3 text-center group-hover:text-orange-600 transition-colors">Landing Pages</h3>
            <p class="text-gray-600 text-center leading-relaxed">Páginas de alta conversão, sites institucionais dinâmicos e páginas de captura com componentes reutilizáveis.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Badge from '~/components/Badge.vue'

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