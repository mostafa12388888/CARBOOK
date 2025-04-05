<template>
  <header
    :class="handleClass"
    class="flex justify-center px-6 py-2 z-50 fixed w-full top-0 bg-white drop-shadow-sm"
  >
    <div class="w-full flex justify-between item-center md:w-5/6 md:relative">
      <div>
        <page-logo />
      </div>
      <nav class="space-x-6 hidden md:flex">
        <router-link
          v-for="link in links"
          :key="link.id"
          :to="link.path"
          class="font-bold"
          :class="route.path === link.path ? 'text-[#10b981]' : isScrolled?'text-black':'text-white'"
          >{{ link.name }}</router-link
        >
      </nav>
      <!-- mobile Hamburger menu -->
      <div class="flex md:hidden">
        <button @click="toggleMenu" class="cursor-pointer text-gray-800 focus:outline-none" aria-label="Toggle mobile Menu">
          <FaBarsStaggered />
        </button>
      </div>
      <div v-if="menuVisible" class="absolute shadow-lg bg-white top-16 left-0 flex flex-col w-full p-4 space-y-6" >
        <router-link
        v-for="link in links"
        :key="link.id"
        :to="link.path"
        :class="route.path === link.path ? 'text-[#10b981]' : 'text-black'"
        @click="closeMenu"
        class="font-bold"
        >{{ link.name }}</router-link
      >
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed, onBeforeMount, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { FaBarsStaggered } from "@kalimahapps/vue-icons";
import PageLogo from "../composible/PageLogo.vue";

const route = useRoute();
const isScrolled = ref(false);
const menuVisible = ref(false);
const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Pricing", path: "/pricing" },
  { name: "Cars", path: "/cars" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];
const handleClass = computed(() => ({
  "sm:bg-transparent": !isScrolled.value,
  "sm:bg-white shadow-md text-black": isScrolled.value,
  "p-4": true,
  "sm:py-10": !isScrolled,
}));
const handelSCrole = () => {
  isScrolled.value = window.scrollY > 50;
};
const toggleMenu = () =>{menuVisible.value=!menuVisible.value;}
const closeMenu = () =>{menuVisible.value=false;}
onMounted(() => {
  window.addEventListener("scroll", handelSCrole);
});
onBeforeMount(() => {
  window.removeEventListener("scroll", handelSCrole);
});
</script>
