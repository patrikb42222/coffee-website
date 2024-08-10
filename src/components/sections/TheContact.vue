<template>
    <section>
        <div id="content" :class="{ 'align-center': isMobile }">
            <div :class="{ half: !isMobile }">
                <h1>Elérhetőségeink</h1>
                <h3>Tel.: (20) 438 6550</h3>
                <h3>Email: fogarasilucia82@gmail.com</h3>
                <div id="socials-container">
                    <a href="https://www.instagram.com/apucome_hurrah_coffee/"><Icon class="icon" icon="mdi:instagram"></Icon></a>
                    <a href="https://www.facebook.com/apucome/"><Icon class="icon" icon="ic:baseline-facebook"></Icon></a>
                </div>
            </div>
            <div v-if="!isMobile" id="image"></div>
        </div>
    </section>
</template>

<script lang="ts">
import { inject } from 'vue';

export default {
    setup() {
        const isMobile = inject('isMobile')

        return {
            isMobile
        }
    }
}
</script>

<style scoped>
section {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 30rem;
}
#content {
    display: flex;
    width: 80%;
}
.align-center {
    justify-content: center;
    align-items: center;
}

.half {
    width: 50%;
}
#image {
    width: 50%;

    background-image: url('../../assets/table.jpg');
    background-size: cover;
    background-position: 100% 100%;
}

.image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-position: bottom;
}

#socials-container {
    width: 10rem;
}
.icon {
    width: 50%;
    height: auto;

    color: rgb(175, 135, 76);
    transition: 0.2s all;
}
.icon:hover {
    color: rgb(197, 176, 145);
}

@media (max-width:1200px) {
    h1 {
        font-size: 2.5rem;
    }
}
</style>
