<template>
  <a-layout id="main-layout-container">
    <a-layout-sider :trigger="null" collapsible style="background: #1c202b">
      <div class="logo">vue-antd-admin</div>
      <side-bar />
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
       <nav-bar />
      </a-layout-header>
      <a-layout-content id="main-content">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop, Component } from 'vue-property-decorator'
import SideBar from './sider.vue'
import NavBar from './navBar.vue'

@Component({
  components: { SideBar, NavBar },
})
export default class Layout extends Vue {
  created() {
    this.getList()
  }
  getList() {
    // this.$axios.get("/api/user/list").then((res) => {
    //   if (res.data.code === 200) {
    //     this.dataList = res.data.data.list;
    //     // console.log(this.dataList);
    //   }
    // });
  }
}
</script>

<style lang="scss" scoped>
.logo {
  height: 32px;
  line-height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  color: #9e9e9e;
}
#main-content {
  min-height: calc(100vh - 64px);
  padding: 30px 20px;
  box-sizing: border-box;
  background: #fff;
}
</style>