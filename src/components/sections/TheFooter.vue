<template>
    <footer>
        <section id="links">
            <div>
                <h2>Sitemap</h2>
                <a>Home</a>
                <a>Dishes</a>
                <a>Drinks</a>
                <a></a>
            </div>
            <div>
                <h2>d</h2>
                <a></a>
                <a></a>
                <a></a>
            </div>
            <div>
                <h2></h2>
                <a></a>
                <a></a>
                <a></a>
            </div>
            <div>
                <h2>Other</h2>
                <a>Privacy</a>
                <a>Terms & Service</a>
                <a></a>
            </div>
        </section>
        <span id="copyright">© 2024 Coffee Shop Co. All rights reserved. | Privacy Policy | Terms of Service</span>
    </footer>
</template>

<style scoped>
footer {
    display: flex;
    flex-direction: column;

    padding: 2rem;
    background-color: black;
}

a {
    display: block;
}
#links {
    display: flex;
    justify-content: space-around;
}

#copyright {
    margin: 2rem auto 0 auto;
}
</style>