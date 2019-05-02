<template>
    <div>
        <MainSlider></MainSlider>
        <div class="banner">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="banner_item align-items-center"
                             style="background-image: url(http://dijkstra.cs.ttu.ee/~vezama/images/manicure/man_manicure.jpg)">
                            <div class="banner_category">
                                <router-link to="/products">Manicure</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="banner_item align-items-center"
                             style="background-image: url(http://dijkstra.cs.ttu.ee/~vezama/images/nails/nails6.jpg)">
                            <div class="banner_category">
                                <router-link to="/products">Get free coupons</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="banner_item align-items-center"
                             style="background-image: url(http://dijkstra.cs.ttu.ee/~vezama/images/nails/nails1.jpg)">
                            <div class="banner_category">
                                <router-link to="/products">Pedicure</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- New Arrivals -->

        <div class="manicure_services">
            <div class="container">
                <div class="row">
                    <div class="col text-center">
                        <div class="section_title new_arrivals_title">
                            <h2>Manicure services</h2>
                            <hr>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="product-grid" data-isotope='{"layoutMode": "fitRows" }'>
                            <div class="product-item" v-for="item in items" :key="item.id">
                                <div class="product discount product_filter">
                                    <div class="product_image">
                                        <img :src="item.url" alt="">
                                    </div>
                                    <div class="product_info">
                                        <h6 class="product_name"><router-link to="/single"> {{ item.name }}</router-link>
                                        </h6>
                                        <div class="product_price"> {{ item.discountPrice }}€<span>{{ item.originalPrice }}€</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="red_button add_to_cart_button">
                                    <router-link to="/bag">add to cart</router-link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <hr>
            </div>
        </div>
    </div>
</template>

<script>

    import MainSlider from "../components/main-slider/MainSlider";
    import d from '../data/mainPageData';

    export default {
        name: "MainPage",
        data() {
            return {
                img: 'http://dijkstra.cs.ttu.ee/~vezama/images/main.jpg',
                items: d
            }
        },
        components: {
            MainSlider
        }
    }
</script>

