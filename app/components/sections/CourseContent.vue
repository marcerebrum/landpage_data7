<template>
  <section
    class="py-20 bg-primary opacity-0 transition-opacity duration-1000"
    :class="{ 'opacity-100': isVisible }"
    ref="sectionRef"
  >
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-center text-center max-w-5xl mx-auto">
        <!-- Header Content -->
        <div class="mb-16">
          <div class="mb-6">
            <Badge text="Conteúdo do Curso" />
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6 font-primary">
            Tudo que você precisa aprender
          </h2>
          <p class="text-lg text-secondary max-w-2xl mx-auto leading-relaxed mb-12">
            Domine cada etapa do desenvolvimento com nossa metodologia estruturada, desde a infraestrutura até o deploy final na nuvem.
          </p>
        </div>

        <!-- Expandable Cards Grid -->
        <div class="w-full max-w-4xl mx-auto space-y-6">
          <!-- Módulo 01 - Infraestrutura -->
          <ExpandableCard
            title="Infraestrutura"
            moduleNumber="Módulo 01"
            description="Configure um ambiente de desenvolvimento completo e profissional desde o início, com todas as ferramentas necessárias para criar aplicações robustas."
            status="recorded"
            :topics="[
              'Configuração do ambiente de desenvolvimento',
              'Instalação e configuração do Node.js e npm',
              'Setup do TypeScript e Vue.js',
              'Configuração do Nuxt.js e estrutura de pastas',
              'Git e controle de versão profissional',
              'Configuração de ESLint e Prettier',
              'Setup do Tailwind CSS e componentes',
              'Ferramentas de produtividade e extensões'
            ]"
            iconColorStart="blue-500"
            iconColorEnd="blue-600"
            iconPath="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />

          <!-- Módulo 02 - Codificação com IA -->
          <ExpandableCard
            title="Codificação com IA"
            moduleNumber="Módulo 02"
            description="Aprenda a usar ferramentas de Inteligência Artificial para acelerar o desenvolvimento, gerar código de qualidade e resolver problemas complexos de forma eficiente."
            status="recorded"
            :topics="[
              'Introdução às ferramentas de IA para desenvolvimento',
              'Configuração do ChatGPT, Claude e Copilot',
              'Prompt engineering para geração de código',
              'Refatoração e otimização com IA',
              'Debugging assistido por Inteligência Artificial',
              'Criação de componentes com assistência de IA',
              'Arquitetura de software orientada por IA',
              'Melhores práticas para código gerado por IA'
            ]"
            iconColorStart="green-500"
            iconColorEnd="green-600"
            iconPath="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />

          <!-- Módulo 03 - Deploy na Vercel -->
          <ExpandableCard
            title="Deploy na Vercel"
            moduleNumber="Módulo 03"
            description="Publique seus aplicativos na nuvem com confiança, configurando deploys automatizados, domínios personalizados e monitoramento profissional."
            status="recording"
            :topics="[
              'Introdução ao Vercel e suas funcionalidades',
              'Configuração de conta e projeto no Vercel',
              'Deploy automatizado com GitHub',
              'Configuração de variáveis de ambiente',
              'Domínios personalizados e SSL',
              'Otimização de performance na nuvem',
              'Monitoramento e analytics',
              'Estratégias de rollback e versioning',
              'Integração com CMS e APIs externas',
              'Configuração de CI/CD completo'
            ]"
            iconColorStart="purple-500"
            iconColorEnd="purple-600"
            iconPath="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />

          <!-- Módulo 04 - Produção e Escalabilidade -->
          <ExpandableCard
            title="Produção e Escalabilidade"
            moduleNumber="Módulo 04"
            description="Levante sua aplicação para o nível profissional com monitoramento avançado, otimização de performance e estratégias de escalabilidade empresarial."
            status="coming-soon"
            :topics="[
              'Arquitetura de produção e microsserviços',
              'Monitoramento e observabilidade avançada',
              'Otimização de performance e caching',
              'Estratégias de backup e disaster recovery',
              'Segurança em aplicações de produção',
              'CI/CD pipelines avançados',
              'Infrastructure as Code (Terraform/CloudFormation)',
              'Load balancing e alta disponibilidade',
              'Análise de custos e otimização de recursos',
              'Deploy blue-green e canary releases'
            ]"
            iconColorStart="red-500"
            iconColorEnd="red-600"
            iconPath="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </div>

        <!-- Additional Info Section -->
        <div class="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
          <div class="flex items-center justify-center gap-3 mb-4">
            <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-black">Metodologia Prática</h3>
          </div>
          <p class="text-secondary leading-relaxed max-w-2xl mx-auto">
            Cada módulo é estruturado com <span class="text-[#13a36e] font-semibold">exercícios práticos</span>, 
            <span class="text-[#13a36e] font-semibold">projetos reais</span> e <span class="text-[#13a36e] font-semibold">aplicação imediata</span> 
            dos conceitos aprendidos, garantindo que você desenvolva habilidades sólidas e aplicáveis no mercado.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Badge from '~/components/Badge.vue'
import ExpandableCard from '~/components/ExpandableCard.vue'

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