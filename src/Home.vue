<template>
  <div>
    <div id="head">
      <img src="./assets/profile.jpg" height=250 width=250>
      <h1>Chuan Law</h1>
      <h2>Computer Science at University of Canterbury</h2>
      <p>Christchurch, New Zealand</p>
    </div>

    <div id="bio">
      <h3>About Me</h3>
      <br>
      <p>I am currently in my final year of a Bachelor of Science in Computer Science (BSc) at the University of Canterbury, New Zealand. I expect to graduate at the end of 2019.
        <br>
        Along with my computer science papers, I was able to study different disciplines such as engineering, information systems and philosophy.
        I've been enjoying software and website/app development aspects of this degree the most.
      </p>
      <p>I was born in Malaysia and grew up in the city of Port Moresby, Papua New Guinea. I moved to Christchurch in 2013 for
        high school which is where I was first introduced to programming. While at Burnside High School, I was a part of
        the competitive Badminton team and an international student reading tutor. Moving to Christchurch has enabled me to pursue
        my interests in the wider world of technology and allowed me study such a fulfilling degree.
      </p>
      <p>In my free time I enjoy getting together with friends to play fighting video games. Recently I've become really
        obsessed with crime fiction movies and have been watching all the classics.
        Badminton is a longtime hobby of mine which I used to play a lot with my parents and I love watching basketball.
        I also use a lot of forms of social media but my favourite and most used platform nowadays is twitter.
      </p>
      <p>Working on this website and my blog as a small personal project and to keep me busy!</p>

      <br>
      <h4>Why I like software development:</h4>
        <p>
        <br>
        1. The Learning - I'm still amazed at how much I learn everyday from the smallest things.
        As I read documentation or implement some code or even just google an error I realised that I am always learning.
        I love the aspect of continuous learning and how it makes me always aim higher.
        <br><br>
        2. The People - I feel the most productive when I'm around other motivated individuals. The teamwork and social aspect
        of everything is what I have really come to appreciate; I love working in a team to create new things!
        <br><br>
        3. The Impact - Seeing the world shift more and more into the digital age inspires me to create things that can be
        used by many different people around the world. Knowing that what I do can make a change is very fulfilling and motivating.
        </p>
      <br>

      <h3>Skills</h3>
      <br>
      <ul class="list-inline list-icons">
        <li class="list-inline-item grow-md">
          <img src="https://icongr.am/devicon/python-original.svg?size=100">
        </li>
        <li class="list-inline-item grow-md">
          <img src="https://icongr.am/devicon/java-original-wordmark.svg?size=100">
        </li>
        <li class="list-inline-item grow-md">
          <img src="https://icongr.am/devicon/javascript-original.svg?size=100">
        </li>
        <li class="list-inline-item grow-md">
          <img src="https://icongr.am/devicon/cplusplus-original.svg?size=100">
        </li>
        <li class="list-inline-item grow-md">
          <img src="https://icongr.am/devicon/c-original.svg?size=100">
        </li>
        <li class="list-inline-item grow-md">
          <img src="https://icongr.am/devicon/php-original.svg?size=100">
        </li>
        <li class="list-inline-item grow-md">
          <img src="https://icongr.am/devicon/mysql-original-wordmark.svg?size=100">
        </li>
        <li class="list-inline-item grow-md">
          <img src="https://icongr.am/devicon/vuejs-original.svg?size=100">
        </li>
        <li class="list-inline-item grow-md">
          <img src="https://icongr.am/devicon/nodejs-original-wordmark.svg?size=100">
        </li>
        <li class="list-inline-item grow-md">
          <img src="https://icongr.am/devicon/git-original-wordmark.svg?size=100">
        </li>
        <li class="list-inline-item grow-md">
          <img src="https://icongr.am/devicon/vim-original.svg?size=100">
        </li>
      </ul>
      <p>Python, Java and Javascript are my top 3 languages and I am most comfortable working with these. I also have
        experience with all the other languages and tools displayed above. I'm looking to learn some React and Swift
        soon as I'm thinking of creating a mobile app for proper daily water intake.
        <br><br>
        Currently for my final year project, I am learning first hand about Agile development processes. I am working in a
        team of 8 people and we follow the Scrum methodology with our own scrum master and product owner.
      </p>
      <br>

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
      <h3>Contact</h3>
      <div class="dash"></div>
      <br>
      <div id="quick-contact">
        <div style="text-align: left; padding-left: 35%; float: left;">
          <p>
            Email:<br><br>
            Phone:<br><br>
            Address:<br>
          </p>
        </div>
        <div style="text-align: left; padding-right: 20%; padding-left: 10%; float: left;">
          <p>
            cll62@uclive.ac.nz <br><br>
            +64 22 076 8987 <br><br>
            Christchurch, New Zealand <br>
          </p>
        </div>
        <div style="clear:both"></div>
      </div>
      <div class="dash"></div>
      <br>
      <a href="../CV/Chuan_Law_-_Resume_April.pdf" target="_blank">
        <b-button size="lg">Download my CV</b-button>
      </a> <br><br>
      <a href="https://www.linkedin.com/in/chuan-law-2aab04174" target="_blank"><i
        class="fa fa-linkedin fa-3x"></i></a>
      <a href="mailto:cll62@uclive.ac.nz" title="cll62@uclive.ac.nz"><i class="fa fa-envelope fa-3x"></i></a>
      <a href="https://github.com/cllaw" target="_blank"><i class="fa fa-github fa-3x"></i></a>
      <!--<a href="https://twitter.com/ChexBB"><i class="fa fa-twitter fa-3x"></i></a>-->

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
