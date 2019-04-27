<template>
  <div>
    <div id="second">
      <h1>2018</h1>
      <section id="bottom" class="works section no-padding">
        <div class="container-fluid">
          <div class="row no-gutter">
            <div class="col-md-5 col-sm-6 work"><a @click="$router.push({name: 'travel'})" class="work-box"> <img src="./assets/IMG_5396-min.jpg"
                                                                                                                  alt="">
              <div class="overlay">
                <div class="overlay-caption">
                  <h5>Travel & More</h5>
                  <p>Japan & Queenstown</p>
                </div>
              </div>
              <!-- overlay -->
            </a></div>
          </div>
        </div>
      </section>
    </div>

    <div id="first">
      <h1>2019</h1>
      <section id="works" class="works section no-padding">
        <div class="container-fluid">
          <div class="row no-gutter">
            <div class="col-md-5 col-sm-6 work"><a class="work-box"> <img src="./assets/osaka-hotel.jpg"
                                                                          alt="">
              <div class="overlay">
                <div class="overlay-caption">
                  <h5>Coming Soon</h5>
                  <!--<p>*</p>-->
                </div>
              </div>
              <!-- overlay -->
            </a></div>
          </div>
        </div>
      </section>
    </div>

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
    name: "Blog"
  }
</script>

<style scoped>

  h1 {
    /*color: #fff;*/
    font-family: "Roboto Slab", sans-serif;
    font-size: 65px;
    font-weight: 700;
  }

  #first {
    padding-top: 1%;
    padding-bottom: 2%;
  }

  .work {
    -moz-box-shadow: 0 0 0 1px #fff;
    -webkit-box-shadow: 0 0 0 1px #fff;
    box-shadow: 0 0 0 1px #fff;

    overflow: hidden;
    position: relative;
    /*visibility: hidden;*/
    display: block;
    margin: 0 auto;
    text-align: center;
  }

  .work img {
    width: 100%;
    height: auto;
    max-height: 60vh;
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
