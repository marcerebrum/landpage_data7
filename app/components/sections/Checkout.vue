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
        <!-- Checkout Content -->
        <div class="animate-fade-in">
          <!-- Decorative Element -->
          <div class="w-24 h-24 bg-gradient-radial-secondary rounded-full mx-auto mb-8 animate-pulse-slow shadow-lg"></div>

          <!-- Badge -->
          <div class="mb-8 flex justify-center">
            <Badge text="Curso em gravação" />
          </div>

          <!-- Main Title -->
          <h2 class="font-primary text-5xl md:text-6xl font-bold text-tertiary mb-8 leading-tight">
            Garanta seu acesso com desconto exclusivo!
          </h2>

          <!-- Subtitle -->
          <p class="font-primary text-xl md:text-2xl text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
            Enquanto o curso estiver em desenvolvimento, aproveite essa promoção imperdível.
          </p>

          <!-- Pricing Section -->
          <div class="mb-12">
            <div class="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              <!-- Original Price -->
              <div class="text-center">
                <p class="text-secondary text-lg mb-2">De:</p>
                <span class="font-primary text-4xl md:text-5xl font-bold text-secondary line-through">
                  R$ 1.500,00
                </span>
              </div>

              <!-- Discounted Price -->
              <div class="text-center">
                <p class="text-secondary text-lg mb-2">Por apenas:</p>
                <span class="font-primary text-5xl md:text-6xl font-bold text-tertiary">
                  R$ 500,00
                </span>
                <p class="text-secondary text-lg mt-2">ou 10x de R$ 50,00</p>
              </div>
            </div>

            <!-- Promotion Highlight -->
            <div class="bg-secondary/10 border border-secondary/30 rounded-lg p-6 max-w-2xl mx-auto">
              <p class="font-primary text-xl text-tertiary font-semibold mb-2">
                🔥 Promoção por tempo limitado!
              </p>
              <p class="text-secondary">
                Aproveite o desconto enquanto o curso está em gravação. Preço final será R$ 1.500,00 após conclusão.
              </p>
            </div>
          </div>

          <!-- CTA Button -->
          <div class="flex justify-center items-center">
            <ActionButton text="GARANTIR DESCONTO AGORA" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Badge from '~/components/Badge.vue'
import ActionButton from '~/components/ActionButton.vue'
</script>
