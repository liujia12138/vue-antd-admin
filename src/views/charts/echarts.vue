<template>
  <a-row>
    <a-col :span="8">
      <div id="charts" style="width: 100%; height: 400px"></div>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import echarts from 'echarts'

@Component
export default class Charts extends Vue {
  public value: Number = 80

  public options: any = {
    title: {
      text: this.value,
      textStyle: {
        color: '#25BFFF',
        fontSize: 30,
      },
      subtext: '综合指数',
      subtextStyle: {
        color: '#666',
        fontSize: 16,
      },
      left: 'center',
      bottom: '43%',
    },
    angleAxis: {
      max: 100,
      show: false,
    },
    radiusAxis: {
      type: 'category',
      show: false,
    },
    polar: {
      center: ['50%', '50%'],
      radius: '80%',
    },
    series: [
      {
        name: 'circle',
        type: 'bar',
        coordinateSystem: 'polar',
        barWidth: 20,
        showBackground: true,
        backgroundStyle: {
          color: '#BDEBFF',
        },
        roundCap: true,
        itemStyle: {
          shadowBlur: 5,
          shadowColor: '#2A95F9',
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#25BFFF',
            },
            {
              offset: 1,
              color: '#5284DE',
            },
          ]),
        },
        data: [this.value],
      },
    ],
  }

  mounted() {
    const charts = echarts.init(document.getElementById('charts'))
    charts.setOption(this.options, true)
  }
}
</script>