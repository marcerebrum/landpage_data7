<template>
  <ExpandableCard
    :title="item.title"
    :module-number="item.moduleNumber || ''"
    :description="item.description"
    :topics="item.topics"
    :icon-color-start="item.iconColorStart"
    :icon-color-end="item.iconColorEnd"
    :icon-path="item.iconPath"
  />
</template>

<script setup lang="ts">
interface FAQItem {
  title: string
  moduleNumber?: string
  description: string
  topics: string[]
  iconColorStart: string
  iconColorEnd: string
  iconPath: string
}

interface Props {
  item: FAQItem
}

const props = defineProps<Props>()
</script>