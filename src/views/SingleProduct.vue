<template>
    <div class="container single_product_container">
        <div class="row">
            <div class="col">
                <div class="breadcrumbs d-flex flex-row align-items-center">
                    <ul>
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/products"><i class="fa fa-angle-right" aria-hidden="true"></i>Manicure</router-link></li>
                        <li class="active"><router-link to="/single"><i class="fa fa-angle-right" aria-hidden="true"></i>EXPRESS MANICURE</router-link></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="row">

            <div class="col-lg-7">
                <div class="single_product_pics">
                    <div class="row">
                        <div class="col-lg-9 image_col order-lg-2 order-1">
                            <div class="single_product_image">
                                <div class="single_product_image_background" style="background-image:url(http://dijkstra.cs.ttu.ee/~vezama/images/nails/minimalism_nails3.png)"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-5">
                <div class="product_details">
                    <div class="product_details_tittle">
                        <h2>Express Manicure</h2>
                        <p>A manicure is a cosmetic beauty treatment for the fingernails and hands performed at home or in a nail salon.
                            A manicure consists of filing and shaping the free edge.
                        </p>
                    </div>
                    <ul class="star_rating">
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                    </ul>
                    <div class="additional d-flex flex-row align-items-center justify-content-center">
                        <span class="fas fa-check-circle"></span><span>Spa procuderes as additional</span>
                    </div>
                    <div class="product_color">
                        <div class="fa fa-address-card" aria-hidden="true"></div>
                        <span>Address: Beauty Salong, Maakri 5, Tallinn, 67451</span>
                    </div>
                    <div class="product_color">
                        <span class="fas"><datepicker></datepicker></span>
                        <button><a href="#">Book time</a></button>

                    </div>
                </div>

                <div class="original_price">50.00€</div>
                <div class="product_price">35.00€</div>

                <div class="d-flex flex-column flex-sm-row align-items-sm-center">
                    <button class="red_button"><router-link to="/bag">add to cart</router-link></button>
                    <div class="product_favorite d-flex flex-column align-items-center justify-content-center"></div>
                </div>
            </div>
        </div>
        <hr>
        <Description></Description>
    </div>
    
</template>

<script>
    import Description from "../components/description/Description";
    import Datepicker from 'vuejs-datepicker';

    export default {
        name: "SingleProduct",
        components: {
            Description,
            Datepicker
        }
    }
</script>

<style lang="scss" scoped>

</style>