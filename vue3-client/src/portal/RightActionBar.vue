<template>
    <div>
        <SearchSurahs />
        <ol class="list-group list-group-numbered">
            <li
                class="list-group-item d-flex justify-content-between align-items-start"
            >
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Subheading</div>
                    Cras justo odio
                </div>
                <span class="badge bg-primary rounded-pill">14</span>
            </li>
            <li
                class="list-group-item d-flex justify-content-between align-items-start"
            >
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Subheading</div>
                    Cras justo odio
                </div>
                <span class="badge bg-primary rounded-pill">14</span>
            </li>
            <li
                class="list-group-item d-flex justify-content-between align-items-start"
            >
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Subheading</div>
                    Cras justo odio
                </div>
                <span class="badge bg-primary rounded-pill">14</span>
            </li>
        </ol>
    </div>
</template>

<script>
import SearchSurahs from "./SearchSurahs.vue";
import { log as ashlog } from "ashlib";

// ashlog(twbData);

export default {
    name: "RightActionBar",
    components: { SearchSurahs },
    setup: () => {},
};
</script>

<style scoped>
</style>
