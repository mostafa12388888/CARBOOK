<template>
  <div>
    <SectionHeading title="Featured Vechicles" description="WHAT WE OFFER" />
    <div class="w-full h-full py-10 md:py-20">
      <swiper 
      :modules="[Autoplay]"
      :space-between="30"
      navigation
      loop
      :autoplay="{delay:3000,disableOnInteraction:false}"
      :breakpoints="{
        640:{slidesPerView: 2},
        1024:{slidesPerView:3}
      }"
      class="w-4/5 drop-shadow-2xl"
      >
        <swiper-slide v-for="(car, index) in cars" :key="index">
          <CarCards :name="car.name" :brand="car.brand" :price="car.price" :image="car.image" :id="car.id" />

        </swiper-slide>
      </swiper>
    </div>
   
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay"
import SectionHeading from "../composible/SectionHeading.vue";
import CarCards from "../cards/CarCards.vue";
import { cars } from "../data/CarsData.js";
</script>
