app.component('product-detail',{
    props: {
        details: {
            type: Array,
            required: true,
        }
    },
    template:
        `<ul class="margin-bottom-20px list-material">
            <li v-for="detail in details">{{ detail }}</li>
         </ul>`,
    data(){
        return {}
    },
    methods: {},
    computed: {}
})