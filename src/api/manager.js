import {instance} from "../utils/request.js"
//主要控制manager模块的api
//获取列表
function getPage(page,pageSize){
    return instance.get("/adminList",{
        params:{
            page:page,
            pageSize:pageSize,
        }
    })
}
//增加
//修改
//删除
export{
    getPage
}