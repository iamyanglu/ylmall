<template>

 <div class="allIntr">

     <div v-if="isMobbile" class="introMobbile">
         <div class="imgPro">
             <img src="../../../assets/img/pro.jpg" height="640" width="640"/>
         </div>
         <div class="mainPro">
             <div>Yanglu`s 博客</div>
             <div>
                 <router-link v-for="item in linkList" :to="item.link" class="jumpMobbile">{{item.name,item.link}}</router-link>
             </div>
         </div>
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

                    intr.style.height = h/2 +'px';
                    intr.style.width = w/2 + 'px'
                },
        },
        data(){
            return{
               isMobbile:true,
                linkList:[{name:'首页',link:"/index"},{name:'demo',link:'/pro'}]
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
          width: 100%;
          position: relative;
          height: 100%;
          border: 1px solid #eeeeee;
      }
      .introMobbile{

        position: absolute;
          top:0;
          left: -50%;
         width: 50%;
         height: 100%;

      }
      .imgPro{
          width: 100%;
          height: 100%;
            display: flex;
          justify-content: center;


      }
      .imgPro img{


            margin: 20px ;
            width: 60px;
            height: 60px;

            border-radius: 50%;
        }
      .mainPro{
          text-align: center;
      }
      .jumpMobbile{

          display: block;
          margin-top: 5px;
          width: 100%;
          height: 20px;
          line-height: 20px;
          font-size: 14px;
      }
  }
  @media screen and (min-width: 900px){
      .allIntr{
          display: none;
      }
  }
</style>