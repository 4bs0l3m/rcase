import {ApiBase} from './api-base'
import {API} from '../enums/api.enum'
export class QuestionService extends ApiBase{
    constructor(){
        super()
    }
    getQuestionList(){
       return this.get(API.Question,'questions').then(res=>{
            return res
        })
    }
    getQuestionById(){

    }
}