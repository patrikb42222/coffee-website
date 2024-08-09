<template>
    <section>
        <div :class="{ 'mobile-container': isMobile, 'desktop-container': !isMobile }">
            <div :class="{ half: isMobile }" class="cell">
                <h2>Shake</h2>
                <img class="image" src="../../assets/smoothie.jpg">
            </div>
            <div :class="{ half: isMobile }" class="cell">
                <h2>Rágcsálnivalók</h2>
                <img class="image" src="../../assets/croissant.jpg">
            </div>
            <div :class="{ half: isMobile }"class="cell">
                <h2>Jeges italok</h2>
                <img class="image" src="../../assets/ice.jpg">
            </div>
            <div :class="{ half: isMobile }" class="cell">
                <h2>Tea</h2>
                <img class="image" src="../../assets/tea.jpg">
            </div>
            <div :class="{ half: isMobile }" class="cell">
                <h2>Kávé</h2>
                <img class="image" src="../../assets/coffee.jpg">
            </div>
            <div :class="{ half: isMobile }" class="cell">
                <h2>Limonádé</h2>
                <img class="image" src="../../assets/lemonade.jpg">
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { inject } from 'vue';

export default {
    setup() {
        const isMobile = inject('isMobile') as Boolean

        return {
            isMobile
        }
    }
}
</script>

<style scoped>
.desktop-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(390px, 1fr));
    gap: 10px; /* Optional: adds space between the images */
}

@media (min-width: 1000px) {
    .desktop-container {
        grid-template-columns: repeat(3, 1fr);
    }
}

.mobile-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
}

.image {
    position: relative;

    width: 100%;
    object-fit: cover;
    aspect-ratio: 1 / 1;
    filter: brightness(0.5);
    cursor:pointer;
}

.image:hover {
    filter: brightness(1);
    transition: filter 0.5s;
}
.half {
    width: 40%;
}



h2 {
    font-family: Alice, serif;
    font-size: 3.5rem;

    position: absolute;
    text-align: center;

    pointer-events: none;

    z-index: 1;
}

@media (max-width:800px) {
    h2 {
        font-size: 2rem;
    }
}

@media (max-width:400px) {
    h2 {
        font-size: 1.5rem;
    }
}

.cell {
    display:flex;
    align-items: center;
    justify-content: center;

    position: relative;
}
</style>
