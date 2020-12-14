<template>
  <div id="chart" :style="{ width: width, height: height }"></div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
import { Chart, registerInteraction } from '@antv/g2'

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
      type: i % 2 ? `male` : 'female',
      value: Math.round(Math.random() * 20 + 12),
      count: Math.round(Math.random() * 20 + 1),
    }
  })

  mounted() {
    registerInteraction('element-link', {
      start: [
        {
          trigger: 'point:mouseenter',
          action: 'element-link-by-color:link',
        },
      ],
      end: [
        {
          trigger: 'point:mouseleave',
          action: 'element-link-by-color:unlink',
        },
      ],
    })
    const myChart = new Chart({
      container: 'chart',
      autoFit: true,
      padding: [20, 40, 40, 40],
    })

    myChart.data(this.data)
    myChart.scale('value', {
      max: 40,
      min: 0,
    })
    myChart.point().position('count*value').shape('circle').color('type')

    myChart.tooltip({
      showCrosshairs: true,
      crosshairs: {
        type: 'xy',
      },
    })

    myChart.interaction('element-link')

    myChart.render()
  }
}
</script>