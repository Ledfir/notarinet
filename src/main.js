import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/css/styles.css'

// Font Awesome
// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Importar iconos que vas a usar
import { faUser, faHome, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

// Añadir iconos a la librería
library.add(faUser, faHome, faCoffee, faUserRegular, faFacebook, faTwitter)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
