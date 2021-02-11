import { IModel } from "@/typings";
import http from "../http/index";
 
function getCategory (data:IModel){
    return http.request({
        url:'/categories',
        method:'post',
        data
    })
}

export {getCategory}
