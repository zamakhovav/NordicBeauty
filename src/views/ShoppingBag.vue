<template>
    <div class="container single_product_container">

        <div class="row">
            <div class="col-lg-6 get_in_touch_col">
                <div class="contact_contents">
                    <h3>EXPRESS MANICURE: Beaty Salon</h3>
                    <div>
                        <p>Address: Beauty Salong, Maakri 5, Tallinn, 67451</p>
                        <p>The price: 35€</p>
                    </div>
                    <hr>

                </div>
                <div class="get_in_touch_contents">
                    <h1>Buy this service</h1>
                    <p>To buy the service you should insert your data</p>
                    <form action="post">
                        <div>
                            <input class="form_input input_name input_ph" type="text" name="name"
                                   placeholder="Name" required="required" data-error="Name is required.">
                            <input class="form_input input_name input_ph" type="text" name="surname"
                                   placeholder="Surname" required="required" data-error="Name is required.">
                            <input class="form_input input_email input_ph" type="email" name="email"
                                   placeholder="Email" required="required" data-error="Valid email is required.">
                            <input class="form_input input_ph" type="tel" name="number"
                                   placeholder="Phone number: 55667890" pattern="[0-9]{2}[0-9]{2}[0-9]{4}"
                                   required="required" data-error="Valid phone number. Etc: 55667890">
                        </div>
                        <div>
                            <button id="review_submit" type="submit" class="red_button message_submit_btn trans_300"
                                    value="Submit"><router-link to="/thanks">Buy</router-link>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="single_product_pics">
                    <div class="row">
                        <div class="col-lg-11 image_col order-lg-2 order-1">
                            <div class="single_product_image">
                                <div class="single_product_image_background"
                                     style="background-image:url(http://dijkstra.cs.ttu.ee/~vezama/images/nails/minimalism_nails3.png)"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    </div>
</template>

<script>
    export default {
        name: "ShoppingBag"
    }
</script>

<style lang="scss">
    .contact_contents {
        padding-right: 30px;
        h1 {
            font-size: 40px;
            font-weight: 500;
        }
        p {
            font-size: 16px;
            font-weight: 400;
            margin-bottom: 0px;
        }

        div {
            margin-top: 22px;
        }
    }


    .contact_contents div:first-of-type
    {
        margin-top: 39px;
    }

    /*********************************
    8. Contact Form
    *********************************/

    .form_input
    {
        display: block;
        width: 100%;
        height: 50px;
        border: solid 1px #e5e5e5;
        padding-left: 20px;
        font-size: 16px;
        margin-bottom: 20px;
    }

    .form_input:focus
    {
        border: solid 1px #7f7f7f !important;
        box-shadow: none !important;
    }
    .message_submit_btn
    {
        background: #1e1e27;
        color: #FFFFFF;
        text-transform: uppercase;
        width: 165px;
        border: none;
        height: 46px;
        cursor: pointer;
    }
    .message_submit_btn:hover
    {
        background: #2b2b34 !important;
    }
    :focus
    {
        outline: none !important;
    }
    .input_ph::-webkit-input-placeholder
    {
        font-size: 16px !important;
        font-weight: 400;
        color: #b9b4c7 !important;
    }
    .input_ph:-moz-placeholder /* older Firefox*/
    {
        font-size: 16px !important;
        font-weight: 400;
        color: #b9b4c7 !important;
    }
    .input_ph::-moz-placeholder /* Firefox 19+ */
    {
        font-size: 16px !important;
        font-weight: 400;
        color: #b9b4c7 !important;
    }
    .input_ph:-ms-input-placeholder
    {
        font-size: 16px !important;
        font-weight: 400;
        color: #b9b4c7 !important;
    }
    .input_ph::input-placeholder
    {
        font-size: 16px !important;
        font-weight: 400;
        color: #b9b4c7 !important;
    }
    textarea
    {
        border: solid 1px #e5e5e5;
        padding-left: 20px;
        padding-top: 15px;
    }
    textarea:hover
    {
        border-color: #7f7f7f !important;
    }
    .input_name
    {
        margin-bottom: 19px;
        margin-top: 31px;
    }
    .user_star_rating li
    {
        display: inline-block;
        margin-right: -3px;
        cursor: pointer;
    }
    .user_star_rating li i
    {
        color: #f5c136;
        font-size: 18px;
    }


</style>