<template>
  <div>
    <section class="section-b-space">
      <div class="collection-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-sm-12 col-xs-12 productdetail">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-lg-6">
                    <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
                      <div class="swiper-wrapper">
                        <div
                          class="swiper-slide"
                          v-for="(product,index) in getDetail.images"
                          :key="index"
                        >
                          <a v-if="product.src_big"
                            :href="getImgUrl(product.src_big)"
                            target="_blank">
                            <img
                              :src="getImgUrl(product.src)"
                              :id="product.image_id"
                              class="img-fluid bg-img"
                              :alt="product.alt"
                              style="border:1px solid grey; border-radius: 10px; width: 100%"
                            />
                          </a>
                          <img v-if="!product.src_big"
                            :src="getImgUrl(product.src)"
                            :id="product.image_id"
                            class="img-fluid bg-img"
                            :alt="product.alt"
                            style="border:1px solid grey; border-radius: 10px; width: 100%"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 rtl-text">
                    <div class="product-right">
                      <h3>{{ getDetail.title }}</h3>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import Vue from "vue";
  import { mapState, mapGetters } from "vuex";

  export default {
    components: {

    },

    data() {
      return {
        counter: 0,
        qty: "",
        productTYpe: "",
        productId: "",
     };
    },
    computed: {
      ...mapState({
        currency: state => state.products.currency
      }),
      ...mapGetters({
        curr: "products/changeCurrency"
      }),
      getDetail: function() {
        return this.$store.getters["products/getProductById"](
          this.$route.params.id
        );
      },
     },
    mounted() {
    },
    methods: {
      getImgUrl(path) {
        return require("@/assets/images/" + path);
      },
      slideTo(id) {
        this.swiper.slideTo(id, 1000, false);
      }
    }
  };
</script>
