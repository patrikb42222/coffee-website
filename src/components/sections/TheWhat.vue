<template>
    <section>
        <h1>Mi a tökéletességre igyekszünk</h1>
        <h2>Mi tesz egy tökéletes kávézót? </h2>
        <div id="item-container">
            <div>
                <Icon class="icon" icon="fluent:drink-coffee-16-filled"></Icon>
                <h3>Jó kávé</h3>
            </div>
            <div>
                <Icon class="icon" icon="fluent:people-community-12-filled"></Icon>
                <h3>Jó közösség</h3>
            </div>
            <div>
                <Icon class="icon" icon="fluent:cookies-16-filled"></Icon>
                <h3>Jó finomságok</h3>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 30rem;
    background-color: #1D2528;
    text-align: center;
}

h1 {
    font-family: Oswald, sans-serif;
}
h2 {
  font-family: "Alex Brush", cursive;
  font-size: 2.5rem;
}

#item-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 80%;
    max-width: 50rem;
}
.icon {
    color: #DCA47D;
    width: 3rem;
    height: 3rem;
}
h3 {
    font-family: Oswald, sans-serif;
    color: #DCA47D;
}
</style>