<template>
    <div class="songItem">
        <div class="playButton"><img src="../../assets/img/play.png" /></div>
        <div class="songName">{{name}}</div><div class="songInfo"></div>
    </div>
</template>

<script>
    export default {
        name: "cloudItem",
        data(){
            return {
                imgSrc:'',
                name:'小幸运',
                author:'老坛酸菜',
                songInfl:'《一首好听的歌》'

            }
        }
    }
</script>

<style scoped>
.songItem{
    width: 80%;
}
</style>