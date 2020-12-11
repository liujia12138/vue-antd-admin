<template>
  <div id="lines" :style="{ width: width, height: height }"></div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
import { Chart } from '@antv/g2'

@Component({})
export default class LineChart extends Vue {
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

  public citys = ['北京', '上海', '杭州']

  public xAxisData = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  public linesData = []

  // public linesData: any = this.xAxisData.map((i) => {
  //   return {
  //     name: i,
  //     data: Array.from({ length: this.citys.length }, (_, i) => {
  //       return Math.round(Math.random() * 10)
  //     }),
  //   }
  // })

  created() {
    for (let i = 0; i < this.citys.length; i++) {
      for (let j = 0; j < this.xAxisData.length; j++) {
        this.linesData.push({
          city: this.citys[i],
          date: this.xAxisData[j],
          value: Math.round(Math.random() * 8) + i + j,
        })
      }
    }
  }

  mounted() {
    const myChart = new Chart({
      container: 'lines',
      autoFit: true,
      padding: [40, 40],
    })

    myChart.data(this.linesData)

    // myChart.scale('value', {
    //   alias: '销售量',
    //   ticks:[4,8,12,15],
    //   formatter: (val) => `${val}%`
    // })
    myChart.axis('y', {
      title: {
        
      },
    })
    myChart.area().position('date*value').color('city').shape('smooth')
    myChart.render()
  }
}
</script>