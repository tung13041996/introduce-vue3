const app = Vue.createApp({
    data() {
        return {
            product: "Shoes",
            brand: "Convert",
            onSale: true,
            description: "It's the description for this product.",
            selectedVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id:1000,  color:"green", image:"./assets/images/green-shoe.png", quantity:50},
                {id:1001,  color:"blue", image: "./assets/images/blue-shoe.png", quantity: 0}
            ],
            sizes: [
                {size: 20, people: "kid"},
                {size: 32, people: "women"},
                {size: 42, people: "men"}
            ],
            cart:0
        }
    },
    methods: {
        addToCart() {
            if (this.inStock) {
                this.cart++;
            }
        },
        removeToCart() {
            if (this.cart >0) {
                this.cart--;
            }
        },
        updateImage(image) {
            this.image = image;
        },
        updateVariant(index) {
            this.selectedVariant = index;
        }
    },
    computed: {
        title() {
            return this.onSale && this.variants[this.selectedVariant].quantity > 0
                ? this.product + ' ' + this.brand + ' is on sale'
                : this.product + ' ' + this.brand;
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity > 0;
        }
    }
})