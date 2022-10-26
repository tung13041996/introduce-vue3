app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
        `<div class="review-container margin-bottom-40px">
            <h3>Review:</h3>
            <ul>
                <li v-for="review in reviews">
                <span>Name: {{ review.name }}.</span>
                <br>
                <span>Review: {{ review.review }}.</span>
                <br>
                <span>Rating: {{ review.rating }}*.</span>
</li>
            </ul>
        </div>`,

})