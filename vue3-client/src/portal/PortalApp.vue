<template>
    <!-- The Public Portal inside the Layout -->
    <div class="container">
        <SiteHeader />
        <MainMenu />
        <div class="row">
            <div class="col-3 dev-border"><RightActionBar /></div>
            <div class="col twb-content-list dev-border"><AyatList /></div>
        </div>
        <SiteFooter />
    </div>
</template>

<script>
import SiteHeader from "./shared/SiteHeader.vue";
import MainMenu from "./shared/MainMenu.vue";
import SiteFooter from "./shared/SiteFooter.vue";
import RightActionBar from "./RightActionBar.vue";
import AyatList from './AyatList.vue';

export default {
    components: { MainMenu, SiteHeader, SiteFooter, RightActionBar, AyatList },
    name: "Layout",
};
</script>

<style scoped>
.container * {
    font-family: Arial, Helvetica, sans-serif;
}

.twb-content-list {
    text-align: center;
}
</style>
