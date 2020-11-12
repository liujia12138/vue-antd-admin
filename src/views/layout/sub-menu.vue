<template>

</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator'

@Component({})
export default class SubMenuComponent extends Vue {
  @Prop({})
  menu: any

  created() {
    console.log(this)
  }

  handleClickMenu() {
    console.log(111)
  }

  // private handleClickMenu(
  //   menu: Object = {
  //     name: String,
  //     path: String,
  //     icon: String,
  //   }
  // ):void {
  //   // this.$router.push()
  //   console.log(this)
  // }
}
</script>