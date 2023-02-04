
<template>
  <div>
    <img src="https://puxo.com.tr/assets/images/sun/logo.png" ref="puxo" alt="software">
    <h1 data-aos="flip-left" ref="time1" class="p">11/2021-10/2022</h1>
    <h1 ref="digi" class="digi" >Software Developer - Brisbane</h1>
  </div>
  <div>
    <img src="glow1.png" ref="glow1" alt="glow1">
    <h1 data-aos="flip-left" ref="time2" class="time2">10/2021-10/2022</h1>
    <h1 ref="ds" class="ds">Data Scientist - Brisbane</h1>
  </div>
    <div>
      <img src="glow2.png" ref="glow2" alt="glow2">
      <h1 data-aos="flip-left" ref="time3" class="time3">1/2023-Present</h1>
      <h1 ref="ml" class="ml">Machine Learning Engineer - Sydney</h1>
    </div>
</template>


<script>
import {TimelineLite,Back} from 'gsap';

export default {
  mounted() {
    const puxo = this.$refs.puxo
    const digi = this.$refs.digi
    const time1 = this.$refs.time1
    const time2 = this.$refs.time2
    const ds = this.$refs.ds
    const glow1= this.$refs.glow1
    const time3 = this.$refs.time3
    const ml = this.$refs.ml
    const glow2= this.$refs.glow2
    const timeline = new TimelineLite()

    timeline.to(puxo,1, {
      x: 500,
      y:200,
      rotation: 360,
      ease: Back.easeInOut, // Specify an ease
    })
    timeline.to(time1, 1, {
      x: 575,
      rotation: 0,
      ease: Back.easeInOut, // Specify an ease
    })
    timeline.to(digi, 2, {
          display: 'block'
        },
        '-=0.5' // Run the animation 0.5s early
    )
    timeline.to(glow1,1, {
      x: 600,
      y:200,
      rotation: 360,
      ease: Back.easeInOut, // Specify an ease
    })
    timeline.to(time2, 1, {
      x: 600,
      rotation: 0,
      ease: Back.easeInOut, // Specify an ease
    })
    timeline.to(ds, 2, {
          display: 'block'
        },
        '-=0.5' // Run the animation 0.5s early
    )
    timeline.to(glow2,1, {
      x: 650,
      y:200,
      rotation: 360,
      ease: Back.easeInOut, // Specify an ease
    })
    timeline.to(time3, 1, {
      x: 650,
      rotation: 0,
      ease: Back.easeInOut, // Specify an ease
    })
    timeline.to(ml, 2, {
          display: 'block'
        },
        '-=0.5' // Run the animation 0.5s early
    )
  }
}
</script>


<style scoped>
@import url('https://fonts.cdnfonts.com/css/technology');

.puxo {
  height: 60px;
  width: 60px;
  background: red;
}

body {
  background: #1a1a1a;
}

.p{
  color: #0994AE;
  margin-left: 100px;
}
.time2{
  color: #cd8a36;
  margin-left: 100px;
}
.time3{
  color: #ff5757;
  margin-left: 100px;
}
h1{
  font-family: 'Technology', sans-serif;
}
.digi{
  color: White;
  position: absolute;
  left: 40%;
  /*top: 300px;*/
  display: none;
}
.ds{
  color: White;
  position: absolute;
  left: 43%;
  /*top: 300px;*/
  display: none;
}
.ml{
  color: White;
  position: absolute;
  left: 46%;
  /*top: 300px;*/
  display: none;
}
</style>