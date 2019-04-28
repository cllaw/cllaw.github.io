<template>
  <div>
    <div id="header">
      <a @click="$router.push({name: 'travel'})"><h1>2018</h1></a>
    </div>

    <div class="container" id="content">
      <br>
      <h2>Japan 日本</h2>
      <h3>April 四月</h3>
      <p><br></p>

      <h4>Tokyo 東京</h4>

      <p>It had always been my childhood dream to go to Japan. My parents would always tease or hint at bringing me one
        day. Even after all
        these years, I've still wanted to go there so much. When the plane pulled just into sight of the Tokyo coastline
        I looked out of the window and at the sunrise.
        The rising sun of the Japanese flag was so much more breath taking than I had ever imagined. Photos do not do
        this view justice. (And definately not the one I took below haha)
      </p>

      <img src="src/assets/IMG_6086.JPG" style="float: left; width:100%; margin-right: 0%; margin-bottom: 0.5em;">

      <p style="clear: both;">

        <img src="src/assets/IMG_6113-min.JPG"
             style="float: left; width:49.5%; margin-right: 0.5%; margin-bottom: 0.5em;">
        <img src="src/assets/IMG_6104-min.JPG"
             style="float: left; width:49.5%; margin-left: 0.5%; margin-bottom: 0.5em;">
      <p style="clear: both;">

        <img src="src/assets/IMG_6135-min.JPG" style="float: left; width:100%; margin-right: 0%; margin-bottom: 0.5em;">
      <p style="clear: both;">

      <p>
        My first two meals were these two delicious ramen dishes. About 400 and 600 yen respectively. ($5.00 & $8.00)
      </p>

      <img src="src/assets/IMG_6117-min.JPG"
           style="float: left; width:49.5%; margin-right: 0.5%; margin-bottom: 0.5em;">
      <img src="src/assets/IMG_6126-min.JPG" style="float: left; width:49.5%; margin-left: 0.5%; margin-bottom: 0.5em;">
      <p style="clear: both;">

      <p>
        Tokyo was just where I met up with my parents flying in from overseas. We went straight to Osaka the next day.
      </p>
      <br>

      <h4>Osaka 大阪市</h4>
      <p>
        Osaka was just an unreal blend of city night life fantastic eateries and traditional architecture. We spent a
        good 3 days here.
      </p>

      <img src="src/assets/osaka-hotel.jpg" style="float: left; width:100%; margin-right: 0%; margin-bottom: 0.5em;">

      <img src="src/assets/IMG_8801-min.JPG"
           style="float: left; width:49.5%; margin-right: 0.5%; margin-bottom: 0.5em;">
      <img src="src/assets/IMG_2406-min.JPG" style="float: left; width:49.5%; margin-left: 0.5%; margin-bottom: 0.5em;">

      <img src="src/assets/IMG_1207-min.JPG"
           style="float: left; width:49.5%; margin-right: 0.5%; margin-bottom: 0.5em;">
      <img src="src/assets/IMG_4341-min.JPG" style="float: left; width:49.5%; margin-left: 0.5%; margin-bottom: 0.5em;">

      <img src="src/assets/IMG_5452-min.JPG"
           style="float: left; width:49.5%; margin-right: 0.5%; margin-bottom: 0.5em;">
      <img src="src/assets/IMG_9048-min.JPG" style="float: left; width:49.5%; margin-left: 0.5%; margin-bottom: 0.5em;">

      <!--<h4>Osaka</h4>-->

      <!--<p>.</p>-->
      <!--<p><br></p>-->

      <!--<h4>Sapporo</h4>-->

      <!--<p>.</p>-->
      <!--<p><br></p>-->

      <!--<h4>Back to Tokyo</h4>-->
      <br>
    </div>
    <footer class="section footer">
      <div class="footer-bottom">
        <div class="container">
          <div class="col-md-12" style="text-align: center">
            <p>© Chuan Law. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "Japan"
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

  #header h1 {
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

  #content, .container {
    margin-right: auto;
    margin-left: auto;
    text-align: left;
    max-width: 70%
  }

</style>
