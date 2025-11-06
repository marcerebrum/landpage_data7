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
            <Badge :text="header.badge" />
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6 font-primary">
            {{ header.title }}
          </h2>
          <p class="text-lg text-secondary max-w-2xl mx-auto leading-relaxed mb-12">
            {{ header.description }}
          </p>
        </div>

        <!-- FAQ Grid -->
        <div class="w-full max-w-4xl mx-auto space-y-6">
          <FAQItem
            v-for="(item, index) in faqItems"
            :key="index"
            :item="item"
          />
        </div>

        <!-- CTA Section -->
        <div class="mt-16 p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-100">
          <div class="flex items-center justify-center gap-3 mb-4">
            <div class="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-black">{{ cta.title }}</h3>
          </div>
          <p class="text-secondary leading-relaxed max-w-2xl mx-auto mb-6">
            {{ cta.description }}
          </p>
          <div class="flex justify-center">
            <ActionButton :text="cta.buttonText" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Badge from '~/components/Badge.vue'
import FAQItem from '~/components/FAQItem.vue'
import ActionButton from '~/components/ActionButton.vue'
import { defaultFAQItems, type FAQDataItem } from '~/components/data/faqData'

interface FAQHeader {
  badge: string
  title: string
  description: string
}

interface FAQCTA {
  title: string
  description: string
  buttonText: string
}

interface Props {
  faqItems?: FAQDataItem[]
  header?: FAQHeader
  cta?: FAQCTA
}

const props = withDefaults(defineProps<Props>(), {
  faqItems: () => defaultFAQItems,
  header: () => ({
    badge: "Perguntas Frequentes",
    title: "Tire suas dúvidas",
    description: "As perguntas mais comuns sobre nosso método de criação de SaaS com IA e como acelerar seu desenvolvimento."
  }),
  cta: () => ({
    title: "Ainda tem dúvidas?",
    description: "Nossa equipe está pronta para ajudar você a dar o primeiro passo hacia sua independência como criador de SaaS.",
    buttonText: "FALAR COM ESPECIALISTA"
  })
})

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