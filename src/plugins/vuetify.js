// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import colors from 'vuetify/lib/util/colors'
// Vuetify
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'
export default createVuetify({
  theme: {
    themes: {
      light: {          
        colors: {
          primary: "#01579B", 
          secondary: colors.grey.lighten3, 
          successColor: '#628b48',  
          warningColor: '#FFC43D',  
          errorColor: '#d74d45',  
        }
      },
    },
  },
  components,
  directives,
})