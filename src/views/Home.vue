<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
// import UserServices from "../services/UserServices.js";

onMounted(async () => {
  
});
</script>
<template>
        <header class="header">
            <div class="container position-relative">
                <div class="row justify-content-center">
                    <div class="col-xl-6">
                        <div class="text-center text-white">
                            <h1 class="mb-5">Travel with us...Travel with world!</h1>
                            <div class="container" style="padding:10px;">
                              <div class="row">
                                <div class="col-md-6">
                                  <div class="form-group">
                                    <input type="text" class="form-control" id="from" placeholder="Origin">
                                  </div>
                                </div>
                                <div class="col-md-6">
                                  <div class="form-group">
                                    <input type="text" class="form-control" id="to" placeholder="Destination">
                                  </div>
                                </div>
                              </div><br/>
                              <div class="row">
                                <div class="col-md-6">
                                  <div class="form-group">
                                    <input type="date" class="form-control" id="departure">
                                  </div>
                                </div>
                                <div class="col-md-6">
                                  <div class="form-group">
                                    <input type="date" class="form-control" id="return">
                                  </div>
                                </div>
                                <div class="col-md-12">
                                  <div class="form-group">
                                    <button type="submit" class="btn">Search</button>
                                  </div>
                                </div>
                              </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </header><br/>

       <section class="section-margin">
      <div class="container">
        <div class="section-intro text-center pb-80px">
          <h2>Explore Our Rooms</h2>
        </div>

        <div class="row">
          <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div class="card">
              <div class="card-image">
                <img class="card-img" src="/explore1.png" alt="">
              </div>
              <div class="card-body">
                <h3 class="card-price">$150.00 <sub>/ Per Night</sub></h3>
                <h4 class="card-title">Classic Bed Room</h4>
                <p>Beginning fourth dominion creeping god was. Beginning, which fly yieldi dry beast moved blessed </p>
                <a class="card-link" href="./place">Show More <i class="ti-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div class="card">
              <div class="card-image">
                <img class="card-img" src="/explore2.png" alt="">
              </div>
              <div class="card-body">
                <h3 class="card-price">$170.00 <sub>/ Per Night</sub></h3>
                <h4 class="card-title">Premium Room</h4>
                <p>Beginning fourth dominion creeping god was. Beginning, which fly yieldi dry beast moved blessed </p>
                <a class="card-link" href="./place">Show More <i class="ti-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div class="card">
              <div class="card-image">
                <img class="card-img" src="/explore3.png" alt="">
              </div>
              <div class="card-body">
                <h3 class="card-price">$190.00 <sub>/ Per Night</sub></h3>
                <h4 class="card-title">Family Room</h4>
                <p>Beginning fourth dominion creeping god was. Beginning, which fly yieldi dry beast moved blessed </p>
                <a class="card-link" href="./place">Show More <i class="ti-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section><br/>

    <section class="section-margin">
      <div class="container">
        <div class="section-intro text-center pb-80px">
          <h2>Events</h2>
        </div>

        <div class="row">
          <div class="col-md-6 col-lg-4 mb-4 mb-md-0">
            <div class="card ">
              <div class="div-card-image">
                <img class="card-img" src="/explore1.png" alt="">
              </div>
              <div class="card-body">
                <h4 class="card-tile">Hotel companies tipped the scales</h4>
                <p>Not thoughts all exercise blessing Indulgence way everything joy alteration boisterous the attachment party we years to order</p>
                <a class="card-link" href="./place">Show More <i class="ti-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-md-0">
            <div class="card ">
              <div class="div-card-image">
                <img class="card-img" src="/explore2.png" alt="">
              </div>
              <div class="card-body">
                <h4 class="card-tile">Try your hand inaugural industry</h4>
                <p>Not thoughts all exercise blessing Indulgence way everything joy alteration boisterous the attachment party we years to order</p>
                <a class="card-link" href="./place">Show More <i class="ti-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-md-0">
            <div class="card ">
              <div class="div-card-image">
                <img class="card-img" src="/explore3.png" alt="">
              </div>
              <div class="card-body">
                <h4 class="card-tile">Hoteliers resolve to invest in guests</h4>
                <p>Not thoughts all exercise blessing Indulgence way everything joy alteration boisterous the attachment party we years to order</p>
                <a class="card-link" href="./place">Show More <i class="ti-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section><br/>

    <section class="section-margin">
      <div class="container">
        <div class="section-intro text-center pb-80px">
          <h2>Nature</h2>
        </div>

        <div class="row">
          <div class="col-md-6 col-lg-4 mb-4 mb-md-0">
            <div class="card ">
              <div class="div-card-image">
                <img class="card-img" src="/explore1.png" alt="">
              </div>
              <div class="card-body">
                <h4 class="card-title">Hotel companies tipped the scales</h4>
                <p>Not thoughts all exercise blessing Indulgence way everything joy alteration boisterous the attachment party we years to order</p>
                <a class="card-link" href="./place">Show More <i class="ti-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-md-0">
            <div class="card ">
              <div class="div-card-image">
                <img class="card-img" src="/explore2.png" alt="">
              </div>
              <div class="card-body">
                <h4 class="card-title">Try your hand inaugural industry</h4>
                <p>Not thoughts all exercise blessing Indulgence way everything joy alteration boisterous the attachment party we years to order</p>
                <a class="card-link" href="./place">Show More <i class="ti-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-md-0">
            <div class="card ">
              <div class="div-card-image">
                <img class="card-img" src="/explore3.png" alt="">
              </div>
              <div class="card-body">
                <h4 class="card-title">Hoteliers resolve to invest in guests</h4>
                <p>Not thoughts all exercise blessing Indulgence way everything joy alteration boisterous the attachment party we years to order</p>
                <a class="card-link" href="./place">Show More <i class="ti-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section><br/><br/>
    <div class="row justify-content-center">
        <div class="col-md-2">
         <a href="./places"><button type="button" class="btn btn-warning show-more-button" >Show More</button></a>
        </div>
    </div><br/><br/>
</template>

<style scoped>
.header {
  position: relative;
  background-color: #343a40;
  background: url("/background.jpg") no-repeat center center;
  background-size: cover;
  padding-top: 8rem;
  padding-bottom: 8rem;
}
a {
  color: white;
}
.md-5 {
  color:white;
  margin-top:100px;
}
.btn {
  color:white;margin-top:25px;width:100%;background-color:#555;
}
.card-explore__title {
  color: black;
}
.card-link {
  color: black;
}
.show-more-button {
  width:300px;height:50px;color:white;background-color:#555;
}
</style>