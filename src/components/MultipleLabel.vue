<script>
import { ref, reactive } from 'vue'
export default {
  name:'multipleLabel'
}
</script>

<script setup>
const props = defineProps({
  labelList:{
    type:Array,
    required:true,
    default:[]
  }
})
const emit = defineEmits(['select'])
let labelArr = reactive({labelList:props.labelList}),choosedLabel = reactive({choosedList:[]})

console.log(props.labelList,'组件');
function choose(label){
  labelArr.labelList.forEach(item => {
    if(item.id === label.id){
      item.choosed = !item.choosed
    }
  })
  choosedLabel.choosedList = props.labelList.filter(item => item.choosed)
  emit('select',labelArr.labelList)
}

</script>

<template>
  <div class="labelBox">
    <div :class="['label',{'activeLabel':labelItem.choosed}]"
      @click="choose(labelItem)" 
      v-for="labelItem in props.labelList" :key="labelItem.id"
    >
      {{labelItem.label}}
    </div>
  </div>
</template>

<style lang="scss">
.labelBox{
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  .label{
    width: 163px;
    line-height: 40px;
    text-align: center;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 6px;
    border: 1px solid #F5F5F5;
    font-weight: 400;
  }
  .activeLabel{
    font-weight: 500;
    color: #EE7800;
    background: rgba(254, 248, 245, 0.8);
    border: 1px solid #F3A04C;
  }
}
</style>
