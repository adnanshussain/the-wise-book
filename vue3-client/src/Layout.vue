<template>
    <div class="container">
        <SiteHeader />

        <router-view />
    </div>
</template>

<script>
import SiteHeader from "./portal/shared/SiteHeader.vue";
export default {
    components: { SiteHeader },
    name: "Layout",
};
</script>

<style scoped>
.green-border {
    border: 1px green solid;
}
</style>
