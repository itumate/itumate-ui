<template>
  <div class="container">
    <ul>
      <li>
        <div class="nav-item" @click="triggerActive($event)">
          <span class="icon-left"><i class="fa fa-fw fa-lg fa-cog"></i></span>
          <span class="nav-title">这是菜单一</span>
          <span class="icon-right"><i class="fa fa-fw fa-angle-right"></i></span>
        </div>
        <ul class="animated lightSpeedIn">
          <li>
            <div class="nav-item">
              <span class="icon-left"><i class="fa fa-fw fa-lg fa-cog"></i></span>
              <span class="nav-title">这是子级标题一</span>
              <span class="icon-right"><i class="fa fa-fw fa-angle-right"></i></span>
            </div>
          </li>
          <li>
            <div class="nav-item">
              <span class="icon-left"><i class="fa fa-fw fa-lg fa-cog"></i></span>
              <span class="nav-title">这是子级标题一</span>
              <span class="icon-right"><i class="fa fa-fw fa-angle-right"></i></span>
            </div>
          </li>
        </ul>
      </li>
      <li>
        <div class="nav-item">
                <span class="icon-left">
                    <i class="fa fa-fw fa-lg fa-cog"></i>
                </span>
          <span class="nav-title">这是菜单二</span>
          <span class="icon-right"><i class="fa fa-fw fa-angle-right"></i></span>
        </div>
      </li>
      <li>
        <div class="nav-item">
                <span class="icon-left">
                    <i class="fa fa-fw fa-lg fa-cog"></i>
                </span>
          <span class="nav-title">这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题</span>
          <span class="icon-right"><i class="fa fa-fw fa-angle-right"></i></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: 'LeftSideBarNav',
        data() {
            return {
                open: false
            }
        },
        methods: {
            triggerActive(event) {
                let current = event.currentTarget;
                let parent = current.parentElement;

                // 判断父级节点是否有 active
                parent.classList.contains('active') ? parent.classList.remove('active') : parent.classList.add('active');

                let sibling = current.nextElementSibling;
                console.log(sibling);
                if (!sibling) {
                    return;
                }
                let count = sibling.childElementCount;
                console.log(count)
                // this.toggleSlide(sibling, 40 * count, 200);
            },
            toggleSlide(dom, height, duration) {
                dom.style.transition = 'height ' + duration + 'ms';
                dom.style.height = height + 'px';
            }
        }
    }
</script>

<style scoped>
  @import "../assets/font-awesome-4.7.0/css/font-awesome.css";
  @import "../assets/animate-3.7.2/animate.min.css";

  .container {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  * {
    box-sizing: border-box;
  }

  a:active, a:hover, a:visited, a:link {
    color: unset;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    height: 100%;
    width: 100%;
  }

  ul > li {
    border: 0;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid rgba(178, 184, 190, 0.5);
  }

  ul > li a {
    cursor: pointer;
    text-decoration: none;
  }

  .nav-item > span {
    float: left;
  }

  .icon-left {
    width: 40px;
    padding-left: 2px;
    text-align: center;
  }

  .nav-title {
    padding-left: 10px;
    width: calc(100% - 80px);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .icon-right {
    width: 40px;
    padding-right: 2px;
    text-align: center;
  }

  .nav-item {
    height: 100%;
    -webkit-transition: all .5s linear;
    -o-transition: all .5s linear;
    transition: all .5s linear;
  }

  .nav-item:hover {
    background-color: rgba(238, 238, 209, 1);
  }

  /* 菜单右侧图标过度动画 */
  .nav-item .icon-right > i {
    -webkit-transition: all 200ms ease-in-out;
    -o-transition: all 200ms ease-in-out;
    transition: all 200ms ease-in-out;
  }

  /* 菜单打开(激活状态)右侧图标过度动画方式: 90°旋转 */
  .active > .nav-item .icon-right i {
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  /* 子级菜单 */
  div.nav-item + ul {
    display: none;
  }

  li.active > ul {
    display: block;
  }

  li.active > .nav-item {
    background-color: rgba(238, 238, 209, 1);
  }
</style>
