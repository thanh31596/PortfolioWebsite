<template>
      <div class="first" id="project">
        <v-row class="row1">
            <v-col cols="12">
              <transition-group appear
                                @before-enter="beforeEnter"
                                @enter="enter">

                  <div class="child bgColor1" key="1">
                  <v-icon color="#cd8a36" x-large class="ml-3"  key="2">
                    mdi-palette-swatch
                  </v-icon>
                  <h3  key="3" class="white--text ml-3mt-4" style="color:#cd8a36">My Projects</h3>
                  <v-btn  key="4" to="/projects" color="#cd8a36" dark>
                    Know More
                    <v-icon  key="5" right>mdi-arrow-right</v-icon>
                  </v-btn>
                </div>
              </transition-group>
              <transition-group appear
                                @before-enter="beforeEnter2"
                                @enter="enter2">
                <div class="child bgColor2" key="1">
                    <v-icon key="2" color="#1e1e1e" x-large class="ml-3">
                      mdi-shopping
                    </v-icon>
                    <h3 key="3" class="white--text ml-3mt-4" style="color:#1e1e1e">Work Experiences</h3>
                    <v-btn key="4" to="/work" color="#1e1e1e" style="color:white">
                      Know More
                      <v-icon key="5" right>mdi-arrow-right</v-icon>
                    </v-btn>
                </div>
              </transition-group>
              <transition-group appear
                                @before-enter="beforeEnter3"
                                @enter="enter3">
                <div key="1" class="child bgColor1">
                  <v-icon key="2" color="#cd8a36" x-large class="ml-3">
                    mdi-book-open-page-variant
                  </v-icon>
                  <h3 key="3" class="white--text ml-3mt-4" style="color:#cd8a36">Education</h3>

                  <v-btn key="4" to="/education" color="#cd8a36" dark >
                    Know More
                    <v-icon key="5" right>mdi-arrow-right</v-icon>
                  </v-btn>

                </div>
              </transition-group>

            </v-col>
        </v-row>
      </div>
</template>

<script>
// import { ref} from 'vue';
import gsap from 'gsap';
export default {
  name: "MenuButton",

  methods:{
    beforeEnter(el){
      el.style.opacity='1';
      el.style.transform='translateX(-500px)';
    },
    enter(el){
      gsap.to(el,{
        ease: 'bounce.out',
        duration:1.2,
        // y:0,
        x:0,
        opacity:1,
      })
    },
    beforeEnter2(el){
      el.style.opacity='1';
      el.style.transform='translateY(500px)';
    },
    enter2(el){
      gsap.to(el,{
        ease: 'bounce.out',
        duration:1.2,
        y:0,
        opacity:1,
      })
    },
    beforeEnter3(el){
      el.style.opacity='1';
      el.style.transform='translateX(500px)';
    },
    enter3(el){
      gsap.to(el,{
        ease: 'bounce.out',
        duration:1.2,
        // y:0,
        x:0,
        opacity:1,
      })
    },
  },

}
</script>

<style scoped>

.first {
  width: 100%;
  height: 0px;
  text-align: center;
  position: absolute;
  bottom: 200px;
}

.child {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-right: 8px;
}
.bgColor1 {
  background-color: #1e1e1e;
  opacity: 77%;
}
.bgColor2 {
  background-color: #cd8a36;
  opacity: 77%;
}
h1.number {
  font-size: 50px;
  font-weight: bold;
}
</style>