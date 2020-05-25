<template>
    <div>

        <indexhead/>
        <motto/>

        <show-art :list="list.artlist"  />


        <my-button   @getmoreart="getArt"  :totalNum="totalart" :artNum="nowartNum"></my-button>

    </div>
    
</template>

<script>

    import indexhead from '@/components/conmon/indexhead/myhead'
    import motto from '@/components/content/motto/motto'
    import showArt from '@/components/content/showArt/showArt'
    import {getart,total} from "../../network/admin";
    import myButton from '@/components/conmon/sButton/sButton'
    export default {
        name: "index",
        components:{
          indexhead,
            motto,
            showArt,
            myButton,

        },
        data(){
            return{
                list:{page:0,artlist:[]},
                isLoad:true,
                totalart:0,

            }
        },
        computed:{
            nowartNum(){
                return this.list.artlist.length
            }
        },
        methods:{

            getArt(){ // 拿到6篇文章
                getart(this.list.page).then(res=>{
                    this.$emit('loaded')
                        //当请求到相同数据
                    if(res.data.code === 1)
                    {
                        this.list.page+=1;
                        this.list.artlist.push(...res.data.list)
                    }
                    else if(res.data.code === 0){


                    }

                    this.isButton=true
                    this.gettotal()
                })

            },
            //拿到文章总数做 按钮显示判断
            gettotal(){
                total().then(res=>{
                    this.totalart = parseInt(res.data.total)
                })
            }

        },
        created() {
            this.getArt()
        }

    }
</script>

<style scoped>

</style>