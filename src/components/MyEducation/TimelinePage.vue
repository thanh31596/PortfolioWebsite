<template>
  <section class="timeline">

        <base-card>
          <ul class="listofitem">
            <li v-for="(info, index) in timeline_data" v-bind:key="index">
              <span></span>
              <div>{{ info.school }}</div>
              <div>{{ info.address }}</div>
              <div>{{ info.course }}</div>
              <div>{{ info.achievement }}</div>
              <div class="year">
                <span>{{ info.yearEnd }}</span> -
                <span>{{ info.yearStart }}</span>
              </div>
            </li>
          </ul>
        </base-card>


  </section>

</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import BaseCard from "@/components/ui/BaseCard";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "TimelinePage",
  components: {BaseCard},
  data(){
    return{

      timeline_data: [
        {
          "school":"Queensland University of Technology",
          "address": "Brisbane, Australia",
          "course":"PhD in Computer Science - Recommender System",
          "yearStart":"2022",
          "yearEnd":"2026",
          "achievement":"Fully Funded Scholarship + Stipend",
        },
        {
          "school":"Queensland University of Technology",
          "address": "Brisbane, Australia",
          "course":"Msc in Information Technology, majored in Data Science",
          "yearStart":"2020",
          "yearEnd":"2022",
          "achievement":"Dean's Lists/ GPA of Highly Distinction/ Hall Of Fame for Best Research Papers",
        },
        {
          "school":"Diplomatic Academy of Vietnam",
          "address":"Hanoi, Vietnam",
          "course":"International Economics",
          "yearStart":"2014",
          "yearEnd":"2018",
          "achievement":"Successfully graduated maybe?",
        }
      ]


    };
  }
}
</script>

<style scoped>
/*@import url("https://fonts.googleapis.com/css?family=Montserrat");*/
body {
  background-color: #fff;
}

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  color: #fff;
}
main {
  width: 32em;
  height: 100%;
  margin: 1em auto;
  padding: 40px;
  background: #cd8a36;
  border-radius: 4px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
}

.timeline {
  padding: 5px 45px;
}
.timeline ul {
  position: relative;
}
.timeline ul::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
}
.timeline li {
  position: relative;
  margin: 60px 35px;
  width: 100%;
  list-style: none;
  line-height: 25px;
}
.timeline li > span {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  left: -25px;
  height: 110%;
  border: 2px solid #fff;
  border-radius: none;
}
.timeline li > span::before, .timeline li > span::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 14px;
  height: 14px;
  border: 3px solid #fff;
  border-radius: 50%;
  left: -7px;
  background: #4e9bfa;
}
.timeline li > span::before {
  top: -15px;
}
.timeline li > span::after {
  top: 100%;
}
.timeline li div:nth-child(2) {
  font-size: 1.2em;
}
.timeline li div:nth-child(3), .timeline li div:nth-child(4) {
  font-size: 1em;
  font-style: italic;
  color: #bfbfbf;
}
</style>