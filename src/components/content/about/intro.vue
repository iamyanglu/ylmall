<template>
    <div >
        <div  class="demo"> <a @click="todemo('/canvas')">html简单画布(按下s建下载)</a></div>
        <div  class="demo"> <a href="http://49.235.121.158:70" target="_blank">简单网易云接口Demo</a></div>
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