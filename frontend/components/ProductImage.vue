<script setup>
  const props = defineProps({
    product: Object
  })
  const config = useRuntimeConfig()
  const imageUrl = computed(() => {
    return `${config.API_URL}${props.product.attributes.image.data.attributes.formats.small.url}`
  })
</script>

<template>
  <div class="bg-gray-100 shadow-xl aspect-w-1 aspect-h-1">
    <img :src="imageUrl" :alt="product.attributes.title" loading="lazy" />
  </div>
</template>