const app = Vue.createApp({
    data() {
        return {
            cart:0,
            premium: false,
            details: []
        }
    },
    methods: {
        updateCartUp(color) {
            this.cart++;
        },
        updateCartDown() {
            if (this.cart > 0) {
                this.cart--;
            }
        },
        updateButton() {
            return this.cart > 0;
        }
    }
})