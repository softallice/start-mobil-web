<template>
  <q-page class="q-pa-sm">  
    <div style="max-width: 800px; width: 100%;">
      <q-chart 
        identifier="myChart"
        stilo="height:30vh; width: 100%"
        :type="type"
        :labels="data.labels"
        :datasets="data.datasets"
        :options="options"
      />    
    </div>
  </q-page>
</template>

<script>

import QChart from 'quasar-components-chart'
export default {
  name: 'BarChart',
  components: {
    QChart 
    // CardChartsLine: () =>  import('components/cards/CardChartsLine'),
  },
  data () {
    return {
      type: 'bar',
      data: {
        labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
        datasets: [
          {
            label: 'Population (millions)',
            backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
            data: [2478, 5267, 734, 784, 433]
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Predicted world population (millions) in 2050'
        }
      }
    }
  },
  props: {
    
  },
  watch: {
       
  },
  beforeMount () {
    
  },
  beforeCreate: async function () {
    
  },
  methods: {
    
  },
}
</script>