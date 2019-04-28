<template>
  <div>
    <div id="header">
      <a @click="$router.push({name: 'travel'})"><h1>2018</h1></a>
    </div>

    <div class="container" id="content">
      <br>
      <h2>Queenstown</h2>
      <h3>January</h3>
      <p>Roughly 18 years since the last visit. Pretty much the first time again.</p>

      <p> Sleepy-eyed but cheery, my family and I set off down to Queenstown. I'd forgotten how much
        I missed road trips. We stopped by Lake Tekapo on the way and had lunch at a nearby salmon farm. I saw more
        ducks than salmon though to my surprise.
        <br><br/>
        Arriving in Queenstown was really cool. It's completely different from the more quiet mood of Christchurch.
        I heard more foreign languages than I heard english. Streets were sprawling with tourists, beaches decked
        out with seagulls and sunbathers and most interestingly, a queue that stretched half a street for a single
        burger shop.
        <br><br/>
        Although the town is bustling it also feels serene - a perfect union of both I feel. I probably spent most of my
        time here just staring off into Lake Wakatipu with headphones in. Definitely my favourite part of the trip.
      <br><br>
      <img src="src/assets/IMG_5206-min.JPG" style="float: left; width:100%; margin-right: 0%; margin-bottom: 0.5em;">

      <p style="clear: both;">
        <img src="src/assets/IMG_5266-min.JPG" style="float: left; width:49.5%; margin-right: 0.5%; margin-bottom: 0.5em;">
        <img src="src/assets/IMG_5396-min.jpg" style="float: left; width:49.5%; margin-left: 0.5%; margin-bottom: 0.5em;">
      <p style="clear: both;">

        <img src="src/assets/IMG_5235.GIF" style="float: left; width:49.5%; margin-right: 0.5%; margin-bottom: 0.5em;">
        <img src="src/assets/IMG_5183-min.JPG"
             style="float: left; height:70%; width:49.5%; margin-left: 0.5%; margin-bottom: 0.5em;">
      <p style="clear: both;">
      <p><br></p>

      <h2>Wanaka Lavender Farm</h2>
      <p>Bees.</p>

      <p>How I didn't get stung is beyond me. This lovely farm was my mums favourite part of the trip. I was pretty much
        her personal photographer here.

        The farm animals were very chill and the view was refreshing. Our car smelt so much like lavender for the
        rest of the day. 10/10 would recommend.
      <br><br>
      <img src="src/assets/IMG_5313-min.JPG" style="float: left; width:49.5%; margin-right: 0.5%; margin-bottom: 0.5em;">
      <img src="src/assets/IMG_5323-min.JPG" style="float: left; width:49.5%; margin-left: 0.5%; margin-bottom: 0.5em;">

      <p style="clear: both;">
        <img src="src/assets/IMG_5326-min.JPG" style="float: left; width:100%; margin-right: 5%; margin-bottom: 0.5em;">
      <p style="clear: both;">

      <h2>Mt. Cook and the Tasman Glacier</h2>

      <p>Went glacier hunting and saw a tiny iceberg that had broken away from the Tasman glacier. Was a very
        educational trip
        and I even got to touch a piece of the glacier ice! It's sad to think that it will be gone in the next couple of
        decades.
        <br><br/>
        Mt. Cook itself was a bit of a letdown due to the weather. We walked an hour and a half only to arrive at the
        viewing point with the whole mountain shrouded in clouds (bottom left picture).
        <br><br/>
        The food at the Hermitage hotel is excellent. I've had my latest 'best steak ever' from here. However we sadly
        missed
        out on the night sky stargazing on both days. The general scenery from everywhere on the resort was surreal.
        Waking up to giants topped with snow stretching as far as you can see is something else.
        <br>

        <img src="src/assets/IMG_5568-min.jpg" style="float: left; width:100%; margin-right: 0.5%; margin-bottom: 0.5em;">
      <p style="clear: both;">

        <img src="src/assets/IMG_5574-min.jpg" style="float: left; width:49.5%; margin-right: 0.5%; margin-bottom: 0.5em;">
        <img src="src/assets/IMG_5598-min.jpg" style="float: left; width:49.5%; margin-left: 0.5%; margin-bottom: 0.5em;">
      <p style="clear: both;">

        <img src="src/assets/IMG_5451-min.jpg" style="float: left; width:49.5%; margin-right: 0.5%; margin-bottom: 0.5em;">
        <img src="src/assets/IMG_5471-min.jpg" style="float: left; width:49.5%; margin-left: 0.5%; margin-bottom: 0.5em;">
      <p><br></p>
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
    name: "Queenstown"
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
