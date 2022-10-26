app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
    /* HTML */
        `<div class="product-display margin-bottom-80px d-flex">
            <div class="product-container">
                <div class="product-image image-contain" :class="[!inStock ? 'out-of-stock' : '']">
                    <!--image here-->
                    <img :src="image" alt="">
                </div>
            </div>
            <div class="product-info">
                <h1 class="margin-bottom-20px">{{ title }}</h1>
                <p class="margin-bottom-20px" v-if="inStock">In stock</p>
                <p class="margin-bottom-20px" v-else>Out of stock</p>
                <p class="margin-bottom-20px"> Shipping: {{ shipping }}</p>
                <product-detail :details="details"></product-detail>
                <div class="margin-bottom-20px product-material d-flex">
                    <div class="product-color fl-center"
                         v-for="(variant,index) in variants"
                         :key="variant"
                         @click="updateVariant(index)"
                         :style="{backgroundColor: variant.color}">
                        {{ variant.color }}
                    </div>
                </div>
                <div class="product-button d-flex">
                    <button class="btn_primary" :class="{disabled: !inStock} || !statusButton" @click="addToCart">
                        Add to cart
                    </button>
                    <button class="btn_primary" :class="{disabled: !inStock}" @click="removeToCart" >
                        Remove to cart
                    </button>
                </div>
            </div>
        </div>
        <review-list  v-if="reviews.length" :reviews="reviews"></review-list>
        <review-form @review-submitted="addReview"></review-form>`,
    data(){
        return {
            product: "Shoes",
            brand: "Convert",
            onSale: true,
            selectedVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 1000, color: "green", image: "./assets/images/green-shoe.png", quantity: 50},
                {id: 1001, color: "blue", image: "./assets/images/blue-shoe.png", quantity: 40}
            ],
            sizes: [
                {size: 20, people: "kid"},
                {size: 32, people: "women"},
                {size: 42, people: "men"}
            ],
            reviews: [],
        }
    },
    methods: {
        addToCart(){
            if(this.variants[this.selectedVariant].quantity > 0){
                this.$emit('add-to-cart');
            }
        },
        removeToCart(){
            this.$emit('remove-to-cart');
        },
        updateImage(image){
            this.image = image;
        },
        updateVariant(index){
            this.selectedVariant = index;
        },
        statusButton(){
            this.$emit('status-button');
        },
        addReview(review) {
            this.reviews.push(review);
        }
    },
    computed: {
        title(){
            return this.onSale && this.variants[this.selectedVariant].quantity > 0
                ? this.product + ' ' + this.brand + ' is on sale'
                : this.product + ' ' + this.brand;
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity > 0;
        },
        shipping(){
            if(this.premium) return "Free";
            return "2.99$"
        }
    }
})