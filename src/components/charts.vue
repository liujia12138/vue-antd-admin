<template>
  <div :id="name" :style="{ width: width, height: height }"></div>
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

  @Prop({
    type: String,
  })
  name: String

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
      container: `${this.name}`,
      autoFit: true,
    })

    // 创建视图
    const view = myChart.createView({
      region: {
        // start end 指定该视图绘制的起始位置。x,y的范围为[0,1]
        start: { x: 0, y: 0 },
        end: { x: 1, y: 1 },
      },
      padding: [20, 40],
    })

    // view可以和chart一样载入数据，进行图表绘制。但是，view并不负责最后的画布绘制，统一由chart对象进行渲染，chart.render()
    view.data(this.linesData)

    view.scale('value', {
      min: 0,
      max: 20,
      alias: '销售量',
      // ticks:[4,8,12,15, 20],
      tickCount: 5,
      // 格式化坐标轴数据
      formatter: (val) => `${val}`,
    })
    view.scale('date', {
      alias: '时间',
      // 设置坐标轴两端留白，分类数据的坐标轴两端一定会留白，连续数据的坐标轴两端没有留白
      // range的默认值是[1/(count-1), 1-1/(count-1)]
      range: [1, 0],
    })
    view.axis('时间', {
      title: {},
      // label样式设置
      label: {},
    })

    // 图例
    // myChart.legend(false);//隐藏图例
    view.legend('value', false) //隐藏某个维度的图例

    view
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

    const pieView = myChart.createView({
      region: {
        // start end 指定该视图绘制的起始位置。x,y的范围为[0,1]
        start: { x: 0.6, y: 0 },
        end: { x: 0.8, y: 0.4 },
      },
    })

    const pieData = [
      {
        year: '2018年',
        sales: 28,
      },
      {
        year: '2019年',
        sales: 33,
      },
      {
        year: '2020年',
        sales: 38,
      }
    ]
    pieView.data(pieData)
    pieView.axis('year', false)
    pieView.axis('sales', false)
    pieView.legend(false)

    pieView.coordinate('polar') //theta坐标系，半径角度固定，常用语饼图
    pieView.interval().position('year*sales').color('year')

    myChart.render()
  }
}
</script>