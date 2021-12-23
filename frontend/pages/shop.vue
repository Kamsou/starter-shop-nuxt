<script setup>
  const { data: products } = await useFetch('http://localhost:1337/api/products')
</script>

<template>
  <div class="flex p-2 justify-center text-center">
    <div v-for="product in products.data">
      <nuxt-link :to="`/products/${product.id}`">{{ product.attributes.title }}</nuxt-link>
      <p>{{ product.attributes.description }}</p>
      <p>{{ product.attributes.price }}</p>
      {{product.attributes}}
    </div>
  </div>
</template>