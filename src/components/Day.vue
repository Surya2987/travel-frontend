<script setup>
import { onMounted, defineProps } from "vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
import Loading from "../components/Loading.vue";
import TripServices from "../services/TripServices.js";


const router = useRouter();
const tripId = router.currentRoute.value.params.id;
const day = ref({})
const loader = ref(true);
const dayId = props.dayId;

const props = defineProps({
  dayId: Number,
});
onMounted(async () => {
  await getDayDetails();
  loader.value = false;
});

async function getDayDetails() {
  await TripServices.getDayDetailsOfTrip(tripId,dayId)
    .then((response) => {
      day.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}


</script>

<template>
  <v-container>
        <h4>Day {{ day.dayNumber}}</h4>
        <p> {{ day.description }} </p>
        <a class="btn btn-success btn-sm" href="" > Show more </a>
  </v-container>
</template>

<style scoped>

.container {
    background: white;
    padding-bottom: 30px;
}
</style>
