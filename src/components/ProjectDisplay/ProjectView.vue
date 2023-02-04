
<template>


  <div class="demoWrapper">
    <!-- Card One -->
    <div class="card box creative-pro"  style="max-width: 18rem;">
      <a href="https://play.unity.com/mg/other/web-08627?fbclid=IwAR2h4kycoGQOCFg0daO2q1N5AMFrHBiVrBIoliuxIGuO5jrY_bEk5OqQC5E" target="_blank">
        <img class="card-img-top" src="game.png"  height="86%" width="100%" alt="First">
      </a>
      <div class="card-body p-6">Survival Mobile Game

        <small class="card-clr d-block mb-3"><br>Won $20.000 for this game using Unity </small>

      </div>
    </div>


    <!-- Card Two -->

    <div class="card box creative-pro"  style="max-width: 18rem;">
      <a href="/" target="_blank">
        <img class="card-img-top" src="porfolio.png" height="500px" alt="Game">
      </a>
      <div class="card-body p-6">Portfolio Website
        <small class="card-clr d-block mb-3"><br>One Night I cannot sleep so I made this</small>
      </div>
    </div>



    <!-- Card Three -->

    <div class="card box creative-pro"  style="max-width: 18rem;">
      <a href="github.com/thanh31596" target="_blank">
        <img class="card-img-top" src="gene.png" height="500px" alt="Gene">
      </a>
      <div class="card-body p-6">CRISPR Design With Machine Learning
        <small class="card-clr d-block mb-3"><br>I performed Deep Matrix Factorization to design off-target CRISPR mRNA </small>
      </div>
    </div>

    <h2 data-aos="flip-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
        class="titles">SIDE PROJECTS</h2>
    <!-- Card Four  -->
    <div class="card box creative-pro ">
      <a href="github.com/thanh31596" target="_blank">
        <img class="card-img-top" src="xray.png" height="500px" alt="xray">
      </a>
      <div class="card-body p-6">Detect Brain Tumor using Neural Network
        <small class="card-clr d-block mb-3"><br>Utilizing VGG16 to classify the risk of brain tumors based on given x-ray images </small>

      </div>
    </div>



    <!-- Card Five -->
    <div class="card box creative-pro rounded-3x overflow-hidden w-md-50 w-lg-25">
      <a href="youtube.com" target="_blank">
        <img class="card-img-top" src="agent.png" height="500px" alt="covid">
      </a>
      <div class="card-body p-6">Agent-based Modelling for COVID19
        <small class="card-clr d-block mb-3"><br>Compartment ODE modelling (SEIR) was used to simulate and predict the spread of COVID19 in Australia </small>

      </div>
    </div>



    <!-- Card Six -->
    <div class="card box creative-pro rounded-3x overflow-hidden w-md-50 w-lg-25">
      <a href="github.com/thanh31596" target="_blank">
        <img class="card-img-top" src="twitter.png" height="500px" alt="twitter">
      </a>
      <div class="card-body p-6">Abusive Tweet Detection with Multilayer Matrix Factorization
        <small class="card-clr d-block mb-3"><br>Performed Deep Semi-Nonnegative Matrix Factorization to detect the latent factors of abusive tweets  </small>
      </div>
    </div>
  </div>

  <h2 data-aos="flip-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
      class="subtitles">Skills</h2>

  <div class="main-container">
    <div class="coverflow-container">
      <ol class="coverflow-list">
        <!-- Cover item -->
        <input type="radio" name="cover-item" id="cover-1">
        <li class="coverflow-item">
          <label for="cover-1">
            <figure class="album-cover">
              <img src="vue.png">
              <figcaption class="album-name">VueJS</figcaption>
            </figure>
          </label>
        </li>
        <!-- Cover item -->
        <input type="radio" name="cover-item" id="cover-2">
        <li class="coverflow-item">
          <label for="cover-2">
            <figure class="album-cover">
              <img src="1.png" />
              <figcaption class="album-name">Python</figcaption>
            </figure>
          </label>
        </li>
        <!-- Cover item -->
        <input type="radio" name="cover-item" id="cover-3">
        <li class="coverflow-item">
          <label for="cover-3">
            <figure class="album-cover">
              <img src="2.png">
              <figcaption class="album-name">JavaScript</figcaption>
            </figure>
          </label>
        </li>
        <!-- Cover item -->
        <input type="radio" name="cover-item" id="cover-4">
        <li class="coverflow-item">
          <label for="cover-4">
            <figure class="album-cover">
              <img src="6.png">
              <figcaption class="album-name">C#</figcaption>
            </figure>
          </label>
        </li>
        <!-- Cover item -->
        <input type="radio" name="cover-item" id="cover-5">
        <li class="coverflow-item">
          <label for="cover-5">
            <figure class="album-cover">
              <img src="3.png">
              <figcaption class="album-name">NodeJS</figcaption>
            </figure>
          </label>
        </li>
        <!-- Cover item -->
        <input type="radio" name="cover-item" id="cover-6">
        <li class="coverflow-item">
          <label for="cover-6">
            <figure class="album-cover">
              <img src="4.png">
              <figcaption class="album-name">SQL</figcaption>
            </figure>
          </label>
        </li>
        <!-- Cover item -->
        <input type="radio" name="cover-item" id="cover-7">
        <li class="coverflow-item">
          <label for="cover-7">
            <figure class="album-cover">
              <img src="5.png">
              <figcaption class="album-name">AWS</figcaption>
            </figure>
          </label>
        </li>


      </ol>
    </div>
  </div>
