<template>
  <div class="row q-col-gutter-sm  q-py-sm">
    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <q-card class="q-ma-xs" style="background-color: #38b1c5">
        <q-card-section class="q-pa-none">
          <IEcharts style="height: 250px" :option="LineChart2" :resizable="true"/>
        </q-card-section>
      </q-card>
    </div>    
  </div>
</template>

<script>
import IEcharts from 'vue-echarts-v3/src/full.js'
export default {
  name: 'CardChartsLine',
  components: {
    IEcharts
  },
  props: {
    line: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
    LineChart2: {
        "tooltip": {"show": true},
        "title": {"show": true, "textStyle": {"color": "rgba(0, 0, 0 , .87)", "fontFamily": "sans-serif"}},
        "grid": {"containLabel": true, "left": "0", "bottom": "0", "right": "0"},
        "xAxis": {
            "show": false,
            "type": "category",
            "axisLine": {"lineStyle": {"color": "rgba(0, 0, 0 , .54)", "type": "dashed"}},
            "axisTick": {
                "show": true,
                "alignWithLabel": true,
                "lineStyle": {"show": true, "color": "rgba(0, 0, 0 , .54)", "type": "dashed"}
            },
            "axisLabel": {"show": false},
            "boundaryGap": false
        },
        "yAxis": {
            "show": false,
            "type": "value",
            "axisLine": {"lineStyle": {"color": "rgba(0, 0, 0 , .54)", "type": "dashed"}},
            "axisLabel": {"show": false},
            "splitLine": {"lineStyle": {"type": "dashed"}},
            "axisTick": {
                "show": true,
                "lineStyle": {"show": true, "color": "rgba(0, 0, 0 , .54)", "type": "dashed"}
            }
        },
        "series": [{"type": "line", "areaStyle": {}, "smooth": false}],
        "dataset": this.line.dataset,
        "color": ["#45c2c5"]
    },
    }
  }
}
</script>