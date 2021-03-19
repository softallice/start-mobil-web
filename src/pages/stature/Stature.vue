<template>
  <div class="q-pa-md">
    <div style="max-width: 600px">
      <q-tabs
        v-model="tab"
        align="justify"
        narrow-indicator
        class="q-mb-lg bg-grey-3"
      >
        <q-tab class="text-purple" name="height" label="아이 키" />
        <q-tab class="text-orange" name="weight" label="아이 몸무게" />
        <q-tab class="text-teal" name="record" label="성장 기록" />
      </q-tabs>

      <div class="q-gutter-y-sm">
        <q-tab-panels
          v-model="tab"
          animated
          transition-prev="fade"
          transition-next="fade"
          
        >
          <q-tab-panel name="height" class="bg-purple text-white text-center">
            <div class="text-h6">아이 키</div>
            <!-- <ChildGrowth :childData="childData" :id="id" ref="growthChart" /> -->
          </q-tab-panel>

          <q-tab-panel name="weight" class="bg-orange text-white text-center">
            <div class="text-h6">아이 몸무게</div>
            <!-- <ChildGrowth :childData="childData" :id="id" ref="growthChart"/> -->
          </q-tab-panel>

          <q-tab-panel name="record" class="bg-teal text-white text-center">
            <div class="text-h6">성장 기록</div>
            <!-- <ChildGrowth :childData="childData" :id="id" ref="growthChart"/> -->
          </q-tab-panel>

        </q-tab-panels>

        
      </div>
    </div>
  </div>
</template>

<script>
import ChildGrowth from "src/components/stature/ChildGrowthChart"
export default {
components: {
    ChildGrowth,
  },
  data () {
    return {
      tab: 'height',
    //   childData: 
    //     {
    //         birthDate: "2013-07-28",
    //         heightList: [0, "55.7"],
    //         nickName: "송아리",
    //         sex: "0",
    //         weightList: [0, "4.5"]
    //     },
    //   id:1,
    }
  },
}
</script>