<template>
  <header class="header">
    <!-- Top navbar -->
    <div class="top_nav">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="top_nav_left">
              <img src="http://dijkstra.cs.ttu.ee/~vezama/images/estonia-flag-icon.png"> Customer Service: 123 4567
            </div>
          </div>
          <div class="col-md-6">
            <div class="top_nav_right">Login | Sign up</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Navigation -->
    <div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-right">
            <div class="logo_container">
              <a href="#" class="navbar-brand">
                <img src="http://dijkstra.cs.ttu.ee/~vezama/images/logo.png" class="d-inline-block align">Nordic Beauty
              </a>
            </div>
            <nav class="navbar">
              <ul class="navbar_menu">
                <li>
                  <router-link to="/">Home</router-link>
                </li>
                <li>
                  <router-link to="/products">Manicure</router-link>
                </li>
                <li>
                  <a href="#">Pedicure</a>
                </li>
                <li>
                  <a href="#">Salons</a>
                </li>
                <li>
                  <a href="#">contact</a>
                </li>
              </ul>
              <ul class="navbar_user">
                <li>
                  <a href="#">
                    <i class="fa fa-search"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-user"></i>
                  </a>
                </li>
                <li class="checkout">
                  <router-link to="/bag">
                    <i class="fa fa-shopping-cart"></i>
                    <span id="checkout_items" class="checkout_items">{{ counter }}</span>
                  </router-link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TopHeader",
  data() {
    return {
      customerService: "Customer Service: 123 4567",
      loginForms: "Login | Sign up",
      counter: 1
    };
  },
  methods: {
    increment() {
      this.counter++;
    }
  }
};
</script>

<style lang="scss">
</style>
