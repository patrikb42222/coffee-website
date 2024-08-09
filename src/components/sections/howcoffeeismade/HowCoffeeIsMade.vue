<template>
    <section>
        <div id="content">
            <StepSection v-for="(step, index) in processData"
                :id="index+1"
                :key="index"
                @toggle="onToggle"
                :title="step.title"
                :endnode="index === processData.length-1"
                :active="activeElement === index + 1"
            >
                <div class="info-card">{{ step.text }}</div>
            </StepSection>
        </div>
    </section>
</template>

<script lang="ts">
import StepSection from './StepSection.vue';

export default {
    components: {
        StepSection
    },
    methods: {
        onToggle(id: number) {
            if (this.activeElement === id)
                this.activeElement = null
            else
                this.activeElement = id
        }
    },
    data() {
        return {
            activeElement: null as number | null,
            processData: [
                {
                    title: 'Szüretelés',
                    text: 'A kávécseresznyéket érett állapotban szüretelik kézzel vagy géppel. Ezután feldolgozzák őket nedves (mosott) vagy száraz (természetes) módszerrel, hogy eltávolítsák a gyümölcshúst a babokról.'
                },
                {
                    title: 'Feldolgozás és Szárítás',
                    text: 'A feldolgozott kávébabokat napon vagy mechanikus szárítókban szárítják, amíg el nem érik a kívánt nedvességtartalmat (kb. 10-12%).'
                },
                {
                    title: 'Hámozás és Válogatás',
                    text: 'A szárított babokat hántolják, hogy eltávolítsák a pergamenthéjat. Ezután a babokat méret és súly szerint osztályozzák, valamint válogatják a hibás szemek eltávolítása érdekében.'
                },
                {
                    title: 'Pörkölés',
                    text: 'A tisztított kávébabokat pörkölik, hogy kialakuljon az ízük és aromájuk. A pörkölés hőmérséklete és időtartama nagyban befolyásolja a végső ízt.'
                },
                {
                    title: 'Őrlés és Csomagolás',
                    text: 'A pörkölt kávébabokat a kívánt szemcseméretre őrlik, majd vákuumcsomagolják vagy más módon lezárják, hogy megőrizzék a frissességet.'
                },
                {
                    title: 'Elkészítés',
                    text: 'Az őrölt kávét különböző módszerekkel (eszpresszó, filteres kávé, francia presszó, török kávé) készítik el a fogyasztásra.'
                },
                {
                    title: 'Fogyasztás',
                    text: 'Az elkészített kávét azonnal fogyasztják, hogy élvezhessék a friss ízeket és aromákat.'
                },
            ]
        }
    }
}
</script>

<style scoped>
section {
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-top: 4rem;
}
#content {
    display: flex;
    flex-direction: column;

    max-width: 40rem;
}

.info-card {
    box-sizing: border-box;

    font-family: 'Amatic sc';
    font-size: 2rem;
    background-color: #F1D9CB;
    color: black;
    padding: 2rem;
}
</style>