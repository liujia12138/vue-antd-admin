<template>
  <a-menu
    theme="dark"
    mode="inline"
    :default-selected-keys="[$route.path]"
    :default-open-keys="[$route.path.split('/')[1]]"
  >
    <template v-for="menu in menuList">
      <a-sub-menu
        v-if="menu.children"
        :key="menu.path"
        class="ant-menu-submenu"
      >
        <span slot="title"
          ><a-icon :type="menu.icon" /><span>{{ menu.name }}</span></span
        >

        <template v-for="child in menu.children">
          <a-menu-item :key="child.path" @click="handleClickMenu">
            <a-icon v-if="child.icon" :type="child.icon" />
            <span>{{ child.name }}</span>
          </a-menu-item>
        </template>
      </a-sub-menu>

      <a-menu-item v-else :key="menu.path" @click="handleClickMenu">
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
  private handleMenu() {}
}
</script>