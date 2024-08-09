<template>
    <section>
        <div id="container">
            <div class="line"></div>
            <h1><slot></slot></h1>
            <div class="line"></div>
        </div>
    </section>
</template>

<style scoped>
section {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 8rem;
}

h1 {
    font-family: Oregano, cursive;
    position: relative;
    color: #fff;
    text-align: center;
    padding: 0 20px;
    display: inline-block;
}
.line {
    background-color: white;
    height: 1px;
    flex-grow: 1;
}
#container {
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 80%;
}
</style>