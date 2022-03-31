import {ResponseBody} from '../models/response-body'
export class ApiBase{
    constructor(){
        
    }
    get(root,url,params){
        
        if(params){

        }else{
            params={}
        }
        
        const requestOptions = {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
            }
        };
        return fetch(root+url,requestOptions).then(res=>{
            
            return res.json();

        })
        .catch(err=>{
            
        })
    }
}