<template id="navbar">

  <b-navbar toggleable="md" type="dark" :sticky=true>

    <b-navbar-brand @click="$router.push({name: 'home'})">Chuan Law</b-navbar-brand>

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav class="ml-auto">
          <b-nav-item class="btn btn-edit" @click="$router.push({name: 'home'})">About Me</b-nav-item>
          <b-nav-item class="btn btn-edit" @click="$router.push({name: 'projects'})">Projects</b-nav-item>
          <b-nav-item class="btn btn-edit" @click="$router.push({name: 'blog'})">Blog</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav>
        <b-nav-item-dropdown text="Contact" right>
          <b-dropdown-item href="mailto:cll62@uclive.ac.nz">Email</b-dropdown-item>
          <b-dropdown-item href="https://www.linkedin.com/in/chuan-law-2aab04174">LinkedIn</b-dropdown-item>
          <!--<a href="mailto:cllaw_1997@hotmail.com">Email</a>-->
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  export default {
    name: "navbar",
  }

</script>

<style scoped>

  nav {
    width: 100%;
    height: 65px;
    background: rgba(0, 0, 0, .8);
    border-top: 1px;
    border-bottom: 1px;
    /*margin-bottom: 50px;*/
  }

  nav ul {
    display: flex;
    margin: 0;
    padding: 0 5px;
    float: right;
  }

  nav ul li {
    list-style: none;
  }

  nav #__BVID__8 {
    padding: 1%
  }


  #navbar button {
    float: right;
    color: black;
  }

  nav-form {
    margin-left: auto;
    margin-right: auto;
  }

  .navigation.open {
    opacity: 0.9;
    visibility: visible;
    -moz-transition: opacity 0.5s;
    -o-transition: opacity 0.5s;
    -webkit-transition: opacity 0.5s;
    transition: opacity 0.5s;
  }
  .navigation {
    float: right;
  }
  .navigation li {
    display: inline-block;
  }
  .navigation a {
    color: rgba(255, 255, 255, 0.75);
    font-size: 13px;
    font-weight: 400;
    margin-left: 40px;
    letter-spacing: 3px;
    text-transform: uppercase;
  }
  .navigation a:hover, .navigation a.active {
    color: #fff;
  }
  .nav-toggle {
    display: none;
    height: 44px;
    overflow: hidden;
    position: fixed;
    right: 5%;
    text-indent: 100%;
    top: 32px;
    white-space: nowrap;
    width: 44px;
    z-index: 99999;
    -moz-transition: all 0.3s;
    -o-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  .nav-toggle:before, .nav-toggle:after {
    border-radius: 50%;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    -moz-transform: translateZ(0);
    -ms-transform: translateZ(0);
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -moz-backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -moz-transition-property: -moz-transform;
    -o-transition-property: -o-transform;
    -webkit-transition-property: -webkit-transform;
    transition-property: transform;
  }
  .nav-toggle:before {
    background-color: #4b1685;
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -webkit-transform: scale(1);
    transform: scale(1);
    -moz-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
  }
  .nav-toggle:after {
    background-color: #4b1685;
    -moz-transform: scale(0);
    -ms-transform: scale(0);
    -webkit-transform: scale(0);
    transform: scale(0);
    -moz-transition-duration: 0s;
    -o-transition-duration: 0s;
    -webkit-transition-duration: 0s;
    transition-duration: 0s;
  }
  .nav-toggle span {
    background-color: #fff;
    bottom: auto;
    display: inline-block;
    height: 3px;
    left: 50%;
    position: absolute;
    right: auto;
    top: 50%;
    width: 18px;
    z-index: 10;
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }
  .nav-toggle span:before, .nav-toggle span:after {
    background-color: #fff;
    content: "";
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    -moz-transform: translateZ(0);
    -ms-transform: translateZ(0);
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -moz-backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -moz-transition: -moz-transform 0.3s;
    -o-transition: -o-transform 0.3s;
    -webkit-transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
  }
  .nav-toggle span:before {
    -moz-transform: translateY(-6px) rotate(0deg);
    -ms-transform: translateY(-6px) rotate(0deg);
    -webkit-transform: translateY(-6px) rotate(0deg);
    transform: translateY(-6px) rotate(0deg);
  }
  .nav-toggle span:after {
    -moz-transform: translateY(6px) rotate(0deg);
    -ms-transform: translateY(6px) rotate(0deg);
    -webkit-transform: translateY(6px) rotate(0deg);
    transform: translateY(6px) rotate(0deg);
  }
  .nav-toggle.close-nav:before {
    -moz-transform: scale(0);
    -ms-transform: scale(0);
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  .nav-toggle.close-nav:after {
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  .nav-toggle.close-nav span {
    background-color: rgba(255, 255, 255, 0);
  }
  .nav-toggle.close-nav span:before, .nav-toggle.close-nav span:after {
    background-color: #fff;
  }
  .nav-toggle.close-nav span:before {
    -moz-transform: translateY(0) rotate(45deg);
    -ms-transform: translateY(0) rotate(45deg);
    -webkit-transform: translateY(0) rotate(45deg);
    transform: translateY(0) rotate(45deg);
  }
  .nav-toggle.close-nav span:after {
    -moz-transform: translateY(0) rotate(-45deg);
    -ms-transform: translateY(0) rotate(-45deg);
    -webkit-transform: translateY(0) rotate(-45deg);
    transform: translateY(0) rotate(-45deg);
  }

</style>
