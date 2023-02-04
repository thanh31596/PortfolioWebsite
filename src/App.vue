<template>
  <v-app :style="{background: $vuetify.theme.themes.black.background}" >
    <the-header></the-header>
    <router-view></router-view>
  </v-app>





</template>

<script>
import TheHeader from "@/views/TheHeader";
export default {
  name: 'App',
  components: {TheHeader},
}
</script>
<style>

</style>