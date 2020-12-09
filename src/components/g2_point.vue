<template>
  <div id="chart" :style="{ width: width, height: height }"></div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
import { Chart } from '@antv/g2'

@Component({})
export default class Ponit extends Vue {
  @Prop({
    type: String,
    default: '100%',
  })
  width: String

  @Prop({
    type: String,
    default: '100%',
  })
  height: String

  public data: any = Array.from({ length: 80 }, (_, i) => {
    return {
      type: `第${i % 10}组`,
      value: Math.round(Math.random() * 10),
      count: Math.round(Math.random() * 30 ),
    }
  })

  mounted() {
    const myChart = new Chart({
      container: 'chart',
      autoFit: true,
      padding: [40, 40]
    })

    myChart.data(this.data)
    myChart
      .point()
      .position('type*value')
      .shape('circle')
      .size('count', (count) => count * 0.5)
      .color('count', (count) =>
        count > 20
          ? 'rgba(140,222,196,0.8)'
          : count > 10
          ? 'rgba(89,132,207,0.8)'
          : 'rgba(249,125,86,0.8)'
      )
    myChart.render()
  }
}
</script>