app.component('review-form', {
    template:
        `<form class="review-form margin-bottom-80px" @submit.prevent = "onSubmit">
            <h3 class="margin-bottom-20px">Leave a review</h3>
            
            <label for="name">Name:</label>
            <input class="form-field margin-bottom-20px" id="name" v-model="name">

            <label for="review">Review:</label>
            <textarea class="form-field margin-bottom-20px" id="review" v-model="review"></textarea>

            <label for="rating">Rating:</label>
            <select class="form-field margin-bottom-40px" id="rating" v-model.number="rating">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>

            <input type="submit" value="Submit" class="btn_primary txt_center">
        </form>
    `,
    data(){
        return {
            name: '',
            review: '',
            rating: null
        }
    },
    methods: {
        onSubmit(){
            if (this.name ==='' || this.review ==='' || this.rating ===null) {
                alert("Please fill out all field");
                return;
            }

            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating
            }
            this.$emit('review-submitted', productReview);

            this.name = '';
            this.review = '';
            this.rating = null;
        }
    }
})