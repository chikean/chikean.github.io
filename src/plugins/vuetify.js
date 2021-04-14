import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {customProperties: true},
        dark: false,
        themes: 
            {light: {
                primary: '1D5273',
                mark: "FDD700",
            },
            dark: {
                primary: 'FDD700', mark: '1D5273',
            }
        }
    }
});
