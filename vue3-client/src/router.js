import ashlib from 'ashlib'
import { createRouter, createWebHashHistory } from "vue-router";
import PortalApp from './portal/PortalApp.vue';

const routes = [
    { name: "publicPortal", path: "/", component: PortalApp },
    { name: "controlPanel", path: "/admin", component: () => import(/* webpackChunkName: "AdminApp" */ './admin/AdminApp.vue') },
    { name: "ourPurpose", path: "/about", component: () => import(/* webpackChunkName: "about" */ './portal/About.vue') },
    // will match everything and put it under `$route.params.pathMatch`
    {
        path: "/:pathMatch(.*)*",
        name: "pageNotFound",
        // component: { template: "<p>Invalid URL Entered !</p>" },
        component: () => import(/* webpackChunkName: "about" */ './PageNotFound.vue')
    },

    //#region
    // ==> EXAMPLE ROUTES <== //
    // will match anything starting with `/user-` and put it under `$route.params.afterUser`
    // { path: '/user-:afterUser(.*)', component: UserGeneric },

    // ==> CUSTOM REGEXP IN PARAMS <== //
    // /:orderId -> matches only numbers
    // { path: '/:orderId(\\d+)' },
    // /:productName -> matches anything else
    // { path: '/:productName' },

    // ==> REPEATABLE PARAMS <== //
    // /:chapters -> matches /one, /one/two, /one/two/three, etc
    // { path: '/:chapters+' },
    // /:chapters -> matches /, /one, /one/two, /one/two/three, etc
    // { path: '/:chapters*' },
    // only match numbers
    // matches /1, /1/2, etc
    // { path: '/:chapters(\\d+)+' },
    // matches /, /1, /1/2, etc
    // { path: '/:chapters(\\d+)*' },

    // ==> OPTIONAL PARAMS <== //
    // will match /users and /users/posva
    // { path: '/users/:userId?' },
    // will match /users and /users/42
    // { path: '/users/:userId(\\d+)?' },
    //#endregion
];

const whh = createWebHashHistory();

export default createRouter({
    history: whh,
    routes
});

// ashlib.log("WebHashHistory: ", whh);
