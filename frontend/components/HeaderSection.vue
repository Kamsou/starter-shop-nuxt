<script setup>
  const mobileMenuOpen = ref(false)
</script>

<template>
  <header class="fixed z-50 w-full py-2 top-0 bg-gray-200">
    <div class="grid items-center w-full grid-cols-12 px-4 mx-auto">
      <div class="col-span-3">
        <img src="@/assets/logo.png" class="w-24 pt-1" />
      </div>
      <div class="col-span-6">
        <Navbar class="hidden md:block" />
      </div>
      <div class="col-span-3 flex items-center justify-end">
        <CartInfo class="md:block" />
        <button title="Menu" class="p-1 ml-4" @click="mobileMenuOpen = true">
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 md:hidden text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
    <transition name="menu">
      <MobileMenu v-if="mobileMenuOpen" @close="mobileMenuOpen = false" />
    </transition>
  </header>
</template>

<style>

.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.3s ease;
}

.menu-enter-from,
.menu-enter-to {
  opacity: 0;
}

</style>