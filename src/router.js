import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login.vue"),
    },
    {
      path: "/trips",
      name: "trips",
      component: () => import("./views/TripList.vue"),
    },
    {
      path: "/sightseeing",
      name: "sightseeing",
      component: () => import("./views/SightList.vue"),
    },
    {
      path: "/events",
      name: "events",
      component: () => import("./views/EventList.vue"),
    },
    {
      path: "/hotels",
      name: "hotels",
      component: () => import("./views/HotelList.vue"),
    },
    {
      path: "/place/:id",
      name: "place",
      component: () => import("./views/Place.vue"),
    },
    {
      path: "/trip/:id",
      name: "trip",
      component: () => import("./views/Trip.vue"),
    },
    {
      path: "/bookings",
      name: "bookings",
      component: () => import("./views/Bookings.vue"),
    }
  ],
});

export default router;
