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
                송가리 어플에 로그인 하시면 <br>
                진료기록관리, 성장관리 등 회원 전용 서비스를 <br>
                모두 이용 하실 수 있습니다.                
                {{$store.state.auth.loggedIn}}
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

              <q-input
                type="password"
                filled
                v-model="password"
                label="비밀번호"
                lazy-rules

              />

              <div >
                <q-btn class="full-width" label="로그인" to="/diet" type="button" color="primary"/>
              </div>
              <div >
                <q-btn class="full-width" label="구글로그인" @click="signInWithGoogle" type="button" color="primary"/>
              </div>
              <div >
                <q-btn class="full-width" label="구글로그아웃" @click="siginOut" type="button" color="primary"/>
              </div>
              <div >
                <q-btn class="full-width" label="notify" @click="showNotif" type="button" color="primary"/>
              </div>
              
            </q-form>
          </q-card-section>
        </q-card>
        
        <q-btn class="full-width absolute-bottom" label="회원가입" to="/consent" type="button" color="primary"/>            
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    data() {
        return {
            username: 'Songari',
            password: '12345'
        }
    },
    mounted () {
      this.loggedInOrLoggedOut()
    },
    methods: {
      ...mapActions('auth', ['loginUser', 'logoutUser','loggedInOrLoggedOut']),
      async signInWithGoogle () {
        this.loginUser()
      },
      async siginOut() {
        this.logoutUser()
      },
      showNotif () {
        this.$q.notify({
          message: 'Jim pinged you.',
          color: 'purple'
        })
      }  
    }
}
</script>

<style>

  .bg-image {
   background-image: linear-gradient(135deg, #64eca1 0%, #b2e5b9 100%);
  }
</style>
