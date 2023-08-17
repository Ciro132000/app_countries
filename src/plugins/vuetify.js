import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#E3F4FF',
        secondary: '#676767',
        accent: '#DBDBDB',
        white: '#FFFFFF',
        info: '#009CFF',
      },
    },
  },
});
