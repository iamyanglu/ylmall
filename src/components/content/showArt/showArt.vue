<template>
    <div class="artItemF">

<transition-group name="fade">
    <art-item v-for="(item,key) in list" :item="item" :key="key" >
        <label-item v-for="re in item.label" :txt="re"></label-item>
    </art-item>

</transition-group>


    </div>
</template>

<script>
    import artItem from  '@/components/conmon/art/artItem'
    import labelItem from  '@/components/conmon/labelF/mylabel'

    export default {
        name: "showArt",
        props:['list'],
        components:{
            artItem,
            labelItem
        },

        methods:{

        },
        created() {
            console.log("creatred");
        },
        destroyed() {
            console.log('destroyed');
        },

    }
</script>

<style scoped>
    @media screen and (max-width: 900px){
        .artItemF{
            background-color: #eeeeee;
            width: 100%;
        }

    }
    @media screen and (min-width: 900px){
        .artItemF{


            width: 100%;
        }


        .fade-enter-active, .fade-leave-active{
            /*进入和离开时时间为2s*/
            transition: all 1s;
        }
        .fade-enter{
            /*设置透明度为0*/
            opacity: 0;
            transform: translateX(-20px);
        }
        .fade-enter-to{

            /*设置透明度为0*/
            opacity: 1;
            transform: translateX(0px);
        }



    }


</style>