import Vue from 'vue'
import Router from 'vue-router'
import MainPage from "./views/MainPage";
import ProductPage from "./views/ProductPage";
import SingleProduct from "./views/SingleProduct";
import ShoppingBag from "./views/ShoppingBag";
import ThanksPage from "./views/ThanksPage";

Vue.use(Router)

export default new Router({

    routes: [
        {
            path: '/',
            name: 'main',
            component: MainPage
        },
        {
            path:'/products',
            name: 'Products',
            component: ProductPage
        },

        {
            path:'/single',
            name: 'single',
            component: SingleProduct
        },

        {
            path:'/bag',
            name: 'bag',
            component: ShoppingBag
        },

        {
            path: '/thanks',
            name: 'thanks',
            component: ThanksPage
        }
    ]
})
