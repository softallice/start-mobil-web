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
            <div class="text-h6">My 다이어리</div>
            <Diet/>
          </q-tab-panel>

          <q-tab-panel name="analysis" class="bg-orange text-white text-center">
            <div class="text-h6">다이어트 분석</div>
            <Diet/>
          </q-tab-panel>

          <q-tab-panel name="record" class="bg-teal text-white text-center">
            <div class="text-h6">상담 기록</div>
            <Diet/>
          </q-tab-panel>

        </q-tab-panels>

        
      </div>
    </div>
  </div>
</template>

<script>
import Diet from "src/components/diet/Diet.vue"
export default {
components: {
    Diet,
  },
  data () {
    return {
      tab: 'diary'
    }
  },
}
</script>