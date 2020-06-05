<template>

 <div class="allIntr">
     <div class="openIntr">


         <img src="../../../assets/img/open.png" height="20" width="20" @click="showIntr" /></div>
     <div v-if="isMobbile" class="introMobbile">
         myself intro

     </div>
 </div>
</template>

<script>
    export default {
        name: "mobbileHead",
        methods:{
                init(){
                    let h = document.documentElement.clientHeight;
                    let w = document.documentElement.clientWidth;
                    let intr = document.querySelector('.introMobbile')
                    console.log('hhh',h);
                    intr.style.height = h +'px';
                    intr.style.width = w/2 + 'px'
                    intr.style.left= (-w)+'px'
                },
            showIntr(){
                let intr = document.querySelector('.allIntr')
                intr.style.transform='translateX(0)'
            }
        },
        data(){
            return{
               isMobbile:true
            }
        },
        created() {

        },
        mounted() {
            this.init()
        }
    }
</script>

<style scoped>
  @media screen and (max-width: 900px){
      .allIntr{
          transform: translateX(-100%) ;
          border:1px solid black;
          position: absolute;
      }
      .introMobbile{

          width: 100%;
         height: 100%;
          background-color: red;

      }
      .openIntr img{
          position: absolute;
          top: 0;
          right: -20px;
      }



  }
  @media screen and (min-width: 900px){
      .introMobbile{
          display: none;
      }
  }


</style>