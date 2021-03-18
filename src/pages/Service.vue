<template>
  <q-page padding>
    <div>
      <q-img
        src="../assets/images/logos/logo.png"
      />
    </div>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="card_giftcard" color="accent" @click="open('bottom')" />
    </q-page-sticky>

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
    <q-list bordered padding>
      <q-item>
        <q-item-section top thumbnail class="q-ml-none">
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </q-item-section>

        <q-item-section>
          <q-item-label>한방 다이어트</q-item-label>
          <q-item-label caption>체질에 맞는 다이어트 식품</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>meta</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>  
    <q-separator spaced />
    
    <q-list bordered padding>
      <q-item>
        <q-item-section top thumbnail class="q-ml-none">
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </q-item-section>

        <q-item-section>
          <q-item-label>처방전</q-item-label>
          <q-item-label caption>처방 받은 내역 및 복용방법을 확인하세요.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>meta</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>  
    <q-separator spaced />
       
    <q-list bordered padding>
      <q-item>
        <q-item-section top thumbnail class="q-ml-none">
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </q-item-section>

        <q-item-section>
          <q-item-label>아이 성장 관리</q-item-label>
          <q-item-label caption>성장기 아이의 영양 건강.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>meta</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>  
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
