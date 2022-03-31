import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {QuestionService} from '../../core/services/question-service'
import QuestionDetailComponent from '../question-detail/question-detail'

export default class QuestionListComponent extends Component{
  
      constructor(props){
        super(props)
        this.state = {questionList: [],selectedQuestion:''};
        this._questionService=new QuestionService();
        this.fillQuestions()
      }
      fillQuestions(){
        let questionDatasource;
        let questionDatatable;
        let  clickQuestion=(question)=>{
          console.log('question :', question);
          this.setState({selectedQuestion:question})
        }
        
         this._questionService.getQuestionList().then(res=>{
          questionDatasource=res;
          questionDatatable=questionDatasource.map(item=>
            <li  key={item.url}>
             {item.question}
             <button title='333' onClick={()=>{ this.setState({selectedQuestion:item.url})}}>asd</button>
            </li>
          )
          this.setState({questionList:questionDatatable})
        })
      }
     
       render(){
        return (
          <div id='question-list'>
            <div>
            {this.state.questionList}
            </div>
           
            <QuestionDetailComponent  myQuestion={this.state.selectedQuestion}/>
          </div>
        )
      }
}