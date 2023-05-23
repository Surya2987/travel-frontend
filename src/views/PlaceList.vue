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
           </div>
            <br/>
       <section class="section-margin">
            <div class="container">
                <div class="section-intro text-center pb-80px">
                <h2>Places</h2>
                </div>
            </div>
                <div class="row">
                <div class="col-md-6 col-lg-4 mb-4 mb-md-0">
                    <div class="card">
                    <div class="card-image-div">
                        <img class="card-img" src="explore1.png" alt="">
                    </div>
                    <div class="card-body">
                        <h4 class="card-title"><a href="#">Hotel companies tipped the scales</a></h4>
                        <p>Not thoughts all exercise blessing Indulgence way everything joy alteration boisterous the attachment party we years to order</p>
                        <a class="card-link" href="/place">Show More <i class="ti-arrow-right"></i></a>
                    </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-4 mb-md-0">
                    <div class="card">
                    <div class="card-image-div">
                        <img class="card-img" src="explore2.png" alt="">
                    </div>
                    <div class="card-body">
                        <h4 class="card-title"><a href="#">Try your hand inaugural industry</a></h4>
                        <p>Not thoughts all exercise blessing Indulgence way everything joy alteration boisterous the attachment party we years to order</p>
                        <a class="card-link" href="/place">Show More <i class="ti-arrow-right"></i></a>
                    </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-4 mb-md-0">
                    <div class="card">
                    <div class="card-image-div">
                        <img class="card-img" src="explore3.png" alt="">
                    </div>
                    <div class="card-body">
                        <h4 class="card-title"><a href="#">Hoteliers resolve to invest in guests</a></h4>
                        <p>Not thoughts all exercise blessing Indulgence way everything joy alteration boisterous the attachment party we years to order</p>
                        <a class="card-link" href="/place">Show More <i class="ti-arrow-right"></i></a>
                    </div>
                    </div>
                </div>
                </div>
            <br/>
       <div class="row">
          <div class="col-md-6 col-lg-4 mb-4 mb-md-0">
            <div class="card">
              <div class="card-image-div">
                <img class="card-img" src="explore1.png" alt="">
              </div>
              <div class="card-body">
                <h4 class="card-title"><a href="#">Hotel companies tipped the scales</a></h4>
                <p>Not thoughts all exercise blessing Indulgence way everything joy alteration boisterous the attachment party we years to order</p>
                <a class="card-link" href="/place">Show More <i class="ti-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-md-0">
            <div class="card">
              <div class="card-image-div">
                <img class="card-img" src="explore2.png" alt="">
              </div>
              <div class="card-body">
                <h4 class="card-title"><a href="#">Try your hand inaugural industry</a></h4>
                <p>Not thoughts all exercise blessing Indulgence way everything joy alteration boisterous the attachment party we years to order</p>
                <a class="card-link" href="/place">Show More <i class="ti-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-md-0">
            <div class="card">
              <div class="card-image-div">
                <img class="card-img" src="explore3.png" alt="">
              </div>
              <div class="card-body">
                <h4 class="card-title"><a href="#">Hoteliers resolve to invest in guests</a></h4>
                <p>Not thoughts all exercise blessing Indulgence way everything joy alteration boisterous the attachment party we years to order</p>
                <a class="card-link" href="/place">Show More <i class="ti-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
    </section><br/>
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