<template>
    <!-- Main Slider -->
    <div class="main_slider">
        <div class="container fill_height">
            <div class="row align-items-center fill_height">
                <div class="col">
                    <div class="main_slider_content">
                        <h2>As you wish...</h2>
                        <div class="red_button see_more_btn">
                            <router-link to="/">see more</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "MainSlider"
    }
</script>

<style>
    .main_slider {
        background-image: url('./../../assets/images/main.jpg');
    }
</style>