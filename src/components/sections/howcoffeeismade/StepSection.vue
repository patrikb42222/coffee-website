<template>
    <section id="title-section" @click="toggleActive">
        <div id="circle-container">
            <div id="circle">
                <h1 id="id">{{ id }}</h1>
            </div>
        </div>
        <div id="title-container">
            <h1 id="title">{{ title }}</h1>
        </div>
    </section>
    <section id="content-section" :class="{ 'min-height': !endnode }">
        <div id="line-container">
            <div id="line" v-if="!endnode"></div>
        </div>
        <div id="slot-container" v-if="active"><slot></slot></div>
    </section>
</template>

<script lang="ts">
export default {
    props: {
        id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            default: 'Title',
            reqired: false
        },
        endnode: {
            type: Boolean,
            required: false,
            default: false
        },
        active: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    methods: {
        toggleActive() {
            this.$emit('toggle', this.id)
        }
    },
    emits: ['toggle']
}
</script>

<style scoped>
#title-section {
    display: flex;
    flex-direction: row;
    align-items: center;

    cursor: pointer;

    min-height: 4rem;
    padding: 1rem 2rem;
}
#title-section:hover {
    background-color: rgb(255, 255, 255);
}
#title-section:hover #title {
    color:black;
}

#title-container {
    display: flex;
    align-items: center;

    height: 4rem;
}
@media (max-width:800px) {
    #title {
        font-size: 2rem;
    }
}
#title {
    margin: 0;
    color: white;
    font-family: Oregano;
    text-wrap: nowrap;
}

#circle-container {
    position: relative;
    
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    width: 4rem;
    min-height: 4rem;
    margin-right: 4rem;
}
#circle {
    position: absolute;

    top: 0;
    background-color: #FF902B;
    border-radius: 2rem;
    width: 4rem;
    height: 4rem;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
}
#id {
    font-family: Oregano;
    color: white;
    font-family: Oregano;
}

#content-section {
    display: flex;
}
.min-height {
    min-height: 5rem;
}
#line-container {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 4rem;
    min-width: 4rem;
    height: 100%;

    margin-right: 4rem;
    margin-left: 2rem;
}
#line {
    background-color: #FF902B;

    z-index: 2;

    width: 0.4rem;
    height: calc(100% + 2.1rem);
}
</style>