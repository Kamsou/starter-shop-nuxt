.<template>
  <div>
    <div class="flex max-w-screen-md mx-auto mb-20">
      <div class="">
        <ProductImage :product="product.data" />
      </div>
      <div class="ml-4">
        <Heading tag="h2" font-style="h1">{{ product.data.attributes.title }}</Heading>
        <p class="mb-6 text-2xl text-brand-grey-600">£{{ product.data.attributes.price }}</p>
        <p class="pr-12 mb-6 text-brand-grey-400">{{ product.data.attributes.description }}</p>

        <div class="flex items-center">
          <InputField type="number" class="mr-4" min="1" v-model="quantity" />
          <Button
            class="snipcart-add-item"
            :data-item-id="product.data.id"
            :data-item-price="product.data.attributes.price"
            :data-item-description="product.data.attributes.description"
            :data-item-name="product.data.attributes.title"
            :data-item-image="imageUrl"
            :data-item-quantity="quantity"
            :modelValue="pageTitle"
            @update:modelValue="pageTitle = $event"
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
    <div class="max-w-screen-md mx-auto mb-20">
      <div class="pb-8">
        <Heading tag="h3" font-style="h3">Related products</Heading>
        <Heading tag="h2" font-style="h2">Other sick wicks</Heading>
      </div>
      <div class="grid grid-cols-2 gap-12 md:grid-cols-4">
        <ProductTeaser
          class="col-span-1"
          v-for="product in products.data"
          :key="product.id"
          :product="product"
        />
      </div>
      <div class="flex justify-center pt-12 pb-32">
        <Button theme="secondary">View the other sick wicks</Button>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const config = useRuntimeConfig();
const quantity = ref(1);
const { data: products } = await useFetch(`${config.API_URL}/api/products?populate=*`)
const { data: product } = await useFetch(`${config.API_URL}/api/products/${route.params.id}?populate=*`)
const imageUrl = computed(() => {
  if (!product.value.data) {
    return null;
  }
  return `${config.API_URL}${product.value.data.attributes.image.data.attributes.url}`
});
</script>

<style scoped>
.product-image {
  width: 545px;
}
</style>