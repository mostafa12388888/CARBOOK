<template>
  <section
    class="bg-cover relative h-screen"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <div class="absolute inset-0 bg-black opacity-25"></div>
    <div
      class="relative flex items-center justify-center flex-wrap h-full text-center text-white px-4"
    >
      <div
        class="w-full md:w-3/5 content-wrapper"
        :class="{'animate-in': isVisible}"
      >
        <h1 class="font-bold text-4xl md:text-5xl mb-4">
          Fast & Easy Way To Rent A Car
        </h1>
        <p class="text-md md:text-xl mb-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi iste
          ipsum eveniet non architecto, delectus doloremque nesciunt, ex
          aspernatur iusto dicta asperiores
        </p>
        <h2 class="text-2xl">Easy Steps for renting a car</h2>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted,ref,onBeforeUnmount   } from "vue";
import bgImage from "../../assets/images/bg_1.jpg";
const isVisible=ref(false)
onMounted(() => {
  const setTime = setTimeout(() => {
    isVisible.value = true;
  }, 100);

  // Optionally, if you want to clear the timeout on unmount or any other condition:
  onBeforeUnmount(() => {
    clearTimeout(setTime);
  });
});

</script>
<style>
.content-wrapper{
  transform:translateY(80px) ;
  opacity: 0;
  transition:all 1s eas-in-out;
}
.animate-in{
  transform:translateY(0);
  opacity: 1;
}
</style>
