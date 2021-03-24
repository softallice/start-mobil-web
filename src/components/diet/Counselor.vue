<template>
  <q-page class="q-pa-sm">  
    <div style="max-width: 800px; width: 100%;">
      <LineChart :chartdata="data" /> 
    </div>
  </q-page>
</template>

<script>

import LineChart from 'components/chart/LineChart'
export default {
  name: 'Counselor',
  components: {
    LineChart 
    // CardChartsLine: () =>  import('components/cards/CardChartsLine'),
  },
  props: {
    diet: {
      type: Object,
      required: true
    }
  },
  beforeMount () {
    // console.log('conselor >> ', this.diet)
    this.data.data.labels = this.diet.labelData
    this.data.data.datasets[0].data = this.diet.valueData
    console.log('this.data.data.datasets[0].data', this.diet.valueData)
    
  },
  watch: {
    diet: function (value) {
      if (!!value) {
        this.data.data.labels = this.diet.labelData
        this.data.data.datasets[0].data = this.diet.valueData
      }
    }
  },
  data () {
    return {
      data: {
        type: 'line',
        data: {
          labels: ["2021/03/31", "2021/03/24"], //"2021/03/26", "2021/04/23", "2021/03/09", "2021/03/05", "2021/03/01", "2021/02/28", "2021/02/24", "2021/03/27", "2021/03/24"],
          datasets: [
            {
              data: [ 100, 200],
              label: '내몸무게',
              borderColor: '#3e95cd',
              backgroundColor: 'white',
              fill: false,
              lineTension: 0.9
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: '최근 5건의 몸무게 변화'
          }
        }
      }
    }
  }
}
</script>