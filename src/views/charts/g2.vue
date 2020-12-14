<template>
  <div class="g2">
    <div class="main-title">
      <h5>G2</h5>
    </div>
     <a-row class="chart-row" :gutter="20">
      <a-col :span="8">
        <div>
          <ComplexCharts name="charts" width="100%" height="88%" />
        </div>
      </a-col>
       <a-col :span="8">
        <div>
          <ComplexCharts name="charts-2" width="100%" height="88%" />
        </div>
      </a-col>
       <a-col :span="8">
        <div>
          <ComplexCharts name="charts-3" width="100%" height="88%" />
        </div>
      </a-col>
    </a-row>
    <a-row class="chart-row t-mt15" :gutter="20">
      <a-col :span="8">
        <div>
          <div id="line"></div>
        </div>
      </a-col>
      <a-col :span="8">
        <div>
          <ponit width="100%" height="88%" />
        </div>
      </a-col>
      <a-col :span="8">
        <div>
          <line-chart width="100%" height="88%" />
        </div>
      </a-col>
    </a-row>
   
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Chart } from '@antv/g2'
import Ponit from '../../components/g2_point'
import LineChart from '../../components/g2_line'
import ComplexCharts from '../../components/charts'

@Component({
  components: {
    Ponit,
    LineChart,
    ComplexCharts,
  },
})
export default class Charts extends Vue {
  public colors = [
    '#58D5FF',
    '#73ACFF',
    '#FDD56A',
    '#FDB36A',
    '#FD866A',
    '#9E87FF',
  ]
  public lineData: any = [
    {
      year: '2018年',
      sales: [5, 28],
    },
    {
      year: '2019年',
      sales: 33,
    },
    {
      year: '2020年',
      sales: 38,
    },
  ]

  mounted() {
    const lineChart: any = new Chart({
      container: 'line',
      autoFit: true,
      padding: [40, 40],
    })
    lineChart.data(this.lineData)
    lineChart.scale('sales', {
      nice: true,
    })
    // 视觉通道：用来表现数据属性的定量信息，包括标记的位置、大小、形状、方向、色调、饱和度和亮度等
    // 对视觉通道的辨识有两种基本的感知模式：1. 对象本身的特征和位置等，对应视觉通道的定性性质和分类性质；2. 对象某一属性在数值上的大小，对应视觉通道的定量性质或定序性质
    // 因此，视觉通达可以分为两类：
    // 1. 定性（分类）性质的：形状，颜色的色调，控件位置等
    // 2. 定量（连续，有序）的：直线的长度，空间的体积，斜度，颜色的饱和度和亮度

    //
    /**
     * 数据到视觉通道的映射：（数据的字段和可视化通道之间建立对应关系的过程就是可视化编码的过程）
     * 1. 一个数据字段对应一个数据通道（1:1）
     * 2. 一个数据字段对应多个数据通道（1：n）
     * 3. 多个数据字段对应一个数据通道（n：1）
     */
    // 例：多个数据字段对应一个视觉通道（n：1），年份和销量都映射到颜色上
    lineChart
      .interval()
      .position('year*sales')
      .shape('rect')
      .color('year*sales', (year, sales) => {
        if (year === '2018年' || sales > 35) return this.colors[0]
        return this.colors[2]
      })
      .label('sales', {
        type: 'interval',
      })
    lineChart
      .point()
      .position('year*sales')
      .color('year*sales', (year, sales) => {
        if (year === '2018年' || sales > 35) return this.colors[1]
        return this.colors[2]
      })

    lineChart.tooltip({
      showCrosshairs: false, //展示tooltip辅助线
    })
    lineChart.interaction('active-region')
    lineChart.render()
  }
}
</script>

<style lang="scss" >
h5 {
  text-align: center;
}
.g2 {
  background: #151632;
  padding: 20px;
  .chart-row .ant-col > div {
    background: url(../../assets/image/home/chart_bg.png) no-repeat;
    background-size: 100% 100%;
    padding: 50%;
    position: relative;
    & > div {
      position: absolute;
      width: 100%;
      height: 88%;
      top: 12%;
      left: 0;
    }
  }
}
</style>