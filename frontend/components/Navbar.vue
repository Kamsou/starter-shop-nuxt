<script>
export default {
  
}
</script>

<template>
  <nav>
    <ul class="flex flex-col items-center justify-center gap-6 text-center md:flex-row">
      <li class="text-xl font-bold tracking-tighter transition-colors text-gray-800 font-heading hover:underline hover:decoration-4">
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li class="text-xl font-bold tracking-tighter transition-colors text-gray-800 font-heading hover:underline hover:decoration-4">
        <NuxtLink to="/shop">Shop</NuxtLink>
      </li>
      <li class="text-xl font-bold tracking-tighter transition-colors text-gray-800 font-heading hover:underline hover:decoration-4">
        <NuxtLink to="/contact">Contact</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

