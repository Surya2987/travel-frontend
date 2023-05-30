<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import Loading from "../components/Loading.vue";
import TripServices from "../services/TripServices.js";
import { ref } from "vue";
import { getImageUrl } from "../common/";

const trips = ref([]);
const isLoading = ref(true);
onMounted(async () => {
  await getTrips();
  isLoading.value = false;
});

async function getTrips() {
  await TripServices.getTrips()
    .then((response) => {
      trips.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

</script>

<template>
  <v-container>
      <div class="container" style="margin-top:20px">
        <div class="centered-container">
            <div class="col-md-6">
                <div class="input-group rounded">
                    <input type="search" class="form-control rounded" placeholder="Search Trip" aria-label="Search" aria-describedby="search-addon" />
                    <span class="input-group-text border-0" id="search-addon">
                        <i class="fas fa-search"></i>
                    </span>
                </div>
            </div>
        </div> <br/>
         <div style="display: flex; justify-content: center;">
            <h3>Itenarary</h3>
        </div> <br/>
        <Loading v-if="isLoading" />
         <div class="text-center" v-if="!loader && trips.length == 0">
                <h4 class="text-muted">No Trips available</h4>
                <p class="text-muted">Please check back later.</p>
            </div>
        <div v-for="trip in trips" :key="trip.id" class="card col-md-12" style="height:200px;margin-bottom:20px;" v-else>
            <div class="row no-gutters">
                <div class="col-sm-5 col-md-4">
                    <img class="card-img" :src="getImageUrl(trip.imageUrl)" alt="">
                </div>
                <div class="col-sm-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ trip.title }}</h5>
                        <p class="card-text">{{ trip.description }}</p>
                        <div style="display:flex;">
                            <a href="./trip" style="margin-left: auto;">View More</a>
                        </div>
                    </div>
                </div>
            </div><br/> 
        </div>     
        </div>
  </v-container>
</template>

<style scoped>
.centered-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>