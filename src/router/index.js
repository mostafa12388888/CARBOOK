import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/Layout/DefaultLayout.vue";
import HomePage from "../page/HomePage.vue";
import ContactPage from "../page/ContactPage.vue";
import ServicesPage from "../page/ServicesPage.vue";
import CarsPage from "../page/CarsPage.vue";
import CarsDetails from "../page/CarsDetails.vue";
import PricingPage from "../page/PricingPage.vue";
import BlogPage from "../page/BlogPage.vue";
import BlogDetails from '../page/blogDetails.vue'; 
import AboutPage from "../page/AboutPage.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "home",
        component: HomePage,
      },
      {
        path: "/contact",
        name: "contact",
        component: ContactPage,
      },
      {
        path: "/blog",
        name: "blog",
        component: BlogPage,
      },
      {
        path: "/blog/:id",
        name: "blogDetails",
        component: BlogDetails,
      },
      {
        path: "/cars",
        name: "cars",
        component: CarsPage,
      },
      {
        path: "/car/:id",
        name: "CarsDetails",
        component: CarsDetails,
      },
      {
        path: "/pricing",
        name: "pricing",
        component: PricingPage,
      },
      {
        path: "/services",
        name: "services",
        component: ServicesPage,
      },
      {
        path: "/about",
        name: "about",
        component: AboutPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return;
    {
      top: 0;
    } //scroll the top on page navigation
  },
});
export default router;
