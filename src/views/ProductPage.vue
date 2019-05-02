<template>

    <div class="container product_section_container">
        <div class="row">
            <div class="col">

                <div class="breadcrumbs d-flex flex-row align-items-center">
                    <ul>
                        <li><router-link to="/">Home</router-link></li>
                        <li class="active"><router-link to="/products"><i class="fa fa-angle-right" aria-hidden="true"></i>Manicure</router-link></li>
                    </ul>
                </div>

                <div class="main_content">
                    <div class="row">
                        <div class="col">
                            <div class="red_button"><a href="#">Filter</a></div>

                            <div class="product-grid" data-isotope='{"layoutMode": "fitRows" }'>
                                <!-- Product 1 -->

                                <div class="product-item" v-for="item in items" :key="item.id">
                                    <div class="product">
                                        <div class="product_image">
                                            <img :src="item.url" alt="">
                                        </div>
                                        <div class="product_info">
                                            <h6 class="product_name"><router-link to="/single">EXPRESS MANICURE - Beauty salon</router-link></h6>
                                            <div class="product_price">{{ item.discountPrice }}€<span>{{ item.originalPrice }}€</span></div>
                                        </div>
                                    </div>
                                    <div class="red_button add_to_cart_button"><router-link to="/bag">add to cart</router-link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import products from '../data/products';

    export default {
        name: "ProductPage",
        data: function () {
            return {
                items: products
            }
        },
        components: {
            products
        }
    }
</script>

<style scoped>

</style>