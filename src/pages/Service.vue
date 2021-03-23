<template>
  <q-page>
    <!-- <q-card class="bg-primary text-white">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>
    </q-card> -->
    <q-banner inline-actions class="text-white bg-primary">
      <div class="full-height full-width flex flex-center">
        <div class="custom-caption">
          <div class="text-h7">
            송아리 님의 다이어트 지수
          </div>

          <div class="text-h5">
            101% 
            <q-icon name="arrow_circle_up" class="text-white" style="font-size: 3rem;" />
          </div>
          
          <div>
            <q-btn size="xs" color="red-12" label="자세히보기" icon-right="chevron_right"/>
          </div>
        </div>
      </div>
      <!-- <template v-slot:action>
        <q-btn flat color="white" label="Turn ON Wifi" />
      </template> -->
    </q-banner>
    
    <q-dialog v-model="dialog" :position="position">
      <q-card style="width: 350px">
        <q-bar>
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>
        <q-card-section class="row items-center no-wrap">
          <div>
            <div class="text-weight-bold">이벤트</div>
            <div class="text-grey">광고 및 이벤트</div>
          </div>
          <q-space />
          <q-btn flat round icon="pause" />
        </q-card-section>
      </q-card>
    </q-dialog>
    <div class="q-pa-md row items-start q-gutter-md">
      <!-- 01. 다이어트 -->
      <q-card class="my-card" @click="$router.push('/diet')">
        <q-card-section >
          <q-card-section horizontal class="col-6 flex flex-center">
            <q-img
              class="rounded-border"
              style="height: 55px; max-width: 55px"
              src="../assets/images/menus/diet.png"
            />
            <q-card-actions vertical>
              <div>
                <div class="text-weight-bold">다이어트</div>
                <div class="text-grey">체질에 맞는 다이어트 방법확인해 주세요.</div>
              </div>
            </q-card-actions>

            <q-card-actions vertical>
              <q-btn flat round color="primary"  icon="chevron_right" to="/diet" />
            </q-card-actions>
          </q-card-section>
        </q-card-section>
      </q-card>

      <!-- 02. 처방전 -->
      <q-card class="my-card" @click="$router.push('/diet')">
        <q-card-section >
          <q-card-section horizontal class="col-6 flex flex-center">
            <q-img
              class="rounded-border"
              style="height: 55px; max-width: 55px"
              src="../assets/images/menus/insurance.png"
            />
            <q-card-actions vertical>
              <div>
                <div class="text-weight-bold">처방전</div>
                <div class="text-grey">처방받은 내역및 복용 방법을 확인해 주세요.</div>
              </div>
            </q-card-actions>

            <q-card-actions vertical>
              <q-btn flat round color="primary"  icon="chevron_right" />
            </q-card-actions>
          </q-card-section>
        </q-card-section>
      </q-card>

      <!-- 03. 아이성장 -->
      <q-card class="my-card" @click="$router.push('/stature')">
        <q-card-section >
          <q-card-section horizontal class="col-6 flex flex-center">
            <q-img
              class="rounded-border"
              style="height: 55px; max-width: 55px"
              src="../assets/images/menus/child-add.png"
            />
            <q-card-actions vertical>
              <div>
                <div class="text-weight-bold">아이성장</div>
                <div class="text-grey">성장기 아이의 영양과 건강을 챙겨 주세요.</div>
              </div>
            </q-card-actions>

            <q-card-actions vertical>
              <q-btn flat round color="primary"  icon="chevron_right" to="/stature" />
            </q-card-actions>
          </q-card-section>
        </q-card-section>
      </q-card>

      <!-- 04. 혈당 및 혈압 -->
      <q-card class="my-card" @click="$router.push('/stature')">
        <q-card-section >
          <q-card-section horizontal class="col-6 flex flex-center">
            <q-img
              class="rounded-border"
              style="height: 55px; max-width: 55px"
              src="../assets/images/menus/sugar-blood-level.png"
            />
            <q-card-actions vertical>
              <div>
                <div class="text-weight-bold">혈당 및 혈압</div>
                <div class="text-grey">지속적인 만성 질환 관리를 시작하세요.</div>
              </div>
            </q-card-actions>

            <q-card-actions vertical>
              <q-btn flat round color="primary"  icon="chevron_right" />
            </q-card-actions>
          </q-card-section>
        </q-card-section>
      </q-card>

      <!-- 04. 예약  -->
      <q-card class="my-card" @click="$router.push('/stature')">
        <q-card-section >
          <q-card-section horizontal class="col-6 flex flex-center">
            <q-img
              class="rounded-border"
              style="height: 55px; max-width: 55px"
              src="../assets/images/menus/appointment.png"
            />
            <q-card-actions vertical>
              <div>
                <div class="text-weight-bold">예약</div>
                <div class="text-grey">의사와의 만남 스마트하게 예약하세요.</div>
              </div>
            </q-card-actions>

            <q-card-actions vertical>
              <q-btn flat round color="primary"  icon="chevron_right" />
            </q-card-actions>
          </q-card-section>
        </q-card-section>
      </q-card>
      <!-- 스티키 버튼 -->
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn fab icon="card_giftcard" color="accent" @click="open('bottom')" />
      </q-page-sticky>
    </div>
  </q-page>
  
</template>

<script>
export default {
  name: 'Service',
  data () {
    return {
      dialog: false,
      position: 'bottom'
    }
  },
  methods: {
    open (position) {
      this.position = position
      this.dialog = true
    }
  }
}
</script>
<style lang="sass" scoped>
  .my-card
    width: 100%
    // max-width: 350px
  .custom-caption
    text-align: center
    padding: 12px
    color: white
</style>
