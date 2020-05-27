<template>
    <div>
        <div class="musicBox">
            <div class="searchBlank">
            <input v-model.number="keyWords" class="musicKey"><a class="search" autofocus="autofocus" @click="searchMusic">搜索</a>
            </div>
            <div class="music_list"><cloud-item v-for="item in "></cloud-item></div>


        </div>


    </div>
</template>

<script>
    import {getIdList} from "../../network/musicRequest";
    import cloudItem from "./cloudItem";
    import CloudItem from "./cloudItem";

    export default {
        name: "cloudmusic",
        components: {CloudItem},
        data(){
            return {
               keyWords:'',
                totalSongs:0,
                songsList:[],
                totalPage:0,


            }
        },
        methods:{
            components:{
                cloudItem
            },

            searchMusic(){
                getIdList(this.keyWords).then
                (res=>{

                    if(res.data.code === 200){
                        let songs = res.data.result
                        this.totalSongs = songs.songCount;
                        this.songsList = songs.songs

                    }
                    else{
                        window.alert('音乐搜索失败')
                    }
                    }
                )

            }

        },
        created() {
            this.$emit('loaded');
        }
    }
</script>

<style scoped>
    .musicBox{
        padding: 50px;
        width: 60%;
        margin: 100px auto;
        border: 1px #eeeeee solid;
    }
    .musicKey{
        width: 800px;
        font-size: 25px;
        height: 50px;

        box-shadow: 0px 1px saddlebrown;
    }
    .search{
        text-align: center;
        line-height:50px ;
        margin-left: 90px;
        display: inline-block;
        width: 100px;
        height: 50px;
        cursor: pointer;
        border-shadow: 0px 1px #eeeeee;
        transition: all 0.5s;

    }
    .search:hover{
        border: 0  solid lightblue;
        box-shadow: 1px 1px lightblue;
    }
    .music_list{
        width: 100%;
        height: 500px;

    }
    .searchBlank{
        width: 100%;
        display: flex;
        height: 49px;
    }

</style>