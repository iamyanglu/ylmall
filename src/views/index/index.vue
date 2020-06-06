<template>
    <div class="index">
        <small-utl  @showSide="showSide" class="utlImg"></small-utl>
        <mobbile-head class="mobbile"></mobbile-head>
        <indexhead class="inHead"/>
        <motto class="motto"/>

        <show-art :list="list.artlist" class="artList" />


        <my-button   @getmoreart="getArt"  :totalNum="totalart" :artNum="nowartNum"></my-button>

    </div>
    
</template>

<script>

    import indexhead from '@/components/conmon/indexhead/myhead';
    import motto from '@/components/content/motto/motto';
    import showArt from '@/components/content/showArt/showArt';
    import {getart,total} from "../../network/admin";
    import myButton from '@/components/conmon/sButton/sButton';
    import mobbileHead from "../../components/conmon/indexhead/mobbileHead";
    import smallUtl from "../../components/conmon/indexhead/smallUtl";
    import  {uniformSpeed} from "../../myfunJs/my";

    export default {
        name: "index",
        components:{
          indexhead,
            motto,
            showArt,
            myButton,
            mobbileHead,
            smallUtl

        },
        data(){
            return{
                list:{page:0,artlist:[]},
                isLoad:true,
                totalart:0,
                isStart:true


            }
        },
        computed:{
            nowartNum(){
                return this.list.artlist.length
            }
        },
        methods:{
            showSide(){

                let w = document.documentElement.offsetWidth;
                w= parseInt(w/2)
                let intr = document.querySelector('.mobbile');
                let shArt = document.querySelector('.artList')
                let img = document.querySelector('.utlImg')
                if(this.isStart)
                {
                    uniformSpeed(shArt,w,'marginLeft')
                    uniformSpeed(intr,w,'left')
                    uniformSpeed(img,w,'marginLeft')
                    this.isStart = false
                }
                else{

                    uniformSpeed(shArt,0,'marginLeft')
                    uniformSpeed(intr,0,'left')
                    uniformSpeed(img,0,'marginLeft')
                    this.isStart = true

                }

1
            },

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
@media screen and (max-width: 900px){
    .inHead{
        display: none;
    }
    .inHead{
        overflow-x: hidden;
    }


}
@media screen and (min-width: 900px){
    .index{
        overflow-x: hidden;
    }
}
</style>