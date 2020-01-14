<template>
  <div class="wrapper">
    <el-carousel
      :interval="3000"
      trigger="click" :height="screen.innerHeight + 'px'">
      <el-carousel-item v-for="(cover, index) in covers" :key="index">
        <a href="#"><img :src="cover" class="cover"></a>
      </el-carousel-item>
    </el-carousel>
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
          'https://test-one-road.oss-cn-hangzhou.aliyuncs.com/login/2.jpg',
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

  img.cover {
    height: 100%;
    width: 100%;
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
