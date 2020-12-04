<template>
  <a-row>
    <a-col :span="8">
      <div id="charts" style="width: 100%;height: 200px;"></div>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import Echarts from 'echarts'

@Component
export default class Charts extends Vue{
  public options:any={
    series: {
      name: 'circle',
      type: 'bar',

    }
  }

  mounted(){
    // const charts = echarts.init(document.getElementById('charts'))
    console.log(Echarts)
  }
}
</script>