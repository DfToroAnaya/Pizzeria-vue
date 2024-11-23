import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faBank, faBuilding, faPencil, faPhone, faPlus, faTag, faTrash, faUser, faCalendar, faIdBadge } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';




import App from './App.vue'
import router from './router'

library.add(faPhone);
library.add(faBank);
library.add(faBuilding);
library.add(faUser);
library.add(faTrash);
library.add(faPencil);
library.add(faTag);
library.add(faPlus);
library.add(faCalendar);
library.add(faIdBadge);


createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)
.use(router)
.mount('#app')
