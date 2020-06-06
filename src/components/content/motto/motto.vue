<template>
    <div class="motto_mid">

        <div>
            博客正在建设中...
        </div>



    </div>
</template>

<script>
    export default {
        name: "motto",
        data(){
            return {

            }
        },

    }
</script>

<style scoped>
    @media screen and (max-width: 900px){
        .motto_mid{
            display: none;
        }
    }
    @media screen and (min-width: 900px){
        .motto_mid{

            line-height: 80px;
            margin: 20px;
            width: 100%;
            height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .motto_mid div{
            text-align: center;
            width: 80%;
            background-color: #eeeeee;

        }

    }


</style>