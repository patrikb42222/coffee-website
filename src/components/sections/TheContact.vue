<template>
    <section>
        <div id="content" :class="{ 'align-center': isMobile }">
            <div :class="{ half: !isMobile }">
                <h1>Elérhetőségeink</h1>
                <h3>Tel.: +36 20 000 0000</h3>
                <h3>Email: email@gmail.com</h3>
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

    background-image: url('../../assets/contact.jpg');
    background-size: cover;
    background-position: 100% 100%;
}

.image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-position: bottom;
}

@media (max-width:1200px) {
    h1 {
        font-size: 2.5rem;
    }
}
</style>
