<script>

import { ref, defineComponent, reactive, onMounted} from 'vue'
import { useRouter } from 'vue-router';
import multipleLabel from "@/components/MultipleLabel.vue"
import loginApi from '@/request/api/login.js'
import badGreyImg from '@/assets/imgs/bad_grey.png'
import badImg from '@/assets/imgs/bad.png'
import fineImg from '@/assets/imgs/fine.png'
import fineGreyImg from '@/assets/imgs/fine_grey.png'

export default{
  name:'evaluation',
}

</script>
<script setup>
const isActive = ref(null)
const router = useRouter()
let badUrl = ref(badGreyImg),fineUrl = ref(fineGreyImg),labelObj = reactive({labelData:[]})
function go(){
  router.push('/scanCode')
}
onMounted(() => {
  console.log('mounted!')
})
// doLogin()
function doLogin(){
  loginApi.login({
    username:'dsds',
    password:'sadsad',
    clientId:'tkcspass'
  })
  .then(res=>{
    console.log(res);
  })
}
//选择评价
function choose(type){
  labelObj.labelData = []
  if(type === 'bad'){
    if(isActive.value === 'bad'){
      badUrl.value = badGreyImg
      isActive.value = null
    }else{
      badUrl.value = badImg
      isActive.value = 'bad'
    }
    fineUrl.value = fineGreyImg
    labelObj.labelData = [{label:'差评',id:'dsad',choosed:false},{label:'特差评',id:'dsaad',choosed:false}]
  }else{
    if(isActive.value === 'fine'){
      fineUrl.value = fineGreyImg
      isActive.value = null
    }else{
      fineUrl.value = fineImg
      isActive.value = 'fine'
    }
    badUrl.value = badGreyImg
    labelObj.labelData = [{label:'好评',id:'s',choosed:false},{label:'特好评',id:'dsss',choosed:false}]
  }
  console.log(labelObj.labelData,);
}
//接收标签组件传参
function select(data){
  // labelObj.labelData = []
  // labelObj.labelData = data
  console.log(data[0]?.id);
}
</script>

<template>
  <div class="evaluation">
    <div class="title">您对本次文章是否满意?</div>
    <div class="content">
      <div class="imgBox">
        <div class="textBox" @click="choose('bad')">
          <van-image
            class="evalImg"
            fit="contain"
            :src="badUrl"
          />
          <div :class="['text',{'activeText': isActive === 'bad'}]">
            需努力
          </div>
        </div>
        <div class="textBox" @click="choose('fine')">
          <van-image
            class="evalImg"
            fit="contain"
            :src="fineUrl"
          />
          <div :class="['text',{'activeText': isActive === 'fine'}]">
            太赞了
          </div>
        </div>
      </div>
      <div class="textDetail">
        <span v-if="isActive == 'bad'">“ 文章一般，继续努力 ”</span>
        <span v-if="isActive == 'fine'">“ 文章太赞了，我想夸夸作者 ”</span>
      </div>
    </div>
    <div class="labelContent" v-if="isActive">
      <multiple-label @select="select" :labelList='labelObj.labelData'></multiple-label>
    </div>
    <footer v-if="isActive">
      <van-button class="submitBtn" type="success" @click="go">匿名提交</van-button>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.evaluation{
  width: 100%;
  height: 100%;
  margin-top: 20px;
  .title{
    font-size: 22px;
    color: #333333;
    font-weight: 500;
  }
  .content{
    .imgBox{
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 0 29px 0;
      & :first-child{
        margin-right: 45px;
      }
      .textBox{
        width: 100px;
        position: relative;
        .evalImg{
          width: 100px;
          height: 100px;
        }
        .text{
          width: 100%;
          text-align: center;
          position: absolute;
          top: 93px;
          line-height: 22px;
          font-size: 16px;
          font-weight: 400;
          color: #999999;
        }
        .activeText{
          font-weight: 500;
          color: #333333;
        }
      }
    }
    .textDetail{
      font-size: 18px;
      font-weight: 500;
      color: #333333;
      line-height: 25px;
      margin-bottom: 19px;
    }
  }
  .labelContent{
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
  footer{
    width: 100%;
    padding: 0 16px;
    position: fixed;
    bottom: 44px;
    box-sizing: border-box;
    .submitBtn{
      width: 100%;
      line-height: 50px;
      background: #EE7800;
      border-radius: 5px;
      font-size: 16px;
      border-color: #EE7800;
    }
  }
}
</style>
