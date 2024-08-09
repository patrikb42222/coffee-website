<template>
    <section>
        <div :class="{ 'flex-row': !isMobile, 'flex-col': isMobile }" id="container">
            <div class="half" :class="{ 'locations-text-container-mobile': isMobile, 'locations-text-container-desktop': !isMobile}">
                <div class="location" :class="{ 'narrow': isMobile }">
                    <h2>Budapest, Kávé út 41.</h2>
                    <h3>Fogadás:</h3>
                    <span>Hétfő-Szombat: 8:00-19:00</span><br>
                    <span>Vasárnap: 9:00-15:00</span><br>
                    <span>Tel.: +36 20 000 0000</span><br>
                </div>
                <span>Az ünnepi- és munkaszüneti napok nyitvatartási idejét keresd a facebook oldalunkon!</span>
            </div>
            <div class="half" :class="{ 'full-width': isMobile}">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.116385213131!2d19.043094076723534!3d47.50712459484115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc1046d4a33d%3A0x342122b8ff8f0f6e!2zT3JzesOhZ2jDoXo!5e0!3m2!1shu!2shu!4v1722869664430!5m2!1shu!2shu" id="map" width="800" height="600" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { inject } from 'vue';

export default {
    setup() {
        const isMobile = inject('isMobile') as Boolean;

        return {
            isMobile
        }
    }
}
</script>

<style scoped>
section {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;

    background-color: #FFE3CA;
}

#container {
    display: flex;
    align-items: center;
    justify-content: center;

    max-width: 80rem;
    width: 100%;
    height: 100%;
}
.location {
    width: 50%;
}
.flex-row {
    flex-direction: row;
}
.flex-col {
    flex-direction: column;
}

.half {
    background-color: white;
    flex: 1;
    aspect-ratio: 1 / 1;
}
.narrow {
    width: 80%;
}
.full-width {
    width: 100%;
}

#map {
    width: 100%;
    height: 100%;
}

.locations-text-container-desktop {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    padding: 0 2rem;
    color: black;
}
.locations-text-container-mobile {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    align-items: center;
    
    width: 100%;
    color: black;
}
.locations-text-container-mobile h2 {
    font-size: 3rem;
}
.locations-text-container-mobile h3 {
    font-size: 2rem;
}
.locations-text-container-mobile span {
    font-size: 2rem;
    margin: 0 2rem;
}
</style>