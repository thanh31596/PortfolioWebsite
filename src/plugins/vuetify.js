// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import '@fortawesome/fontawesome-free/css/all.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
// Vuetify
import { createVuetify } from 'vuetify';
export default createVuetify({
      icons:{
        iconfont:'fa' || 'md' || 'mdi',
      },
      theme:{
        themes: {
          dark:{
            background: '#111111',
          },
          black:{
            background: '#000000',
          },
          grey:{
            background: '#403C38',
          },
          yellow:{
            background:'#cd8a36',
          },
          white:{
            background:'#ffffff',
          },
        }
      }
    }
);
