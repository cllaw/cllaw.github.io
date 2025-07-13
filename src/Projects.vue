<template>
  <div>
    <div id="head">
      <h1>Projects</h1>
    </div>

    <div id="project-space">

      <div id="travelea">
        <h3>TravelEA</h3>
        <div style="text-align: left; padding-bottom: 2%; padding-right: 10%; float: left;">
          <img src="./assets/travelea.png" style="float: left; padding-right: 1%">
          <p>
            TravelEa is my current whole year project I am working on at university. It is a web application that is designed
            for people wanting to organise and plan trips around the world and to meet people to travel with.
            <br><br>
            The project is being developed using Play, Scala, Java, Javascript and Ebeans frameworks for a full stack web development process.
            This is still a work in progress and will be completed by the end of the year. I am working in an agile environment
            (Scrum) with a team of 8 and a scrum master and product owner.
          </p>
        </div>
        <div style="clear:both"></div>
      </div>

      <div id="auctionapi">
        <h3>Auction API & Webapp</h3>
        <div style="text-align: left; padding-bottom: 2%; padding-right: 10%; float: left;">
          <img src="./assets/auction.png" style="float: left; padding-right: 1%">
          <p>
            This project was a full stack development of an auction website similar to trademe. I developed a RESTful API with endpoints for
            functionality such as account authentication, logins, creating and editing auctions, uploading photos and more.
            This was my first experience with client server architecture and I'm happy and grateful about how much I've learned
            and how it has made me passionate about web development!
            <br><br>
            The backend server is built using Node.js and Express.js connected to a MySql database. Vue.js and
            Javascript is used to create the frontend.
            <br><br>
            <a href="https://github.com/cllaw/SENG365-API" target="_blank"><b-button size="md">Github (Backend)</b-button></a>
            <a href="https://github.com/cllaw/SENG365-Frontend" target="_blank"><b-button size="md">Github (Frontend)</b-button></a>
          </p>
        </div>
        <div style="clear:both"></div>
      </div>

      <div id="alien">
          <h3>Alien Invasion Computer Graphics</h3>
          <div style="text-align: left; padding-bottom: 2%; padding-right: 10%; float: left;">
            <img src="./assets/alien.png" style="float: left; padding-right: 1%">
            <p>
              This program is a fully computer generated scene of various models and features with an alien invasion theme
              using OpenGL and C++ frameworks. I loved this project as I was never good artistically so it was very
              enjoyable to be creative and learn how to make computers create such cool looking things.
              <br><br>
              The scene includes shadow & lighting, skyboxes & textures, generated models and timer functions that
              enabled real time animation and effects.
              <br><br>
              <a href="https://github.com/cllaw/SENG365-API" target="_blank"><b-button size="md">Github</b-button></a>
              <a href="https://docs.google.com/document/d/1FTDz0vi-IPSncXX0fMkiTeEuTeFb7y4S5Y9sGYWBDEg/edit?usp=sharing" target="_blank"><b-button size="md">Report</b-button></a>
            </p>
          </div>
        <div style="clear:both"></div>
      </div>

      <div id="ucfk">
        <h3>UCFunkit Catch Game</h3>
        <div style="text-align: left; padding-bottom: 2%; padding-right: 10%; float: left;">
          <img src="./assets/ucfk.jpg" style="float: left; padding-right: 1%">
          <p>
            A two person group project written in C. Made on a micro controller with a
            ATmega32U2 microchip. This game allows players to choose different throwing speeds
            and move where they want to throw and catch the ball. It was modelled after a paddle and catch game.
            <br><br>
            This was a very fun project to work on as it had infrared connectivity between the two micro controllers and played
            a victory sound which we generated ourselves. It also let us be creative by designing and implementing exactly
            how the game would flow on two different devices and what each display would show as the game ran.
            <br><br>
            <a href="https://github.com/cllaw/ENCE260" target="_blank"><b-button size="md">Github</b-button></a>
          </p>
        </div>
        <div style="clear:both"></div>
      </div>

      <div id="petville">
        <h3>Petville Group Project</h3>
        <div style="text-align: left; padding-bottom: 2%; padding-right: 10%; float: left;">
          <img src="./assets/pet2.png" style="float: left; padding-right: 1%">
          <p>
            A two person group project written in Java. It is modelled of the popular Tamagotchi games. In the game
            up to 3 players can own up to 3 pets and must look after them with the objective of keeping them happy
            and healthy.
            You can do this by buying food and toys to play and feed with them respectively and train them to become
            better pets.
            <br><br>
            At the end of the game, each player receives a scored based on how well they looked after their pets. The
            player with the highest score wins the game.
            <br><br>
            <a href="https://github.com/cllaw/SENG201" target="_blank"><b-button size="md">Github</b-button></a>
            <a href="https://drive.google.com/open?id=1WPm8eKKQGipZY1mRm9sJ_5u3VLkFm1kt" target="_blank"><b-button size="md">JAR</b-button></a>

          </p>
        </div>
        <div style="clear:both"></div>
      </div>

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
    padding-top: 2.5%;
    padding-bottom: 2.5%;
    background-image: url("assets/osaka-hotel.jpg");
    background-size: cover;
    min-height: 10%;
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

  #project-space {
    padding-top: 1%;
    padding-left: 25%;
    padding-right: 20%;
    text-align: left;
  }

  #project-space img{
    max-width: 30vh;
    width: 30vh;
    max-height: 30vh;
    display: block;
    margin-left: auto;
    margin-right: auto;
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

