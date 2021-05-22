<template>
    <div class="row py-2">
        <div class="col">
            <nav
                class="navbar sticky-top navbar-expand-md navbar-dark bg-success border border-warning"
            >
                <div class="container-fluid">
                    <router-link class="navbar-brand mx-2" to="/">TWB</router-link>
                    <!-- Turn Into Vue Component -->
                    <div class="navbar-nav me-md-4">
                        <input
                            class="form-control"
                            type="search"
                            placeholder="e.g. moon / earth / Moses "
                            aria-label="Search"
                        />
                    </div>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul class="navbar-nav container-fluid">
                            <li class="nav-item">
                                <router-link class="nav-link" to="/about"
                                    >The Purpose</router-link
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: "MainMenu",
};
</script>

<style scoped>
.row .col {
    direction: rtl;
}
</style>
