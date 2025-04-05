<template>
  <div class="relative w-full md:h-screen overflow-hidden ">
    <div
      class="sm:absolute bg-[#10b981] w-full  sm:w-2/3 md:h-[92%] top-0 right-0"
    >
      <div class="sm:absolute -inset-x-1/3  inset-y-20 mb-4 md:mb-0">
        <img
          src="../../assets/images/about.jpg"
          class="md:max-w-[32rem] h-auto object-cover"
          alt=""
        />
      </div>
      <div class="text-white px-4 sm:absolute right-1/5 w-1/2 sm:transform  sm:top-2/4 sm:-translate-y-2/3">
        <h2 class="text-sm text-semibold uppercase tracking-wide">About us</h2>
        <h1 class="text-2xl sm:text-4xl font-semibold mb-4">Welcome to CarBook</h1>
        <p class="text-base mb-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione sed
          veritatis recusandae. Expedita at possimus quod aspernatur a!
          Cupiditate corporis optio expedita totam nesciunt molestiae
          praesentium quaerat tempora aperiam ad.
        </p>
        <p class="text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione sed
          veritatis recusandae. Expedita at possimus quod aspernatur a!
          Cupiditate corporis optio expedita totam nesciunt molestiae
          praesentium quaerat tempora aperiam ad.
        </p>
        <ButtonComponent text="search-vechicle"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from "../ButtonComponent.vue"
</script>
