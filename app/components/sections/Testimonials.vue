 

<template>
  <section 
    class="py-20 bg-primary opacity-0 transition-opacity duration-1000" 
    :class="{ 'opacity-100': isVisible }"
    ref="sectionRef"
  >
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-center text-center max-w-6xl mx-auto">
        <!-- Header Content -->
        <div class="mb-16">
          <div class="mb-6">
            <Badge text="Depoimentos" />
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-tertiary mb-6 font-primary">
            O que nossos alunos dizem
          </h2>
          <p class="text-lg text-secondary max-w-2xl mx-auto leading-relaxed mb-12">
            Veja como nossa metodologia transformou a carreira de centenas de desenvolvedores e empresários.
          </p>
        </div>

        <!-- Testimonials Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <!-- Dynamic Testimonials -->
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            class="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div class="flex items-center mb-6">
              <div
                class="w-16 h-16 rounded-full flex items-center justify-center mr-4"
                :class="`bg-gradient-to-br from-${testimonial.gradientFrom} to-${testimonial.gradientTo}`"
              >
                <span class="text-white font-bold text-xl">{{ testimonial.initials }}</span>
              </div>
              <div>
                <h4 class="font-bold text-tertiary">{{ testimonial.name }}</h4>
                <p class="text-sm text-gray-600">{{ testimonial.role }}</p>
              </div>
            </div>
            <div class="flex mb-4">
              <svg
                v-for="i in testimonial.rating"
                :key="i"
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            <p class="text-gray-700 leading-relaxed">
              "{{ testimonial.testimonial }}"
            </p>
            <div class="mt-4 flex items-center text-sm text-gray-500">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Cliente há {{ testimonial.customerSince }}
            </div>
          </div>
        </div>

        <!-- Call to Action Section -->
        <div class="w-full max-w-4xl mx-auto text-center">
          <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <div class="flex items-center justify-center gap-3 mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-black">Resultados Comprovados</h3>
            </div>
            <p class="text-lg text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
              Junte-se a mais de <span class="text-blue-600 font-semibold">500+ desenvolvedores e empresários</span> que já transformaram suas carreiras com nossa metodologia.
            </p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div class="flex items-center text-green-600">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span class="font-semibold">100% dos alunos aprovam</span>
              </div>
              <div class="flex items-center text-blue-600">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <span class="font-semibold">Aplicação imediata</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import Badge from '~/components/Badge.vue'
import { testimonialsData } from '~/components/testimonials/testimonialsData'

const sectionRef = ref(null)
const isVisible = ref(false)

// Use computed para manter reatividade se os dados mudarem
const testimonials = computed(() => testimonialsData)

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
