<template>
  <div>
    <section class="mb-28">
      <div class="w-full mx-auto mb-12 text-center md:w-2/3 lg:w-1/3">
        <Heading tag="h2" font-style="h3">Our Pulls</Heading>
        <Heading tag="h3" font-style="h2" class="mb-2">Show me the pull</Heading>
      </div>
      <div class="flex justify-evenly">
        <ProductTeaser
          class="col-span-1"
          v-for="product in products.data"
          :key="product.id"
          :product="product"
        />
      </div>

      <div class="flex justify-center mt-10">
        <Button theme="secondary">View all the pulls</Button>
      </div>
    </section>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const { data: products } = await useFetch(`${config.API_URL}/api/products?pagination[start]=0&pagination[limit]=4&populate=*`)
</script>

<style scoped>
.header {
  height: 600px;
  /* margin-top: -106px;   */
}
/* @screen md {
  .hero-box {
    left: 10%;
    top: 175px;
    width: 485px;
  }
}
@screen md {
  .header {
    height: 700px;
  }
}
@screen md {
  .home-head-image {
    top: -110px;
    height: 770px;
    width: 100%;
  }
}
.hero-box {
  bottom: -50px;
  left: 0px;
  width: 100%;
}
@screen md {
  .hero-box {
    left: 10%;
    top: 100px;
    width: 485px;
  }
} */
</style>