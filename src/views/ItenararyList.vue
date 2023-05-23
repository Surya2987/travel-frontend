<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

onMounted(async () => {

});

</script>

<template>
  <v-container>
      <div class="container" style="margin-top:20px">
        <div class="centered-container">
            <div class="col-md-6">
                <div class="input-group rounded">
                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <span class="input-group-text border-0" id="search-addon">
                        <i class="fas fa-search"></i>
                    </span>
                </div>
            </div>
        </div> <br/>
         <div style="display: flex; justify-content: center;">
            <h3>Itenarary</h3>
        </div> <br/>
        <div class="card col-md-12" style="height:200px">
            <div class="row no-gutters">
                <div class="col-sm-5 col-md-4">
                    <img class="card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVstmONEQm6CtW1ejlRTXOqEu2UkxR2OW1Zw&usqp=CAU" alt="">
                </div>
                <div class="col-sm-8">
                    <div class="card-body">
                        <h5 class="card-title">Itenary 1</h5>
                        <p class="card-text">Goa (/ˈɡoʊə/ (listen)) is a state on the southwestern coast of India. It is situated within the Konkan region, geographically separated from the Deccan highlands by the Western Ghats.[5][6] It is bound by the Indian states of Maharashtra to the north, and Karnataka to the east and south, wit</p>
                        <div style="display:flex;">
                            <a href="./itenarary" style="margin-left: auto;">View More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>  <br/> 
         <div class="card col-md-12" style="height:200px">
            <div class="row no-gutters">
                <div class="col-sm-5 col-md-4">
                    <img class="card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST3mlGz4sWN9xLfi9W-PFMj-iICCLeMUG2Ug&usqp=CAU" alt="">
                </div>
                <div class="col-sm-8">
                    <div class="card-body">
                        <h5 class="card-title">Itenary 1</h5>
                        <p class="card-text">Goa (/ˈɡoʊə/ (listen)) is a state on the southwestern coast of India. It is situated within the Konkan region, geographically separated from the Deccan highlands by the Western Ghats.[5][6] It is bound by the Indian states of Maharashtra to the north, and Karnataka to the east and south, wit</p>
                        <div style="display:flex;">
                            <a href="./itenarary" style="margin-left: auto;">View More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div> <br/>
         <div class="card col-md-12" style="height:200px">
            <div class="row no-gutters">
                <div class="col-sm-5 col-md-4">
                    <img class="card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST3mlGz4sWN9xLfi9W-PFMj-iICCLeMUG2Ug&usqp=CAU" alt="">
                </div>
                <div class="col-sm-8">
                    <div class="card-body">
                        <h5 class="card-title">Itenary 1</h5>
                        <p class="card-text">Goa (/ˈɡoʊə/ (listen)) is a state on the southwestern coast of India. It is situated within the Konkan region, geographically separated from the Deccan highlands by the Western Ghats.[5][6] It is bound by the Indian states of Maharashtra to the north, and Karnataka to the east and south, wit</p>
                        <div style="display:flex;">
                            <a  href="./itenarary" style="margin-left: auto;">View More</a>
                        </div>
                    </div>
                </div>
            </div>
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
