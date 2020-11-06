<template>
  <a-layout id="main-layout-container">
    <a-layout-sider :trigger="null" collapsible>
      <div class="logo">vue-antd-admin</div>
      <a-menu
        theme="dark"
        mode="inline"
        :default-selected-keys="[$route.path]"
        :default-open-keys="[$route.path.split('/')[1]]"
      >
        <template v-for="item in menuList">
          <a-sub-menu v-if="item.children" :key="item.name">
            <span slot="title"
              ><a-icon :type="item.icon" /><span>{{ item.name }}</span></span
            >
            <a-menu-item
              v-for="child in item.children"
              :key="child.path"
              @click="$router.push(child.path)"
            >
              <span>{{ child.name }}</span>
            </a-menu-item>
          </a-sub-menu>

          <a-menu-item v-else :key="item.path" @click="$router.push(item.path)">
            <a-icon v-if="item.icon" :type="item.icon" />
            <span>{{ item.name }}</span>
          </a-menu-item>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #001529; color: #fff"> header </a-layout-header>
      <a-layout-content id="main-content">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import menu from "../../utils/menu";
@Component
export default class Index extends Vue {
  menuList = menu;
  created() {
    this.getList();
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