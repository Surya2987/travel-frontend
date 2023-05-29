<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

onMounted(async () => {
});

</script>

<template>
  <v-container>
     <h2>Trip</h2>
  </v-container>
</template>

<style scoped>
.container {
    margin-top:20px;background-color:white;padding:50px;
}

.image {
    width:100%;max-height:500px;
}
.show-all {
    color:white;margin-left:auto;width:100%;
}
.day-title {
    display:flex;padding:20px;border:1px black solid;border-radius:5px;
}
</style>
