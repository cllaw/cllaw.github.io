<template>
  <div>
    <div id="head">
      <img src="./assets/profile_picture.jpg" height=250 width=250>
      <h1>Chuan Law</h1>
      <h2>Data Engineer | Masters of Artificial Intelligence</h2>
      <p>Wellington, New Zealand</p>
    </div>

    <div id="bio">
      <h3>About Me</h3>
      <br>
      <p>Hi there and welcome to my little corner of the internet!
        <br><br>
        I am a New Zealand based Data Engineer working at <a href="https://www.trademe.co.nz" target="_blank">Trade Me</a> 
        and a graduate of the <a href="https://www.wgtn.ac.nz/explore/postgraduate-programmes/master-of-artificial-intelligence/overview" target="_blank">Master of Artificial Intelligence</a> program 
        at Victoria University of Wellington. My thesis researched involved using an OpenAI inspired <a href="https://openai.com/index/evolution-strategies/" target="_blank"> evolutionary reinforcement learning</a> algorithm to optimize cost saving in geographically distributed cloud systems. 
        You can find the paper and project on <a href="https://github.com/cllaw/AIML589-RL-DDMWS/blob/master/Chuan-Law-MAI-Thesis-2024.pdf" target="_blank"> github.</a>
      </p>
      <p>This site is also where I share snapshots I’ve taken over the years and the occasional thought or reflection.</p>

      <h3>Skills</h3>
      <br>
      <ul class="list-inline list-icons">
        <li class="list-inline-item grow-md">
          <img src="https://icongr.am/devicon/python-original.svg?size=100">
        </li>
        <li class="list-inline-item grow-md">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" height=50px>
        </li>
        <li class="list-inline-item grow-md">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original-wordmark.svg" height=150px>
        </li>
        <li class="list-inline-item grow-md">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original-wordmark.svg?" height=75px>
        </li>
        <li class="list-inline-item grow-md">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg" height=50px>
        </li>
        <li class="list-inline-item grow-md">
          <img src="https://logowik.com/content/uploads/images/dbt5596.jpg" height=100px>
        </li>
      </ul>

      <p>I am an experienced cloud engineer well versed in 3 major public cloud offerings of AWS, GCP and Azure. 
      I have Terraform experience building production capable infrastructure using all three and I am cloud certified in GCP and Azure.
      </p>
      <p>As a data engineer, I am proficient with SQL and Snowflake. I have recently been upskilling in the analytics space with the use of DBT.
      </p>

      <h3>Projects</h3>
      <br>
      <p>Across my 3 years of study, I have been involved in some interesting projects. In 2018 I took one my favourite
        papers,
        Humans and Computer Interaction (COSC368). This was a very design heavy and UI/UX focused course. Our team built
        a prototype of an
        idealised car park finder application for the university and the clickable product is available <a
          href="https://invis.io/ZGOASCK4CNM" target="_blank">here.</a></p>

      <p>This is just one of my favourites from 2018. Check out my projects page to see all of my featured work!</p>
      <b-button size="nd" @click="$router.push({name: 'projects'})">View my projects</b-button>
      <br><br><br>

      <h3>Blog</h3>
      <br>
      <p>Whenever I travel (or just everyday when I see something nice) I like to take photos. It's nice just writing
        sometimes and its even nicer to
        remember the places you've visited. My blog is just a collection of some of my favourite photos and what was on
        my mind when taking them.
      </p>
      <b-button size="md" @click="$router.push({name: 'blog'})">View my blog</b-button>
    </div>

    <div id="links">
      <h3>Connect with me!</h3>
      <div class="dash"></div>
      <div id="quick-contact">
          <p>
            <a href="https://www.linkedin.com/in/chuan-law/" target="_blank"><i
              class="fa fa-linkedin fa-3x"></i></a>
            <a href="https://github.com/cllaw" target="_blank"><i class="fa fa-github fa-3x"></i></a>
          </p>
        <div style="clear:both"></div>
      </div>
      <div class="dash"></div>
      <br>
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
    name: 'home'
  }

</script>

<style scoped>

  #head {
    padding-top: 7%;
    padding-bottom: 7%;
    background-image: url("assets/IMG_3280.png");
    background-size: cover;
    min-height: 25%;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  #head img {
    border-radius: 50%;
  }

  #head h1 {
    color: #fff;
    font-family: "Roboto Slab", sans-serif;
    font-size: 65px;
    font-weight: 700;
    margin-top: 30px;
  }

  #head h2 {
    color: #fff;
    font-family: "Roboto Slab", sans-serif;
    font-size: 25px;
    font-weight: 700;
  }

  #head p {
    color: #fff;
    text-transform: uppercase;
    font-family: "Roboto Slab", sans-serif;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 24px;

  }

  #bio {
    padding-top: 1%;
    padding-left: 17.5%;
    padding-right: 17.5%;
    text-align: left;
  }

  #links {
    padding-top: 3%;
    padding-bottom: 3%;
  }

  #links p {
    display: block;
    padding: 5px;
    padding-top: 1%;
  }

  #links a {
    padding-left: 10px;
  }

  #links button, #bio button {
    background-color: #4169e1;
    border: royalblue;
    margin: 0 auto;
  }

  #links button:hover, #bio button:hover {
    background-color: #3757ae
  }

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    padding: 0;
  }

  .dash {
    padding-top: 1%;
    border-bottom: 1px solid #4169e1;
    width: 50%;
    height: 0px;
    margin: auto;
  }

</style>
