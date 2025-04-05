<template>
  <div>
    <div>
        <SectionHeading title="Happy Clients" description="Testimonial"/>
    </div>
    <section class="py-10 md:py-20 p-4 ">
        <swiper 
        :modules="[Autoplay]"
        :space-between="30"
        
        loop
        :autoplay="{delay:3000,disableOnInteraction:false}"
        :breakpoints="{
          640:{slidesPerView: 2},
          1024:{slidesPerView:3}
        }"
        class="w-full max-w-5xl"
        >
          <swiper-slide v-for="(testimony, index) in testimonies" :key="index">
            <TestimonyCard 
            :name="testimony.name"
            :position="testimony.position"
            :comment="testimony.comment"
            :image="testimony.image"
            />
          </swiper-slide>
        </swiper>
    </section>
  </div>
</template>

<script setup>
import SectionHeading from '../composible/SectionHeading.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay"
import {testimonies} from "../data/testimonyData.js"
import TestimonyCard from "../cards/TestimonyCard.vue";
</script>
