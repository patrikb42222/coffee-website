<script lang="ts">
import TheHero from '../sections/TheHero.vue';
import SocialsFloater from '../SocialsFloater.vue';
import TheWhat from '../sections/TheWhat.vue';
import LocationsSection from '../sections/LocationsSection.vue';
import ItemsGrid from '../sections/ItemsGrid.vue';
import TheContact from '../sections/TheContact.vue';
import HowCoffeeIsMade from '../sections/howcoffeeismade/HowCoffeeIsMade.vue';

export default {
    components: {
        TheHero,
        SocialsFloater,
        TheWhat,
        LocationsSection,
        ItemsGrid,
        TheContact,
        HowCoffeeIsMade
    }
}
</script>

<template>
    <SocialsFloater></SocialsFloater>
    <TheHero></TheHero>
    <TheWhat></TheWhat>
    <BaseTitle id="kavezoink">Kávézóink</BaseTitle>
    <LocationsSection></LocationsSection>
    <BaseTitle>Választék</BaseTitle>
    <ItemsGrid></ItemsGrid>
    <BaseTitle>Kapcsolat</BaseTitle>
    <TheContact></TheContact>
    <BaseTitle>Hogyan készül a kávé</BaseTitle>
    <HowCoffeeIsMade></HowCoffeeIsMade>
</template>