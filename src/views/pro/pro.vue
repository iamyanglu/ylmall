<template>
    <div>
        <intro/>





    </div>
</template>

<script>

import intro from "../../components/content/about/intro";
import Intro from "../../components/content/about/intro";
    export default {
        name: "pro",
        components:{
            Intro

        },
        methods:{


                    },
        created() {
            this.$emit('loaded')
        }
    }
</script>

<style scoped>

</style>