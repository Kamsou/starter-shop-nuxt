<script setup>
  const props = defineProps({
    product: Object
  })
</script>

<template>
  <article>
    <nuxt-link :to="`/products/${product.id}`" class="group">
      <ProductImage
        :product="product"
        class="mb-6 transition-transform transform shadow-xl group-hover:scale-105"
      />
      <Heading tag="h3" font-style="h4">{{ product.attributes.title }}</Heading>
      <p class="text-lg text-brand-grey-400">£{{ product.attributes.price }}</p>
    </nuxt-link>
  </article>
</template>