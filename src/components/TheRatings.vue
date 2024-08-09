<template>
    <div>
        <button>
            <img id="google-image" src="../assets/google.svg">
            Értékelések
        </button>
        <div id="review-data-container">
            <span>4.7</span>
            <div id="review-stars-container">
                <li id="placeholder-stars">
                    <img v-for="star in 5" class="reviewstar" src="../assets/reviewstar-placeholder.svg">
                </li>
                <li id="review-stars">
                    <img v-for="star in 5" class="reviewstar" src="../assets/reviewstar.svg">
                </li>
            </div>
            <span>(877)</span>
        </div>
    </div>
</template>

<style scoped>
img#google-image {
    padding-right: 1rem;
}

#review-data-container {
    display: flex;

    margin-left: 1rem;
    margin-top: 0.2rem;
}

#review-stars-container {
    position: relative;
    width: 5rem;
    padding: 0;
    margin: 0 0.5rem;
}

#placeholder-stars {
    position: static;
    width: 100%;
}
#review-stars {
    width: 90%;

    white-space: nowrap;
    overflow-x: hidden;
    position: absolute;
    top: 0;
}

img.reviewstar {
    width: 1rem;
}
li {
    list-style-type: none;
}


button {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: white;
    font-family: sans-serif;
    font-size: 1.25rem;

    height: 3.5rem;
    padding: 0 2rem;
    border: 3px solid #5E3C23;
    background-color: #e8782882;
    border-radius: 999rem;

    cursor: pointer;
    transition: background-color 0.2s;
}
button:hover {
    background-color: #e3996582;
}
</style>