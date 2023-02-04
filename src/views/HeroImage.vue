<template>
<!--  <v-container fluid>-->
<!--    <v-row>-->
<!--      <v-col>-->
<!--        <v-img class="hero-image" src="../assets/porfolio.png" contain></v-img>-->
<!--      </v-col>-->
<!--    </v-row>-->
<!--  </v-container>-->

    <div class="hero-image" >
      <div>

          <h1 @click="warnDisabled" data-aos="fade-in"  class="text1">{{text1}}</h1>

          <p data-aos="fade-in"   class="subtext1">"A full-stack developer who prioritizes
            optimization and organization in his work"</p>

          <h1 data-aos="fade-out"   class="text2">Data Scientist</h1>

        <p  data-aos="fade-out"  class="subtext2">"Aspired Data Scientist with business-driven focus"</p>

      </div>

      <menu-button></menu-button>

    </div>


</template>

<script>
import MenuButton from "@/components/layout/MenuButton";
export default {
  components: {MenuButton},

  data(){
    return{
      text1: "<Software Engineer/>",
      disabled: false,
    };
  },
  methods: {
    warnDisabled() {
      this.disabled = true
      setTimeout(() => {
        this.disabled = false
      }, 2000)
    },
  }
}
</script>

<style scoped>
body, html {
  height: 100%;
  margin:0;
  padding:0;

}

/* The hero image */
.hero-image {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: url("../assets/porfolio.png");

  /* Set a specific height */
  height: 100%;
  /* Position and center the image to scale nicely on all screens */
  background-position: 90px -800px ;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  /*position: relative;*/
  display: flex;
}

/* Place text in the middle of the image */
/*.hero-text {*/
/*  text-align: center;*/
/*  position: absolute;*/
/*  top: 50%;*/
/*  left: 50%;*/
/*  transform: translate(-50%, -50%);*/
/*  color: white;*/
/*}*/
.text1{
  color:white;
  position:relative;
  top: 30%;
  left: 80%;
  text-align: left;
  /*transform: translate(-50%, -50%)*/
}
.subtext1{
  inline-size: 320px;
  overflow-wrap: break-word;
  font-style: italic;
  color:#cd8a36;
  position:relative;
  top: 30%;
  left: 80%;
  text-align: left;
  transform: translate(-50%, -50%)
}
.text2{
  color:#cd8a36;
  position:relative;
  top: 21%;
  right: -430%;
  text-align: right;
  /*transform: translate(-50%, -50%)*/
}
.subtext2{
  inline-size: 200px;
  font-style: italic;
  overflow-wrap: break-word;
   color:white;
   position:absolute;
   top: 37%;
   right: 10%;
   text-align: right;
  transform: translate(-50%, -50%)
 }

</style>