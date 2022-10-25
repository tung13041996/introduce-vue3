const app = Vue.createApp({
    data() {
        return {
            product: "Shoes",
            description: "It's the description for this product.",
            image: './assets/images/green-shoe.png',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id:1000,  color:"green"},
                {id:1001,  color:"blue"}
            ],
            sizes: [
                {size: 20, people: "kid"},
                {size: 32, people: "women"},
                {size: 42, people: "men"}
            ]
        }
    }
})