<template>
    <section>
        <div :class="{ 'flex-row': !isMobile, 'flex-col': isMobile }" id="container">
            <div class="half" :class="{ 'locations-text-container-mobile': isMobile, 'locations-text-container-desktop': !isMobile}">
                <div class="location" :class="{ 'narrow': isMobile }">
                    <h2>Budapest, Futó u. 3, 1082</h2>
                    <h3>Fogadás:</h3>
                    <span>Hétfő-Csütörtök: 8:00-15:00</span><br>
                    <span>Péntek: 9:00-14:00</span><br>
                    <span>Tel.: +06 20 438 6550</span><br>
                </div>
                <span id="holiday">Az ünnepi- és munkaszüneti napok nyitvatartási idejét keresd a facebook oldalunkon!</span>
            </div>
            <div class="half" :class="{ 'full-width': isMobile}">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.0495440492564!2d19.07184957672269!3d47.4889481960942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dcf619322d2b%3A0xc420825e1f189b76!2sApucome%20Hurrah%20coffee!5e0!3m2!1shu!2shu!4v1723314648684!5m2!1shu!2shu" id="map" width="600" height="600" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>            </div>
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
.locations-text-container-mobile .location span {
    font-size: 2rem;
    margin: 0 2rem;
}

@media (max-width:800px) {
  span #holiday {
    font-size: 1.5rem;
    max-width: 80%;
  }
}
</style>