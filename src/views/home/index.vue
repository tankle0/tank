<script setup>
import { ref, nextTick } from 'vue'
import { useRouter } from 'vue-router';
import backImg from '@/assets/imgs/back.png'

const router = useRouter()

function go(){
  router.push('/scanCode')
}
</script>

<template>
  <div class="home">
    <div class="header">
      <van-image
        class="backImg"
        fit="contain"
        :src="backImg"
      />
      <div class="right">
        <span>小问答</span>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home{
  width: 100%;
  height: 100%;
  background-color: #fff;
  .header{
    display: flex;
    align-items: center;
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    padding-left: 16px;
    height: 44px;
    .backImg{
      width: 24px;
      height: 24px;
    }
    .right{
      flex: 1;
      text-align: right;
      span{
        margin-right: 160px;
      }
    }
  }
}
</style>
