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
      .color('count')
    myChart.render()
  }
}
</script>