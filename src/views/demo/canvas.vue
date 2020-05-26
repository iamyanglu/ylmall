<template>
    
    <div class="canvas">
        <div class="colorBlank"><div class="penColor" v-for="item in colorArray" :style="color(item)" @click="changePen(item)"></div></div>
        <canvas id="canva"></canvas>
        <div class="bgc"><div class="bgcColor" v-for="item in bgcArray" :style="color(item)" @click="changeBgc(item)"></div></div>
    </div>
</template>

<script>
    export default {
        name: "mycanvas",
        computed:{
            color(){
                return(color)=>{
                    return {background:color}
                }
            }
        },
        data(){
            return{
                ctx:null,
                canvas:null,
                colorArray : ['#eeecfd','#aaafff','#eacd76','#00e50c','#ca6924','#c32138','#56004f','#ff4c00'],
                bgcArray: ['#eeecfd','#aaafff','#eacd76','#00e50c','#ca6924','#c32138','#56004f','#ff4c00'],
            }
        },
        methods:{

         base642pic(base64){
             let a = document.createElement('a')
             let img = document.createElement('img')
             img.src = base64
             a.href = base64
             a.download = 'my';
             let event = new MouseEvent('click')
             a.dispatchEvent(event)

         },

            changePen(item){
                this.ctx.strokeStyle = item

            },
            changeBgc(item){
                console.log(this.canvas);
            },

            initCnavas(){
                this.canvas = document.querySelector('canvas')
                this.canvas.width = document.documentElement.offsetWidth
                this.canvas.height = document.documentElement.offsetHeight
                this.ctx = this.canvas.getContext('2d')


            },
            starCanva(){
                this.drawLine()
            },
            drawLine(){
                this.ctx.beginPath()
                let paint = false;
                let starPoint={}
                let newPoint={}
                if('touchstart' in window ){


                }
                else{
                    window.onmousedown=(e)=>{
                        this.ctx.beginPath()
                        paint = true;
                        starPoint={x:e.offsetX,y:e.offsetY}
                    }
                    window.onmousemove= (e) =>{
                        if(paint){
                            newPoint={x:e.offsetX,y:e.offsetY}
                            this.ctx.moveTo(starPoint.x,starPoint.y);
                            this.ctx.lineTo(newPoint.x,newPoint.y);
                            this.ctx.stroke();
                            starPoint = newPoint;
                        }
                    }
                    window.onmouseup=()=>{
                        paint=false
                    }
                }

            }
        },

        created() {
            this.$emit('loaded');

        },
        mounted() {
            window.onkeyup=(e)=>{
            if(e.key === 's' && this.canvas)
            {
               let dataurl =  this.canvas.toDataURL('image/png')
                this.base642pic(dataurl)
            }

            }
            this.initCnavas()
            this.starCanva()
        }
    }
</script>

<style scoped>
    .canvas{

        background-color: #fff;
        z-index: 999;
        position: fixed;
        top:0;
        width: 100%;
        height: 100%;

    }
    .colorBlank{
        transform: translateY(-60%);
        width: 100%;
        height: 20px;
        display: flex;
       justify-content: center;


    }
    .colorBlank:hover{
      animation: sta 3s;
    }
    .penColor{
        width: 20px;
        height: 20px;
        margin-left: 5px;
    }
    .bgc{

        position: fixed;
        top: 20%;
    transition: all 1s ;
        width: 20px;
        height: 300px;
        transform: translateX(-90%);
    }
    .bgc:hover{
        transform: translateX(0%);
    }
    .bgcColor{

        margin-bottom: 5px;
        width: 20px;
        height: 20px;
    }
    @keyframes sta {
        0%{  transform: translateY(-60%);

        }
        10%{
            transform: translateY(0)
        }
        100%{ transform: translateY(0)}
    }
</style>