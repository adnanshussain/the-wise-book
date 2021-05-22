import { log as ashlog } from "ashlib";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { Dropdown } from 'bootstrap';
import { createApp } from "vue";
import Layout from './Layout.vue';
import twbData from './thewisebook.json'

import router from './router';
/* RESOLVE ROUTES -- TESTING */
// router.resolve({ name: 'chapters', params: { chapters: ['a', 'b'] } }).href

createApp(Layout)
    .use(router)
    // .use(store)
    .mount('#app');

// ashlog("var vueRoot = ", vueRoot);
ashlog("TWB. Loaded.");
ashlog("TWB. Data: ", twbData);
