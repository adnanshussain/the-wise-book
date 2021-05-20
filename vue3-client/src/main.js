import { log as ashlog } from "ashlib";
import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import Layout from './Layout.vue'

import router from './router'
/* RESOLVE ROUTES -- TESTING */
// router.resolve({ name: 'chapters', params: { chapters: ['a', 'b'] } }).href

createApp(Layout)
    .use(router)
    // .use(store)
    .mount('#app');

// ashlog("var vueRoot = ", vueRoot);
ashlog("The Wise Book. Loaded.");
