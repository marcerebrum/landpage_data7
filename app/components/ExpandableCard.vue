<template>
  <div 
    class="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl"
    :class="{ 'hover:-translate-y-1': !expanded }"
  >
    <!-- Card Header -->
    <div 
      class="p-6 cursor-pointer flex items-center justify-between"
      @click="toggleExpanded"
    >
      <div class="flex items-center gap-4">
        <!-- Module Icon -->
        <div 
          class="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          :class="`bg-gradient-to-br from-${iconColorStart} to-${iconColorEnd}`"
        >
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="iconPath"></path>
          </svg>
        </div>
        
        <!-- Module Title -->
        <div>
          <h3 class="text-xl font-bold text-black group-hover:text-blue-600 transition-colors">
            {{ title }}
          </h3>
          <p class="text-sm text-gray-500 font-medium">{{ moduleNumber }}</p>
        </div>
      </div>
      
      <!-- Expand/Collapse Icon -->
      <div class="flex-shrink-0">
        <svg 
          class="w-6 h-6 text-gray-400 transition-transform duration-300"
          :class="{ 'rotate-180': expanded }"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </div>
    
    <!-- Expandable Content -->
    <div 
      class="overflow-hidden transition-all duration-500 ease-in-out"
      :style="{ 
        maxHeight: expanded ? `${contentHeight}px` : '0px',
        opacity: expanded ? 1 : 0
      }"
    >
      <div ref="contentRef" class="px-6 pb-6">
        <div class="pt-4 border-t border-gray-100">
          <p class="text-gray-600 leading-relaxed mb-4">{{ description }}</p>
          
          <!-- Topics List -->
          <div class="space-y-2">
            <h4 class="font-semibold text-tertiary mb-3">Tópicos abordados:</h4>
            <ul class="space-y-2">
              <li 
                v-for="(topic, index) in topics" 
                :key="index"
                class="flex items-center gap-3 text-sm text-gray-600"
              >
                <div class="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                <span>{{ topic }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

interface Props {
  title: string
  moduleNumber: string
  description: string
  topics: string[]
  iconColorStart: string
  iconColorEnd: string
  iconPath: string
}

const props = defineProps<Props>()

const expanded = ref(false)
const contentRef = ref<HTMLElement>()
const contentHeight = ref(0)

const toggleExpanded = async () => {
  expanded.value = !expanded.value
  
  if (expanded.value && contentRef.value) {
    await nextTick()
    contentHeight.value = contentRef.value.scrollHeight
  }
}

onMounted(() => {
  if (contentRef.value) {
    contentHeight.value = contentRef.value.scrollHeight
  }
})
</script>