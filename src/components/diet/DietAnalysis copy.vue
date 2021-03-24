<template>
  <q-page class="q-pa-sm">  
    <div style="max-width: 800px; width: 100%;">
        <CardChartsLine :line="diet"/>
    </div>
      
    <!-- 다이어트 체중 입력 다이얼로그 -->
    <q-dialog v-model="promptWeight" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">체중 입력</div>
          <q-input 
            filled 
            v-model="weightdate" 
            label="측정일자"
            input-class="text-center">
            <template v-slot:append>
              <q-btn icon="event" round color="primary">
                <q-popup-proxy @before-show="updateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="proxyWeightdate">
                    <div class="row items-center justify-end q-gutter-sm">
                      <q-btn label="취소" color="primary" flat v-close-popup />
                      <q-btn label="선택" color="primary" flat @click="save" v-close-popup />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-btn>
            </template>
          </q-input>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input 
                filled 
                bottom-slots 
                v-model="bodyWeight" 
                label="무게" 
                type="number"
                counter 
                maxlength="3"
                input-class="text-center">
                <template v-slot:prepend>
                  <q-btn round dense flat icon="remove" @click="weightMinus"  />
                </template>
                <template v-slot:append>
                  <q-btn round dense flat icon="add" @click="weightAdd" />
                </template>
              </q-input>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="취소" v-close-popup />
          <q-btn flat label="저장" v-close-popup @click="saveUserInfo" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- 스티키 버튼 -->
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="monitor_weight" color="accent" @click="promptWeight = true" />
    </q-page-sticky>
  </q-page>
</template>

<script>
import { KeyValueStore } from "pages/common/keyValStore.js"
import { date } from 'quasar'

export default {
  name: 'DietAnalysis',
  components: {
    CardChartsLine: () =>  import('components/cards/CardChartsLine'),
  },
  data () {
    return {
      weightdate: date.formatDate(new Date(), 'YYYY/MM/DD'),
      proxyWeightdate: date.formatDate(new Date(), 'YYYY/MM/DD') ,
      promptWeight: false,
      bodyWeight: 50,
      userInfo: {},
      userWeight: [],
    }
  },
  props: {
    diet: {
      type: Object,
      required: true
    }
  },
  watch: {
    diet: function (value) {
      if (!!value) {
        console.log('watch')
      }
    }    
  },
  beforeMount () {
    console.log('diet',this.diet)
    if (!!(this.diet && this.diet.dataset)) {
      console.log('beforeMount')
    }
  },
  beforeCreate: async function () {
    // 로컬 DB 초기화 
    this.indexdb = new KeyValueStore("user-metadata", "metadata");

    try {
      this.userInfo = await this.indexdb.get('userInfo');
    } catch (e) {
      console.error("failed to qusry the userInfo", e);
    }
    
    if (typeof this.userInfo === 'undefined' ) {
      this.$router.push('/')
    }
  },
  methods: {
    //일자 선택
    updateProxy () {
      this.proxyWeightdate = this.weightdate
    },

    save () {
      this.weightdate = this.proxyWeightdate
    },
    // 체중 선택
    weightAdd () {
      this.bodyWeight = this.bodyWeight + 1
    },

    weightMinus () {
      this.bodyWeight = this.bodyWeight - 1
    },
     
    async saveUserInfo  () {
      // const inputDate = date.formatDate(new Date(), 'YYYY/MM/DD')
      try {
        this.userWeight = await this.indexdb.get('userWeight');
      } catch (e) {
        console.error("failed to qusry the userWeight", e);
      }

      const userBodyWeight = {
        weightdate: this.weightdate,
        weight: this.bodyWeight,
        date: new Date(),
      }
      // 배열 저장을 위해 
      const weightArray = this.userWeight
      weightArray.push(userBodyWeight)

      // 몸무게 저장
      try {
        this.indexdb.store('userWeight', weightArray);
      } catch (e) {
        console.error("failed to save the userweight", e);
      }

      console.log('weightArray',weightArray)
      // this.diet = weightArray
      this.diet.data = weightArray
    }
  },
}
</script>