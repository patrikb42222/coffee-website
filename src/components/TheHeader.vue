<template>
    <header id="desktop-header" v-if="!isMobile">
        <div class="menu-section">
            <img src="../assets/coffee-cup-brown.svg" id="logo">
            <nav :class="{ 'selected': selectedItem === 'home' }">Kezdőlap</nav>
            <nav>Ét & Itallap<Icon id="downarrow" class="rotate" icon="fluent:ios-arrow-24-regular"></Icon></nav>
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
            if (path.match(/\/kezdolap/))
                return 'home'
            if (path === '/etlap')
                return 'menu'
            if (path === '/itallap')
                return 'menu'

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
    padding: 0rem 0rem;
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
    text-wrap: nowrap;

    padding: 0rem 2rem;
    height: 100%;
    color: #E3BCA0;
}

#logo {
    width: 100%;
    height: 100%;
    color: white;

    box-sizing: border-box;
    padding: 0.5rem 1rem 1rem 1rem;
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

#downarrow {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.5rem;
    margin-bottom: 0.5rem;
}
.rotate {
    transform: rotate(-90deg);
}
</style>