<script lang="ts">
import { inject } from 'vue';
import TheRatings from '../TheRatings.vue';

export default {
    components: {
        TheRatings
    },
    setup() {
        const isMobile = inject('isMobile') as Boolean

        return {
            isMobile
        }
    }
}
</script>

<template>
    <section>
        <img src="../../assets/coffee shop community.jpg">
        <div :class="{'desktop-content': !isMobile, 'mobile-content': isMobile}">
            <h1>Apucome</h1>
            <h2>Egy igényes kávézó- és nasizó, kellemes atmoszférával és közösséggel</h2>

            <TheRatings></TheRatings>
        </div>
    </section>
</template>

<style scoped>
section {
    height: 40rem;
    background-size: cover;
    background-position: center;

    position: relative;
}

img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 30%;

    filter: brightness(0.8);
}

.desktop-content {
    position: absolute;
    width: 100%;
    height: 100%;

    box-sizing: border-box;
    padding: 0 10rem;
}
.mobile-content {
    position: absolute;
    width: 100%;
    height: 100%;

    box-sizing: border-box;
    padding: 0 10%;
}

h1 {
    color: white;
    text-align: left;
    font-size: 6rem;
    font-family: 'Amatic sc', sans-serif;

    margin-bottom: 0;
}

h2 {
    background-color: rgb(213, 148, 26);
    width: fit-content;
}

#the-ratings-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}
</style>