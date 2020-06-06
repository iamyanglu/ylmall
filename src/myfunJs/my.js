export function uniformSpeed(obj,target,attr) {

        let timer = null;
        timer= setInterval(()=>{
            let start = parseInt(getCss(obj,attr));
            let speed = target - start > 0? target - start : start -target;
            console.log('speed',speed);
            if(speed > 1  && speed *0.05 >1)
         {
             if(target   > start)
             {
                 obj.style[attr] =start + speed *0.05 + 'px'
             }
             else if(start > target)
             {
                 console.log('进来了');
                 obj.style[attr] = start - speed * 0.05 + 'px'
                 console.log('start',start);

             }
         }
         else {
             obj.style[attr] = target + 'px'
             clearInterval(timer)
         }

        },10)



}
function getCss(obj,attr) {

    return window.getComputedStyle(obj,null)[attr]
}