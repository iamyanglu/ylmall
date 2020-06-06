<template>
    <div class="openSide">
        <img src="../../../assets/img/open.png" @click="showSide"/>
    </div>

</template>

<script>
    export default {
        name: "smallUtl",
        methods:{
            showSide(){

          this.$emit('showSide')
            }
        }
    }
</script>

<style scoped>
    @media screen and (max-width: 900px){
            .openSide{
                padding-left: 2px;
                width: 100%;
                height:70px
            }
        .openSide img{
            width: 30px;
            height: 30px;
        }
    }
    @media screen and (min-width: 900px){
        .openSide{
            display: none;
        }


    }
</style>