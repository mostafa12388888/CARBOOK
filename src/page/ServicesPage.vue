<template>
    <BgContainer title="Services" bgImage="bg_3.jpg" :links="[ {text:'Home', to:'/'},
    {text: 'Services', to:'/services'} ]" />
     <ServiceList/>
    <CallToAction/>

</template>
<script setup>
import BgContainer from "../components/composible/BgContainer.vue";
import CallToAction from '../components/homePage/CallToAction.vue'
import ServiceList from '../components/homePage/ServiceList.vue'
</script>