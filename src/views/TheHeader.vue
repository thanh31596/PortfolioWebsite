<template>

    <v-app-bar elevate-on-scroll app
               height="500px"
               color="#000000"
               dark flat class="flex px-8"
               scroll-target="#scrolling-techniques-7">

      <v-btn icon>
        <img class="mr-3" :src="require('../assets/logo_for_website.png')" height="60"/>
      </v-btn>
      <v-spacer></v-spacer>
      <v-hover v-slot="{ hover }">
        <v-btn to="/"
               class="text-header"
               @click="scroll('home')"
               :color="hover ? 'red' : 'white'">HOME</v-btn>
        <v-btn to="/projects"
               class="text-header"
               @click="scroll('projects')"
               :style="{ 'color': hover ? 'red' : 'white' }">PROJECTS</v-btn>
        <v-btn to="/contact"
               class="text-header"
               @click="scroll('contact')"
               :style="{ 'color': hover ? 'red' : 'white' }">CONTACT</v-btn>
      </v-hover>
    </v-app-bar>


</template>

<script>
export default {
  methods:{
    scroll(refName){
      const element = document.getElementById(refName);
      element.scrollIntoView({behavior:"smooth"});
    }
  }
}
</script>

<style scoped>

.mr-3 {
  margin-left: 90px;
  right: 100px;
  display: block;

}
.text-header{
  font-size: 22px;
  display: block;
}
@media (max-width: 600px){
  .mr-3{
    display: none;
  }
}

</style>