import { createRouter ,createWebHistory,createWebHashHistory} from 'vue-router'
import home from '../views/home/index.vue'

export const routes = [
  {
    path:'/',
    component: home,
    redirect: 'index',
    children:[
      {
        path:'index',
        name:'evaluation',
        component:()=>import("@/views/evaluation/index.vue")
      }
    ]
  },
  {
    path:'/scanCode',
    name:'scanCode',
    component:()=>import('@/views/scanCode/index.vue'),
  }
]
const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes
})
export default router