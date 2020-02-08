<template>
  <div>
    <div id="header" @click="$router.push({name: 'blog'})">
      <h1>2019</h1>
    </div>

    <div id="image_section">
      <section id="works" class="works section no-padding">
        <div class="container-fluid">
          <div class="row no-gutter">
            <div class="col-lg 4 col-md-6 col-sm-6 work"><h2 align="center"></h2>
              <a @click="$router.push({name: ''})" class="work-box"> <img src="/src/assets/IMG_6449.jpg" alt="">
              <div class="overlay">
                <div class="overlay-caption">
                  <h5>Christchurch</h5>
                  <!--<p>*</p>-->
                </div>
              </div>
              <!-- overlay -->
            </a></div>

            <div class="col-lg 4 col-md-6 col-sm-6 work"><h2 align="center"></h2>
              <a @click="$router.push({name: ''})" class="work-box"> <img src="/src/assets/IMG_5564.jpg" alt="">
              <div class="overlay">
                <div class="overlay-caption">
                  <h5>Papua New Guinea</h5>
                  <!--<p>*</p>-->
                </div>
              </div>
              <!-- overlay -->
            </a></div>
          </div>
        </div>
      </section>

      <section id="works2" class="works section no-padding">
        <div class="container-fluid">
          <div class="row no-gutter">
            <div class="col-lg 4 col-md-6 col-sm-6 work"><a class="work-box"> <img src="/src/assets/IMG_2928.jpg" alt="">
              <div class="overlay">
                <div class="overlay-caption">
                  <h5>Graduation</h5>
                </div>
              </div>
              <!-- overlay -->
            </a></div>


          <div class="col-lg 4 col-md-6 col-sm-6 work"><a class="work-box"> <img src="/src/assets/IMG_0523.jpg" alt="">
            <div class="overlay">
              <div class="overlay-caption">
                <h5>Family & Friends</h5>
              </div>
            </div>
            <!-- overlay -->
          </a></div>
        </div>
        </div>
      </section>



    </div>
    <br>
    <footer class="section footer">
      <div class="footer-bottom">
        <div class="container">
          <div class="col-md-12">
            <p>© Chuan Law. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "Travel2019"
  }
</script>

<style scoped>
  h1 {
    /*color: #fff;*/
    font-family: "Roboto Slab", sans-serif;
    font-size: 65px;
    font-weight: 700;
  }

  h2 {
    /*color: #fff;*/
    font-family: "Roboto Slab", sans-serif;
    font-size: 40px;
    font-weight: 700;
  }

  #header h1{
    background-image: url("/src/assets/IMG_9923.jpg");
    background-size: cover;
    min-height: 200px;
    background-repeat: no-repeat;
    background-attachment: fixed;

    color: #fff;
    font-family: "Roboto Slab", sans-serif;
    font-size: 65px;
    font-weight: 700;

    padding-top: 3%;
  }

  #image_section .container-fluid  {
    padding-left: 15%;
    padding-right: 15%;
  }

  #image_section .container-fluid img {
    max-width: 70vh;
    height: auto;
    max-height: 50vh;
  }

  .work {
    -moz-box-shadow: 0 0 0 1px #fff;
    -webkit-box-shadow: 0 0 0 1px #fff;
    box-shadow: 0 0 0 1px #fff;
    overflow: hidden;
    position: relative;
    /*visibility: hidden;*/
  }

  .work img {
    width: 100%;
    height: 100%;
    display: block;
  }

  .work .overlay {
    background: rgba(0, 0, 0, 0.4);
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
    -moz-transition: opacity, 0.3s;
    -o-transition: opacity, 0.3s;
    -webkit-transition: opacity, 0.3s;
    transition: opacity, 0.3s;
  }

  .work .overlay-caption {
    position: absolute;
    text-align: center;
    top: 50%;
    width: 100%;
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .work h5, .work p, .work img {
    -moz-transition: all, 0.5s;
    -o-transition: all, 0.5s;
    -webkit-transition: all, 0.5s;
    transition: all, 0.5s;
  }

  .work h5, .work p {
    color: #fff;
    margin: 0;
    opacity: 0;
    /*font-size: 24px;*/
  }

  .work h5 {
    margin-bottom: 5px;
    -moz-transform: translate3d(0, -200%, 0);
    -ms-transform: translate3d(0, -200%, 0);
    -webkit-transform: translate3d(0, -200%, 0);
    transform: translate3d(0, -200%, 0);
  }

  .work p {
    -moz-transform: translate3d(0, 200%, 0);
    -ms-transform: translate3d(0, 200%, 0);
    -webkit-transform: translate3d(0, 200%, 0);
    transform: translate3d(0, 200%, 0);
  }

  .work-box:hover img {
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  .work-box:hover .overlay {
    opacity: 1;
  }

  .work-box:hover .overlay h5, .work-box:hover .overlay p {
    opacity: 1;
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .work:nth-child(1) {
    -moz-animation-delay: 0.1s;
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
  }

  .work:nth-child(2) {
    -moz-animation-delay: 0.2s;
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }

  .work:nth-child(3) {
    -moz-animation-delay: 0.3s;
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }

  .work:nth-child(4) {
    -moz-animation-delay: 0.4s;
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }

  .work:nth-child(5) {
    -moz-animation-delay: 0.8s;
    -webkit-animation-delay: 0.8s;
    animation-delay: 0.8s;
  }

  .work:nth-child(6) {
    -moz-animation-delay: 0.7s;
    -webkit-animation-delay: 0.7s;
    animation-delay: 0.7s;
  }

  .work:nth-child(7) {
    -moz-animation-delay: 0.6s;
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }

  .work:nth-child(8) {
    -moz-animation-delay: 0.5s;
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
  }

  .animated {
    visibility: visible;
  }
</style>
