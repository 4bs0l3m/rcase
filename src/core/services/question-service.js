import {ApiBase} from './api-base'
import {API} from '../enums/api.enum'
export class QuestionService extends ApiBase{
    constructor(){
        super()
    }
    getQuestionList(){
       return this.get(API.Question,'/questions').then(res=>{
            return res
        })
    }
    getQuestionById(questionUrl){
        return this.get(API.Question,questionUrl).then(res=>{
            return res
        })
    }
    voteQuestionChoice(choiceUrl,model){
        return this.post(API.Question,choiceUrl,null,model).then(res=>{
            return res;
        })
    }
    createQuestion(model){
        return this.post(API.Question,'/questions',null,model).then(res=>{
            return res;
        })
    }
}