import axios from 'axios'
let music = axios.create({
    baseURL:'https://api.imjad.cn'
})
music.interceptors.request.use(config=>{

    return config
})
export  function getMusic(id) {
    return music({
        url:'/cloudmusic/',
        params:{
            type:'song',
            id:id
        }
    })

}

export  function getIdList(key) {
    return music({
        baseURL:"http://musicapi.leanapp.cn",
        url:'/search',
        params:{
           keywords:key
        }
    })

}