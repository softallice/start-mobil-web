<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <q-card v-bind:style="$q.screen.lt.sm?{'width': '80%'}:{'width':'30%'}">
          <!-- <q-card-section>
            <q-avatar size="103px" class="absolute-center shadow-10">
              <img src="profile.svg">
            </q-avatar>
          </q-card-section> -->
         
          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-h8 ellipsis">
                송아리에 처음 방문 하셨습니다. <br>
                간단히 기본정보를 등록해야  <br>
                서비스 이용이 가능합니다. 
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form
              class="q-gutter-md"
            >
              <q-input
                filled
                v-model="username"
                label="사용자이름"
                lazy-rules
              />

              <div class="q-gutter-sm">
                <q-radio v-model="sex" val="M" label="남" />
                <q-radio v-model="sex" val="F" label="여" />
              </div>

              <q-input 
                filled 
                v-model="birth" 
                label="생년월일"
                input-class="text-center">
                <template v-slot:append>
                  <q-btn icon="event" round color="primary">
                    <q-popup-proxy @before-show="updateProxy" transition-show="scale" transition-hide="scale">
                      <q-date v-model="proxyBirth">
                        <div class="row items-center justify-end q-gutter-sm">
                          <q-btn label="Cancel" color="primary" flat v-close-popup />
                          <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-btn>
                </template>
              </q-input>


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

              <div >
                <q-btn class="full-width" label="시작하기" @click="saveUserInfo" to="/home" type="button" color="primary"/>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { date } from 'quasar'
import { KeyValueStore } from "pages/common/keyValStore.js";
export default {
    data() {
        return {
            username: '송아리',
            sex: 'M',
            birth: date.formatDate(new Date(), 'YYYY/MM/DD') ,
            bodyWeight: 50,
            proxyBirth: date.formatDate(new Date(), 'YYYY/MM/DD') ,
            userInfo: {}
        }
    },
    methods: {
      updateProxy () {
        this.proxyBirth = this.birth
      },

      save () {
        this.birth = this.proxyBirth
      },

      weightAdd () {
        this.bodyWeight = this.bodyWeight + 1
      },

      weightMinus () {
        this.bodyWeight = this.bodyWeight - 1
      },

      saveUserInfo () {
        const inputDate = date.formatDate(new Date(), 'YYYY/MM/DD')

        const user = {
          username: this.username,
          sex: this.sex,
          birth: this.birth,
        }
        const userBodyWeight = [{
          weightdate: inputDate,
          weight: this.bodyWeight,
          date: new Date(),
        }]

        
        // 사용자 기본 정보 저장
        try {
          this.indexdb.store('userInfo', user);
        } catch (e) {
          console.error("failed to save the userInfo", e);
        }
        // 최초 몸무게 저장
        try {
          this.indexdb.store('userWeight', userBodyWeight);
        } catch (e) {
          console.error("failed to save the userweight", e);
        }
        
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
      
      if (typeof this.userInfo !== 'undefined' ) {
        this.$router.push('home')
      }
    }
}
</script>

<style>

  .bg-image {
   background-image: linear-gradient(135deg, #64eca1 0%, #b2e5b9 100%);
  }
</style>
