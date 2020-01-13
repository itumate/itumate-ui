<template>
  <div class="wrapper">
    <b-carousel
      :interval="5000"
      :indicators="true"
      :img-width="screen.innerHeight"
      :img-height="screen.innerWidth">
      <b-carousel-slide v-for="(item,index) in covers" :key="index">
        <template v-slot:img>
          <img
            :src="item"
            :width="screen.innerWidth"
            :height="screen.innerHeight">
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                slide: 0,
                sliding: null,
                screen: {
                    innerWidth: 0,
                    innerHeight: 0
                },
                covers: [
                    'https://test-one-road.oss-cn-hangzhou.aliyuncs.com/login/1.jpg',
                    'https://test-one-road.oss-cn-hangzhou.aliyuncs.com/login/3.jpg'
                ]
            }
        },
        methods: {
            resizeScreen() {
                this.screen.innerWidth = window.innerWidth;
                this.screen.innerHeight = window.innerHeight;
            }
        },
        created() {
            this.resizeScreen();
        },
        mounted() {
            window.onresize = () => {
                this.resizeScreen();
            };
        }
    }
</script>

<style scoped>
  .wrapper,
  div.carousel-inner {
    height: 100% !important;
  }

  /* 解决materialize样式冲突 */
  .carousel, .carousel-item {
    visibility: unset !important;
    width: 100% !important;
    height: 100% !important;
    position: unset !important;
    top: unset !important;
    left: unset !important;
  }
</style>
