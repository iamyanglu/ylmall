<template>
    <div >
        <div v-for="item in demoList" class="demo"> <a @click="todemo(item.demoPath)">{{item.name}}</a></div>
    </div>
    
</template>

<script>
    export default {
        name: "intro",
        methods:{
            todemo(path){
                this.$router.push(path)

            }
        },
        data(){
            return {
                demoList:[
                    {name:'html简单画布(按下s建下载)',demoPath:'/canvas'},
                    {name:'网易云Demo',demoPath:'/cloudMusic'}
                ]
            }
        }
    }
</script>

<style scoped>
.demo{
    text-align: center;
    margin: 0 auto;
    width: 80%;
    height: 49px;
    line-height: 49px;
    border-bottom: 1px saddlebrown solid;
    cursor: pointer;
}
</style>