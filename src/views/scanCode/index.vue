<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import vueQr from 'vue-qr/src/packages/vue-qr.vue'

const show = ref(true), imageUrl = ref('xxx')
const router = useRouter()
function go(){
  router.push('/evaluation')
}

function close(){
  show.value = false
}
</script>

<template>
  <van-popup v-model:show="show"
   :close-on-click-overlay='false' 
   class="popupMark">
    <div class="codeBox">
      <div class="imgBox">
        <van-image
          class="codeImg"
          fit="contain"
          src="/src/assets/imgs/qrcode.png"
        />
        <vue-qr class="qrCode" :logoSrc="imageUrl.value" text="http://www.baidu.com" :size="176" :margin='0'></vue-qr>
        <van-image
          @click="close"
          class="closeImg"
          fit="contain"
          src="/src/assets/imgs/close.png"
        />
      </div>
    </div>
  </van-popup>
</template>
<style>
.van-popup{
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background-color: transparent;
}
</style>
<style scoped lang="scss">

.popupMark{
  .codeBox{
    width: 100%;
    height: 100%;
    .imgBox{
      position: relative;
      top: 90px;
    }
    .codeImg{
      width: 305px;
      height: 398px;
    }
    .closeImg{
      width: 42px;
      height: 42px;
      position: absolute;
      top: 500px;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }
    .qrCode{
      position: absolute;
      left: 0;
      right: 0;
      top: 10px;
      bottom: 0;
      margin: auto;
    }
  }
}
</style>
