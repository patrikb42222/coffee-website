<template>
    <header id="desktop-header" v-if="!isMobile">
        <div class="menu-section">
            <nav :class="{ 'selected': selectedItem === 'home' }">Kezdőlap</nav>
            <nav>Ét & Itallap</nav>
            <nav><Icon icon="fluent:location-12-filled"></Icon>Kávézóink</nav>
        </div>
        <div class="menu-section">
            <nav class="underline"><Icon icon="fluent:shopping-bag-tag-28-filled"></Icon>Webshop</nav>
        </div>
    </header>
    <header id="mobile-header" v-else>
        <Icon class="icon" icon="fluent:line-horizontal-4-16-filled"></Icon>
    </header>
</template>

<script lang="ts">
import { inject } from 'vue';

export default {
    setup() {
        const isMobile = inject('isMobile') as Boolean
        return {
            isMobile
        }
    },
    computed: {
        selectedItem() {
            const path = this.$route.fullPath
            if (path === '/kezdolap')
                return 'home'
            if (path === '/etlap')
                return 'menu'
            if (path === '/itallap')
                return 'menu'
            if (path === '/kavezoink')
                return 'locations'

            return 'none';
        }
    },
}
</script>

<style scoped>
header {
    box-sizing: border-box;
    display: flex;
    align-items: center;


    width: 100%;
    height: 6rem;

}

#desktop-header {
    justify-content: space-between;
    padding: 0rem 4rem;
}
#mobile-header {
    justify-content: end;
    padding: 0rem 2rem;
}

div .menu-section {
    display: flex;
    justify-content: space-between;
    height: 100%;
}

nav {
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: Alice, serif;
    font-size: 1.3rem;

    padding: 0rem 2rem;
    height: 100%;
    color: #E3BCA0;
}

nav.selected {
    box-shadow: inset 0 -3px  #E3BCA0;
}

nav:hover {
    background-color: #ffffff;
    color: black;
    cursor: pointer;
}

.underline {
    text-decoration: underline;
}
.icon {
    color: #ff8d3b;
    width: 4rem;
    height: 4rem;
}
</style>