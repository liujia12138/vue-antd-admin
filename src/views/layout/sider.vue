<template>
  <a-menu
    theme="dark"
    mode="inline"
    :default-selected-keys="[$route.name]"
    :open-keys="openKeys"
    @openChange="onOpenChange"
  >
    <template v-for="menu in menuList">
      <a-sub-menu
        v-if="menu.children"
        :key="menu.name"
        class="ant-menu-submenu"
      >
        <span slot="title"
          ><a-icon :type="menu.icon" /><span>{{ menu.name }}</span></span
        >

        <template v-for="child in menu.children">
          <a-menu-item
            :key="child.name"
            @click="handleClickMenu(child, menu.path)"
          >
            <a-icon v-if="child.icon" :type="child.icon" />
            <span>{{ child.meta.title }}</span>
          </a-menu-item>
        </template>
      </a-sub-menu>

      <a-menu-item v-else :key="menu.name" @click="handleClickMenu(menu)">
        <a-icon v-if="menu.icon" :type="menu.icon" />
        <span>{{ menu.name }}</span>
      </a-menu-item>
    </template>
  </a-menu>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import menuList from '../../utils/menu'
@Component({})
export default class Sidebar extends Vue {
  menuList = menuList

  openKeys = [this.$route.path.split('/')[1]]

  private handleClickMenu(menu = { path: '' }, basePath = ''): void {
    this.$router.push(basePath + menu.path)
  }

  public onOpenChange(openKeys) {
    const latestOpenKey = openKeys.find(
      (key) => this.openKeys.indexOf(key) === -1
    )
    this.openKeys = latestOpenKey ? [latestOpenKey] : []
  }
}
</script>