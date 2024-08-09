<template>
    <div id="container">
        <Icon class="icon margin-bottom" icon="mdi:instagram"></Icon>
        <Icon class="icon" icon="ic:baseline-facebook"></Icon>
    </div>
</template>

<style scoped>
#container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    background-color: rgba(255, 255, 255, 0.789);
    border-radius: 2rem;
    
    position: fixed;
    right: 2rem;
    top: 40%;

    padding: 0.75rem;
    z-index: 2;
}

.icon {
    width: 2.5rem;
    height: 2.5rem;
    color: black;
    cursor: pointer;
}
.icon:hover {
    color: white;
}
.margin-bottom {
    margin-bottom: 1rem;
}

</style>