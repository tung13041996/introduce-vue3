const app = Vue.createApp({
    data() {
        return {
            product: "Shoes",
            description: "It's the description for this product.",
            image: './assets/images/green-shoe.png',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id:1000,  color:"green", image:"./assets/images/green-shoe.png"},
                {id:1001,  color:"blue", image: "./assets/images/blue-shoe.png"}
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
            this.cart++;
        },
        removeToCart() {
            if (this.cart >0) {
                this.cart--;
            }
        },
        updateImage(image) {
            this.image = image;
        }
    }
})