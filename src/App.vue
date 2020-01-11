<template>
  <div id="app">
    <Home></Home>
    <vue-ins-progress-bar></vue-ins-progress-bar>
  </div>
</template>

<script>
    /**
     * $insProgress: 彩虹进度条
     */

    import Home from './components/Home';

    export default {
        name: 'App',
        components: {
            Home
        },
        mounted() {
            this.$insProgress.finish();
        },
        created() {
            this.$insProgress.start();
            this.$router.beforeEach((to, from, next) => {
                this.$insProgress.start();
                next();
            });

            this.$router.afterEach((to, from) => {
                this.$insProgress.finish()
            })
        }
    }
</script>

<style>
  #app {
    font-family: Monaco, Consola, Monospaced;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    width: 100%;
  }
</style>
