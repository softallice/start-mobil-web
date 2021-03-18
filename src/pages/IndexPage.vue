<template>
  <div class="q-pa-md">
    <q-carousel
      animated
      infinite
      v-model="slide"
      :navigation-position="navPos"
      swipeable
      navigation
      navigation-icon="radio_button_unchecked"
      navigation-active-icon="radio_button_checked"
      height="200px"
      
      control-color="blue-grey-3"
      :autoplay="autoplay"
    >
      <q-carousel-slide name="first" img-src="https://images-kr.girlstyle.com/wp-content/uploads/2020/08/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA-2020-08-09-%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE-3.18.16.png">
        <div class="absolute-right custom-caption">
          <div class="text-h6">다이어트</div>
          <div class="text-subtitle2">운동</div>
          <div > 
            <br><br><br><br>
            <q-btn unelevated  rounded color="primary" size ="sm" label="로그인하기" to="/login" />
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/7akk/image/I8Ze2vROVbnVZQfi2FqY9RVbnL8.jpg">
        <div class="absolute-right custom-caption">
          <div class="text-h6">아이 성장</div>
          <div class="text-subtitle2">키/몸무게</div>
          <div> 
            <br><br><br><br>
            <q-btn unelevated  rounded color="primary" size ="sm" label="로그인하기" to="/login" />
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="https://mintir.com/data/cheditor4/1803/4566f53cafe2a7840cc08daeb46a5ecb_20180309104945_rorensxg.jpg">
        <div class="absolute-right custom-caption">
          <div class="text-h6">여성 광고</div>
          <div class="text-subtitle2">주기별 관리</div>
          <div> 
            <br><br><br><br>
            <q-btn unelevated  rounded color="primary" size ="sm" label="로그인하기" to="/login"/>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
     
     <q-separator size="10px" color="white"/>

    <q-card class="my-card">
      <q-card-section>
        <div class="text-subtitle2">스트레칭</div>
      </q-card-section>
      <q-video src="https://www.youtube.com/embed/Nv0zWRGGRRk?rel=0" />
      <!-- 동영상은  https://www.youtube.com/embed/<요기에 주소>?rel=0-->
      
    </q-card>

     <q-separator size="10px" color="white"/>
     
    
    <q-card class="my-card">
      <q-card-section>
        <div class="text-subtitle2">우리 아이 지켜주는 <span class="text-weight-bold" style="color: orange">송가리 시즌 진료</span> </div>
      </q-card-section>
      <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap">
        <q-img class="rounded-borders col-5 " style="height: 100px; max-width: 300px" src="http://www.businesskorea.co.kr/news/photo/202003/42693_55108_233.jpg" />
        <q-img class="rounded-borders col-5 " style="height: 100px; max-width: 300px" src="https://i.ytimg.com/vi/25eaiesJIa8/maxresdefault.jpg" />        
      </div>
      <q-separator size="5px" color="white"/>
      <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap">
        <q-img class="rounded-borders col-5 " style="height: 100px; max-width: 300px" src="https://www.k-health.com/news/photo/202001/46982_40464_4715.jpg" />
        <q-img class="rounded-borders col-5 " style="height: 100px; max-width: 300px" src="https://you-green.com/wp-content/uploads/2020/06/4-%EB%A7%9E%EC%B6%A4%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8_%EC%9C%A0%EC%95%A4%EA%B7%B8%EB%A6%B0%EC%97%AC%EC%84%B1%ED%95%9C%EC%9D%98%EC%9B%90_%EB%B6%80%EC%82%B0-%EB%B6%81%EA%B5%AC-%EB%8D%95%EC%B2%9C%EB%8F%99.png" />
      </div>
      <q-separator size="10px" color="white"/>
    </q-card>

    <q-separator size="10px" color="white"/>

    <q-carousel
      animated
      v-model="slide2"
      infinite
      swipeable
      height="130px"
      :autoplay="autoplay"
    >
      <q-carousel-slide :name="1" img-src="https://previews.123rf.com/images/ssstocker/ssstocker1609/ssstocker160900085/62748343-%EC%97%AC%EC%84%B1%EC%9D%98-%EC%B2%B4%EC%A4%91-%EA%B0%90%EB%9F%89-%EC%84%B1%EA%B3%B5-%EC%9D%B4%EC%A0%84%EA%B3%BC-%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4-%EC%85%98-%ED%9B%84-%EC%A7%80%EB%B0%A9%EA%B3%BC-%EC%8A%AC%EB%A6%BC-%EC%97%AC%EC%9E%90.jpg" />
      <q-carousel-slide :name="2" img-src="https://post-phinf.pstatic.net/MjAxODA4MzBfMTA0/MDAxNTM1NTg4MTEzMTA4.6YGRaq5hDP_c0l7Qkje0XLlgR-S_axRxEYufTQb4Ax8g.cc1oSobuw-2DHe-B8FfFJKTK_7mw6daxlCO3olkl-Uog.JPEG/31509_38715_4628.jpg?type=w1200" />
    </q-carousel>
    
  </div>

  
  
</template>

<script>

export default {
  name: 'MainAdv',
  
  data () {
    return {
      slide: 'first',
      slide2: 1,
      navPos: 'top',
      autoplay: true
    }
  }
}
</script>

<style lang="sass" scoped>
.custom-caption
  text-align: right
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
.my-card
  width: 100%
  // max-width: 300px
</style>