</template>
<script>

import {gsap} from 'gsap';
export default {
  name: "ProjectView",

  data() {

    return {

      items: [], // array of items to animate

    };

  },
  mounted() {
    const cards = gsap.utils.toArray(".creative-pro");
    const radius = 520;

    gsap.set(".demoWrapper", {
      perspective: 1100,
      transformStyle: "preserve-3d"
    });

    cards.forEach(function(element, index) {
      gsap.set(element, {
        rotationY: index * 360 / cards.length,
        transformOrigin: "50% 50% " + -radius
      });
      gsap.to(element, {
        duration: 20,
        rotationY: "-=250",
        repeat: -1,
        ease: "none"
      });
    });
  }
}
</script>

<style scoped>
/*html{*/
/*  background-color:#000;*/
/*  height: 100%;*/
/*}*/

/*body {*/
/*  height:100%;*/
/*  background-color: #000;*/

/*}*/
.titles{
  color: #00fff3;
  text-align: center;
}
.subtitles{
  color: #00fff3;
  text-align: center;
  margin-top: 20px;
}
.demoWrapper {
  width: 680px;
  height: 400px;
  -webkit-font-smoothing: antialiased;
  margin: 50px auto;
  /* padding: 1px;*/
  margin-bottom: 200px;
  /*   background-color: #000; */


}

.box {
  position: absolute;
  width: 180px;
  height: 180px;
  background-color: #06f;
  display: inline-block;
  margin: 10px 20px 50px 235px;

  overflow:hidden;
}

.creative-pro{
  border: 1px solid #00fff3;
  color: #00FFF2;
  background: transparent;
  height: 600px;
  width: 300px;

}

.creative-pro:hover{
  cursor: pointer;
  box-shadow: 0 4px 8px 0 #8d006e, 0 6px 20px 0 #8d006e;
}
.main-container {
  margin: 0 auto 0 auto;


}

.main-container .controls {
  margin: 0 auto;
  padding: 2em 0 0 0;
  text-align: center;
}

.coverflow-container {
  box-reflect: below 0px linear-gradient(to bottom, rgba(0,0,0,0) 60%,rgba(0,0,0,0.1) 100%);
}

label {
  color: #999;
  display: inline-block;
  padding: 10px;
  border: 1px solid black;
  cursor: pointer;
  background: #252525;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.9);
}

label:hover {
  color: #FFF;
}

.coverflow-list {
  width: 100%;
}

.coverflow-list .coverflow-item {
  display: inline-block;
  background: #414141;
  margin: 0 -50px;
  position: relative;
  box-shadow: 0 1px 8px rgba(0,0,0,0.9);
}

.coverflow-list .coverflow-item .album-cover {
  display: block;
  height: 150px;
  margin: 0;
}

.coverflow-list .coverflow-item .album-cover img {
  height: 150px;
  width: 150px;
  opacity: 0.5;
  background: transparent;
}

.coverflow-list .coverflow-item .album-name {
  text-align: center;
  display: block;
  color: #444;
}

.coverflow-list .coverflow-item label {
  padding: 0;
  border: none;
  display: block;
  text-shadow: none;
}

.coverflow-list {
  transform: perspective(900px);
  transform-style: preserve-3d;
  perspective-origin: 100% 30%;
}

.coverflow-list .coverflow-item {
  transition: all 0.4s ease;
  background: #212121;
  transform: rotateY(45deg);
}

input[type="radio"] {
  display: none;
}

input[type="radio"]:checked + .coverflow-item {
  transform: rotateY(0deg);
  margin: 0 auto;
  background: #313131;
  transition: all 0.4s ease;
}

input[type="radio"]:checked + .coverflow-item img {
  opacity: 1;
}

input[type="radio"]:checked + .coverflow-item figcaption {
  color: #FFFFFF;
}

input[type="radio"]:checked + .coverflow-item ~ .coverflow-item {
  transform: rotateY(-45deg);
  background: #515151;
}
</style>