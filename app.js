const app = Vue.createApp({

    data(){
        return{
            products:[{
                name: "iPhone 15 Silicone Case with MagSafe - Light Blue",
                price: 49.00,
                image: ["css/img-2/product/G1.png"],
                check: false,
                num:0,
            }




            ],
            status: false,
            carts:[]

        }
    },
    methods:{
        toggleCarts(){
            this.status = !this.status
        },
    }
})
app.mount("#app")