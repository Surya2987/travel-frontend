<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import OrderServices from "../services/OrderServices.js";
import { ref } from "vue";
import Loading from "../components/Loading.vue";
import { getImageUrl,getTripUrl } from "../common/";


const orders = ref([]);
const loader = ref(true);
const user = ref(null);
onMounted(async () => {
  user.value = JSON.parse(localStorage.getItem("user"));
  await getOrders();
  loader.value = false;
});

async function getOrders() {
  await OrderServices.getOrders(user.value.id)
    .then((response) => {
      orders.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}


</script>

<template>
  <v-container>
      <div class="container" style="margin-top:20px">
         <div style="display: flex; justify-content: center;">
            <h3>My Bookings</h3>
        </div> <br/>
            <Loading v-if="loader" />
            <div class="col-md-12 container elevation-5 order" v-else>
              <p> order id <strong> 12345 </strong></p>
              <p> booked At <strong> 12345 </strong></p>
              <p><a class="click" :href="getTripUrl(user.id)">Click here to get Itenarary info </a></p>
            </div>
             <div class="text-center" v-if="!loader && orders.length === 0">
                <h4 class="text-muted">No Bookings available</h4>
                <p class="text-muted">Please look into trips.</p>
            </div>
      </div><br/>
  </v-container>
</template>

<style scoped>
.centered-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
.card-img {
    border-radius: 7px;
    margin-top: 10px;
}
.card-title {
    margin-top: 10px;
}
a:hover {
    color:black;
}
.place {
    cursor: pointer;
    margin-top: 20px;
}
.btn {
    color: white;
    background-color: #FE7A15;
}
.order {
  padding: 20px;
}

.click {
  color: blue;
}
</style>