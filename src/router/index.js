import Store from '../store'
import  Vue from 'vue'
import Router from  'vue-router'

const index =()=> import('@/views/index/index')
const part =()=> import('@/views/publishArt/pArt')
const detail =()=> import('@/views/detail/detail')
const pro = ()=> import('@/views/pro/pro')
const log = ()=> import('@/views/log/log')
const canvas = ()=>import('@/views/demo/canvas')
const cloudMusic = ()=> import('@/views/demo/cloudmusic')
const error = ()=>import('@/error')

Vue.use(Router)
const routes=[
    {
        path:'',
        redirect:'/index'
    },
    {
        path:'/index',
        component:index
    },
    {
        path:'/admin',
        component:part
    },
    {
        path:'/detail/:id',
        component:detail
    },
    {
        path:'/pro',
        component:pro
    },
    {
        path:'/log',
        component:log
    },
    {
        path:'/canvas',
        component:canvas
    },
    {
        path:'/cloudMusic',
        component:error
    }
]
const router = new Router({
    routes,
    mode:'history'

})
router.beforeEach((to,from,next)=>{
    if(window.localStorage.getItem('isLog'))
    {
        Store.commit('log',window.localStorage.getItem('isLog'))
    }
    const needLog=['/admin']
    if(needLog.indexOf(to.fullPath)  > -1 && !Store.state.isLog)
    {


        next('/log')
    }
    next()

})
export default router