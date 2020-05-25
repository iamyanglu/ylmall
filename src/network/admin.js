import  axios from 'axios'
let request = axios.create({
    baseURL:'http://127.0.0.1:2000',
    timeout:5000
})
export function putimage(config) {


    return request(config)


}
export function putArt(obj) {

  return   request({
        url:'/put',
        method:'post',

        headers:{
            'Content-type':'application/json'
        },
        data:obj
    })
}

export function getart(Apage){
    return request({
            url:'/getart',
       params:{
            page:Apage
       }

    })
}
export function getartByid(id){


    return request({
        url:'/qid',
        params:{
            id:id
        }
    })

}
export function addSuport(id){

    return request({
        url:'/addPrase',
        params:{
            id:id
        }

    })
}  //添加点赞
export function addViews(id){


    return request({
        url:'/addViews',
        params:{
            id:id
        }

    })
} //添加观看
//查询文章总数
export function total(id){

    return request({
        url:'/total',

    })
}
export function log(obj){

    return request({

        url:'/log',
        method:'post',
        data:{
            user:obj.user,
            pass:obj.pass
        }

    })
}