<template>
  <router-link to="/">
    <h1 class="uppercase text-xl font-bold ">
        <span :class="carClass">Car</span>
        <span class="text-green-500">Book</span>
    </h1>
  </router-link>
</template>

<script setup>
import { computed, onBeforeMount, onMounted, ref } from "vue";
const isScrolled=ref(false);
const isMobile=ref(window.innerWidth<720);
const handelSCrole=()=>{isScrolled.value=window.scrollY>50;};
const handelSize=()=>{isMobile.value=window.innerWidth<720;};
  onMounted(()=>{
    addEventListener('scroll',handelSCrole)
    addEventListener('resize',handelSize)
  })
  onBeforeMount(()=>{
    removeEventListener('scroll',handelSCrole);
    removeEventListener('resize',handelSize);
})

const carClass = computed(() => {
  return isScrolled.value || isMobile.value ?  "text-black":"text-white" ;
});
</script>