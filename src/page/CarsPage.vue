<template>
    <BgContainer title="Cars" bgImage="bg_3.jpg" :links="[ {text:'Home', to:'/'},
    {text: 'Cars', to:'/cars'} ]" />
    <div class="flex justify-center w-full my-20">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-4/5 gap-10">
            <CarCards
            v-for="(car, index) in cars" :key="index"
            :id="car.id"
            :name="car.name"
            :price="car.price"
            :image="car.image"
            :brand="car.brand"

            />
        </div>
    </div>
</template>
<script setup>
import BgContainer from "../components/composible/BgContainer.vue";
import CarCards from "../components/cards/CarCards.vue"
import { cars } from "../components/data/CarsData";
</script>