<template>
  <q-page class="q-pa-sm">  
    <div style="max-width: 800px; width: 100%;">
      <!-- <q-chart 
        identifier="myChart"
        stilo="height:30vh; width: 100%"
        :type="chartdata.type"
        :labels="chartdata.data.labels"
        :datasets="chartdata.data.datasets"
        :options="chartdata.options"
      />     -->
      <canvas id="line-chart"></canvas>
    </div>
  </q-page>
</template>

<script>

// import QChart from 'quasar-components-chart'
import Chart from 'chart.js'
export default {
  name: 'LineChart',
  components: {
    // QChart 
    // CardChartsLine: () =>  import('components/cards/CardChartsLine'),
  },
  props: {
    chartdata: {
      type: Object,
      required: true
    }
  },
  watch: {
    chartdata: function (value) {
      if (!!value) {
        console.log("watch")
      }
    }
  },
  data () {
    return {
      
    }
  },
  mounted () {
    this.createChart('line-chart')
  },
  methods: {
    createChart (chartId) {
      const ctx = document.getElementById(chartId)
      const myChart = new Chart(ctx, {
        type: this.chartdata.type,
        data: {
          labels: this.chartdata.data.labels,
          datasets: this.chartdata.data.datasets
        },
        options: this.chartdata.options
      })
      return myChart
    }
  }
}
</script>