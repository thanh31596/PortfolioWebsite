import { createApp} from 'vue';
// import router from './router/index.js'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createRouter, createWebHistory } from 'vue-router'
import TimelinePage from "@/components/MyEducation/TimelinePage";
import App from './App.vue';
// import NotFound from "@/views/NotFound";
import HomePage from "@/views/HomePage";
import ProjectView from "@/components/ProjectDisplay/ProjectView";
import WorkExperience from "@/components/MyExperience/WorkExperience";
import ContactForm from "@/components/ContactDetail/ContactForm";
import AOS from "aos";
import 'aos/dist/aos.css';
import NotFound from "@/views/NotFound";
AOS.init();
loadFonts();

const router = createRouter({
  history: createWebHistory(),
  routes:[
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/education',
      component:TimelinePage,

    },
    {
      path: '/projects',
      component: ProjectView,
    },
    {
      path: '/work',
      component: WorkExperience,
    },
    {
      path:'/test',
      component:NotFound,
    },{
      path:'/contact',
      component:ContactForm,
    }

  ],
})
const app = createApp(App);
app.use(router);

app.use(vuetify);

app.use(store);

app.mount('#app');
