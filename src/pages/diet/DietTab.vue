<template>
  <div class="q-pa-md">
    <div style="max-width: 600px">
      <q-tabs
        v-model="tab"
        align="justify"
        narrow-indicator
        class="q-mb-lg bg-grey-3"
      >
        <q-tab class="text-purple" name="diary" label="My다이어리" />
        <q-tab class="text-orange" name="analysis" label="다이어트분석" />
        <q-tab class="text-teal" name="record" label="상담기록" />
      </q-tabs>

      <div class="q-gutter-y-sm">
        <q-tab-panels
          v-model="tab"
          animated
          transition-prev="fade"
          transition-next="fade"
          
        >
          <q-tab-panel name="diary" class="bg-purple text-white text-center">
            <Diet/>
          </q-tab-panel>

          <q-tab-panel name="analysis" class="bg-orange text-white text-center">
            <DietAnalysis :diet="chartData"/>
          </q-tab-panel>

          <q-tab-panel name="record" class="bg-teal text-white text-center">
            <!-- <Counselor :diet="chartData"/> -->
            <Counselor :diet="chartData"/>
          </q-tab-panel>

        </q-tab-panels>

        
      </div>
    </div>
  </div>
</template>

<script>
import Diet from "src/components/diet/Diet.vue"
import DietAnalysis from "src/components/diet/DietAnalysis.vue"
import Counselor from "src/components/diet/Counselor.vue"
import { KeyValueStore } from "pages/common/keyValStore.js"

export default {
components: {
    Diet,
    DietAnalysis,
    Counselor,
  },
  data () {
    return {
      tab: 'diary',
      userWeight: [],
      bodyWeightList: {},
      userInfo: {},
      // chart 데이터
      chartData: {
        labelData: [],
        valueData: [],
      },
    }
  },
  beforeCreate () {
    this.indexdb = new KeyValueStore("user-metadata", "metadata");
  },
  beforeMount () {
    console.log('before mount')
    this.getUserWeight()
    
  },
  methods: {
    //일자로 정렬
    sortByDate (weight) {
      weight.sort(this.GetSortOrder("weightdate")).reverse()
      // console.log('weight : ', weight)
      return weight //weight.sort((a, b) => a.weightdate - b.weightdate).reverse()
    },
    setWeight (weight) {
      console.log('sort weight', weight)
      this.bodyWeightList = {
        "data" : weight
        }
    },
    GetSortOrder(prop) {    
      return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return -1;    
        } else if (a[prop] < b[prop]) {    
            return 1;    
        }    
        return 0;    
      }    
    } ,
    arryUserWeight( obj ) {
      const arryUserWeight = []
          for (var i= 0 ; i < obj.length; i++) {
            arryUserWeight.push({
                "weightdate": obj[i].weightdate, 
                "weight": obj[i].weight,
              }
            )
          }
      return arryUserWeight
    },
    getUserWeight () {
      this.indexdb.get('userWeight').then(response => {
        this.userWeight = response
        // 최근 5개만 표시
        console.log(response.length)
        this.setWeight(this.sortByDate(this.arryUserWeight(response)).slice(-5))
        this.getChartData()
      })
      .catch(error => {
          console.log('error', error)
      })
      .finally(() => {
        this.$root.$emit('onAPILoadingEnd')
      })

      try {
        this.userInfo = this.indexdb.get('userInfo');
      } catch (e) {
        console.error("failed to qusry the userInfo", e);
      }
      
      if (typeof this.userInfo === 'undefined' ) {
        this.$router.push('/')
      }
    },
    getChartData () {
      let json = {}
      let labelData = []
      let valueData = []

      json = this.bodyWeightList
      
      console.log('json : ', json)
      console.log('this.bodyWeightList : ', this.bodyWeightList)


      json.data.forEach((item,idx)=>{
        labelData.push(item.weightdate);
        valueData.push(parseInt(item.weight));
      });

      this.chartData.labelData = labelData
      this.chartData.valueData = valueData

    }
  }
}
</script>