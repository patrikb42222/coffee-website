<template>
    <div>
        <a href="https://www.google.com/search?sa=X&sca_esv=133b1a974573c791&sca_upv=1&tbm=lcl&sxsrf=ADLYWIKbSwPv8Uh7K6SHkkA1A0sQNB0Irw:1723312206164&q=Apucome+Hurrah+coffee+V%C3%A9lem%C3%A9nyek&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDE0NjIxtrA0NzQxsbAwtTQ1NNjAyPiKUcmxoDQ5PzdVwaO0qCgxQyE5Py0tNVUh7PDKnNTcwyvzKlOzF7ESoQgAMmjV9WUAAAA&rldimm=14132438971448859510&hl=hu-HU&ved=2ahUKEwj1uoqf_uqHAxXY-gIHHTS0AyQQ9fQKegQIMRAF&biw=1680&bih=921&dpr=1#lkt=LocalPoiReviews">
            <button>
                <img id="google-image" src="../assets/google.svg">
                Értékelések
            </button>
        </a>
        <div id="review-data-container">
            <span>{{ avgReview }}</span>
            <div id="review-stars-container">
                <li id="placeholder-stars">
                    <img v-for="_ in 5" class="reviewstar" src="../assets/reviewstar-placeholder.svg">
                </li>
                <li id="review-stars">
                    <img v-for="_ in 5" class="reviewstar" src="../assets/reviewstar.svg">
                </li>
            </div>
            <span>({{ reviewCount }})</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const AVG_REVIEW_KEY = 'avarage-review'
const REVIEWCOUNT_KEY = 'review-count'
const EXPIRATION_TIME_KEY = 'reviewdata-exipration-time'
const EXPIRATION_TIME = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

const reviewCount = ref(0)
const avgReview = ref(0)

type ReviewData = { avgReview: number, reviewCount:number }

async function fetchReviewData(): Promise<ReviewData | null> {
    const url = `https://us-central1-apucome-eb5a4.cloudfunctions.net/getReviews`;
    const response = await fetch(url)
    if (response.ok) {
        const data = await response.json()
        console.log(data)
        const tmpAvgReview = data.avgReview
        const tmpReviewCount = data.reviewCount
        if (tmpAvgReview === undefined || tmpReviewCount === undefined) {
            console.error('Review data was empty')
            return null
        }
        else
            return { avgReview: tmpAvgReview, reviewCount: tmpReviewCount }
    }
    else {
        console.error('Failed to fetch review data', response.headers)
        return null
    }
}

async function setStoredReviewData(data: ReviewData) {
    localStorage.setItem(AVG_REVIEW_KEY, String(data.avgReview))
    localStorage.setItem(REVIEWCOUNT_KEY, String(data.reviewCount))
    localStorage.setItem(EXPIRATION_TIME_KEY, String((new Date().getTime()) + EXPIRATION_TIME ))
}

async function getStoredReviewData(): Promise<ReviewData | null> {
    const expirationTime = Number(localStorage.getItem(EXPIRATION_TIME_KEY))
    const now = new Date().getTime()
    if (expirationTime < now)
        return null

    const tmpAvgReview = Number(localStorage.getItem(AVG_REVIEW_KEY))
    const tmpReviewCount = Number(localStorage.getItem(REVIEWCOUNT_KEY))

    if (tmpAvgReview == undefined || tmpReviewCount == undefined)
        return null
    else
        return { avgReview: tmpAvgReview, reviewCount: tmpReviewCount }
}

async function initReviewData() {
    const localReviewData = await getStoredReviewData()
    if (localReviewData == null) {
        const reviewData = await fetchReviewData()
        if (reviewData != null) {
            avgReview.value = reviewData.avgReview
            reviewCount.value = reviewData.reviewCount

            setStoredReviewData(reviewData)
        }
    }
    else {
        avgReview.value = localReviewData.avgReview
        reviewCount.value = localReviewData.reviewCount
    }
}


onMounted(() => {
    initReviewData()
})
</script>

<style scoped>
img#google-image {
    padding-right: 1rem;
}

#review-data-container {
    display: flex;

    background-color: rgba(0, 0, 0, 0.6);
    padding: 0 1rem;

    width: fit-content;
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

    color: rgb(0, 0, 0);
    font-family: sans-serif;
    font-size: 1.25rem;

    height: 3.5rem;
    padding: 0 2rem;
    background-color: #ffffff;
    border-radius: 999rem;
    border: none;

    cursor: pointer;
    transition: background-color 0.2s;
}
button:hover {
    background-color: #fdffe4;
}
</style>