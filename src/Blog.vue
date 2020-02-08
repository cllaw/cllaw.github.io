<template>
  <div>
    <div id="header">
      <h1>Blog</h1>
    </div>

    <div class="timeline">
      <div class="container right">
        <div class="content b2020">
          <h2>2020</h2>
          <p>Singapore, Japan</p>
        </div>
      </div>
      <div class="container left">
        <a @click="$router.push({name: 'travel2019'})">
          <div class="content b2019">
            <h2>2019</h2>
            <p>Christchurch, Papua New Guinea</p>
          </div>
        </a>
      </div>
      <div class="container right">
        <a @click="$router.push({name: 'travel'})">
          <div class="content b2018">
            <h2>2018</h2>
            <p>Queenstown, Japan, Singapore</p>
          </div>
        </a>
      </div>

      <div class="container left">
        <div class="content b2017">
          <h2>2017</h2>
          <p>Malaysia</p>
        </div>
      </div>
    </div>

    <!--<div id="second">-->
      <!--<h1>2018</h1>-->
      <!--<section id="bottom" class="works section no-padding">-->
        <!--<div class="container-fluid">-->
          <!--<div class="row no-gutter">-->
            <!--<div class="col-md-5 col-sm-6 work"><a @click="$router.push({name: 'travel'})" class="work-box"> <img src="IMG_5396-min.jpg"-->
                                                                                                                  <!--alt="">-->
              <!--<div class="overlay">-->
                <!--<div class="overlay-caption">-->
                  <!--<h5>Travel & More</h5>-->
                  <!--<p>Japan & Queenstown</p>-->
                <!--</div>-->
              <!--</div>-->
              <!--&lt;!&ndash; overlay &ndash;&gt;-->
            <!--</a></div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</section>-->
    <!--</div>-->

    <!--<div id="first">-->
      <!--<h1>2019</h1>-->
      <!--<section id="works" class="works section no-padding">-->
        <!--<div class="container-fluid">-->
          <!--<div class="row no-gutter">-->
            <!--<div class="col-md-5 col-sm-6 work"><a class="work-box"> <img src=""-->
                                                                          <!--alt="">-->
              <!--<div class="overlay">-->
                <!--<div class="overlay-caption">-->
                  <!--<h5>Coming Soon</h5>-->
                  <!--&lt;!&ndash;<p>*</p>&ndash;&gt;-->
                <!--</div>-->
              <!--</div>-->
              <!--&lt;!&ndash; overlay &ndash;&gt;-->
            <!--</a></div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</section>-->
    <!--</div>-->

    <footer class="section footer">
      <div class="footer-bottom">

          <div class="col-md-12">
            <p>© Chuan Law. All Rights Reserved</p>
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

  h1 {
    /*color: #fff;*/
    font-family: "Roboto Slab", sans-serif;
    font-size: 65px;
    font-weight: 700;
  }

  * {
    box-sizing: border-box;
  }

  /* Set a background color */
  body {
    background-color: #474e5d;
    font-family: Helvetica, sans-serif;
  }

  /* The actual timeline (the vertical ruler) */
  .timeline {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
  }

  /* The actual timeline (the vertical ruler) */
  .timeline::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: #e1e1e1;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
  }

  /* Container around content */
  .container {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;
  }

  /* The circles on the timeline */
  .container::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -2%;
    background-color: white;
    border: 4px solid #FF9F55;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }

  /* Place the container to the left */
  .left {
    left: 0;
    margin: 0;
  }

  /* Place the container to the right */
  .right {
    left: 50%;
    margin: 0;
  }

  /* Add arrows to the left container (pointing right) */
  .left::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    right: 30px;
    border: medium solid white;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent white;
  }

  /* Add arrows to the right container (pointing left) */
  .right::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: 30px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

  /* Fix the circle for containers on the right side */
  .right::after {
    left: -2%;
  }

  .b2020 {
    background-color: lightgreen;
  }

  .b2019 {
    background-color: lightsalmon;
  }

  .b2018 {
    background-color: skyblue;
  }

  .b2017 {
    background-color: lavender;
  }

  /* The actual content */
  .content {
    padding: 20px 30px;
    position: relative;
    border-radius: 6px;
  }

  /* Media queries - Responsive timeline on screens less than 600px wide */
  @media screen and (max-width: 600px) {
    /* Place the timelime to the left */
    .timeline::after {
      left: 30px;
    }

    /* Full-width containers */
    .container {
      width: 100%;
      padding-left: 70px;
      padding-right: 25px;
    }

    /* Make sure that all arrows are pointing leftwards */
    .container::before {
      left: 60px;
      border: medium solid white;
      border-width: 10px 10px 10px 0;
      border-color: transparent white transparent transparent;
    }

    /* Make sure all circles are at the same spot */
    .left::after, .right::after {
      left: 0%;
    }

    /* Make all right containers behave like the left ones */
    .right {
      left: 0%;
    }
  }
</style>
