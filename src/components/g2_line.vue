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
      padding: [20, 40, 60, 40],
    })

    myChart.data(this.linesData)

    // 坐标轴的内容是由scale度量控制的，所以scale的名字就是坐标轴的标题内容，chart.axis()只用于控制坐标轴的外观配置
    myChart.scale('value', {
      min: 0,
      max: 20,
      alias: '销售量',
      // ticks:[4,8,12,15, 20],
      tickCount: 5,
      // 格式化坐标轴数据
      formatter: (val) => `${val}`,
    })
    myChart.scale('date', {
      alias: '时间',
      // 设置坐标轴两端留白，分类数据的坐标轴两端一定会留白，连续数据的坐标轴两端没有留白
      // range的默认值是[1/(count-1), 1-1/(count-1)]
      range: [1, 0],
    })
    myChart.axis('value', {
      title: {
        style: {
          fill: '#333',
        },
      },
      // label样式设置
      label: {},
    })

    // 图例
    // myChart.legend(false);//隐藏图例
    myChart.legend('value', false) //隐藏某个维度的图例

    // tooltip
    // G2提供了三个层级的tooltip配置
    // 1. chart，控制整个图表的tooltip，当chart.tooltip(false)将tooltip关闭时，view及geometry上的tooltip均不生效
    // 2. view，控制当前view的tooltip
    // 3. geometry，控制当前几何标记的tooltip
    myChart.tooltip({
      showCrosshairs: true, //展示tooltip辅助线
      crosshairs: {
        type: 'xy',
        // 配置crosshairs上展示的数据
        text: (type, defaultText, item) => {
          return {
            offset: 5,
            position: 'end',
            content: type === 'x' ? defaultText + '~' : defaultText,
            style: {
              textAlign: 'center',
              fontSize: 14,
              fill: '#fff',
              padding: [10, 20],
            },
          }
        },
      },
      // showTitle: false,
      itemTpl: `<li style='padding: 5px 0 10px'>{city} 有 {value} 人</li>`,
    })
    // tooltip相关事件
    // myChart.on('tooltip: show', (ev: any) => {}) //tooltip显示时触发
    // myChart.on('tooltip: change', (ev: any) => {})
    // myChart.on('tooltip: hide', (ev: any) => {})

    // myChart.interaction('active-region');//使用active-region交互行为，具体效果见柱状图

    myChart
      .line()
      .position('date*value')
      .color('city')
      .shape('smooth')
      .tooltip('value*city', (value, city) => {
        //geometry的tooltip需要结合chart.tooltip 的 itemTpi接口使用
        return {
          value: value,
          city: `${city}市`,
        }
      })

    myChart.option('slider', {
      end: 0.8,
    })

    myChart.interaction('element-highlight-by-color')

    myChart.render()
  }
}
</script>