<template>
  <div>
    <hero-section/>
    <FeatureSection/>
    <AboutUs/>
    <ServiceList/>
    <CallToAction/>
    <TestimonySection/>
    <BlogSection/>
    <StatisticsSection/>
  </div>
</template>

<script setup>
 import AboutUs from '../components/homePage/AboutUs.vue';
 import BlogSection from '../components/homePage/BlogSection.vue';
import FeatureSection from '../components/homePage/FeatureSection.vue';
import HeroSection from '../components/homePage/HeroSection.vue';
import ServiceList from '../components/homePage/ServiceList.vue';
import CallToAction from '../components/homePage/CallToAction.vue';
import TestimonySection from '../components/homePage/TestimonySection.vue';
import StatisticsSection from '../components/homePage/StatisticsSection.vue';

</script>