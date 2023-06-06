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
      console.log("response",response.data)
    })
    .catch((error) => {
      console.log(error);
    });
}


</script>

<template>
<v-container>
  <div class="container" style="margin-top: 20px">
    <div style="display: flex; justify-content: center;">
      <h3>My Bookings</h3>
    </div>
    <br/>
    <Loading v-if="loader" />
    <div class="col-md-12 container elevation-5 orders" v-else>
      <div v-for="item in orders" :key="item.id" class="order-wrapper">
        <div class="order">
          <p> order id <strong> {{ item.id }} </strong></p>
          <p> booked At <strong> {{ item.createdAt }} </strong></p>
          <p><a class="click" :href="getTripUrl(item.itineraryId)">Click here to get Itinerary info</a></p>
        </div>
      </div>
    </div>
    <div class="text-center" v-if="!loader && orders.length === 0">
      <h4 class="text-muted">No Bookings available</h4>
      <p class="text-muted">Please look into trips.</p>
      <hr/>
    </div>
  </div>
  <br/>
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
.orders {
  padding: 30px;
}

.click {
  color: blue;
}

.order-wrapper {
  display: flex;
  justify-content: center;
}

.order {
  margin-top: 30px;
  width:70%;
  border: 2px solid black;
  padding:15px;
  margin-left: 20px;
}
</style>