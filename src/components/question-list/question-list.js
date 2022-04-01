import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {QuestionService} from '../../core/services/question-service'
import QuestionDetailComponent from '../question-detail/question-detail'
import QuestionCreateComponent from '../question-create/question-create'

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
         this._questionService.getQuestionList().then(res=>{
          questionDatasource=res;
          questionDatatable=questionDatasource.map(item=>
            <li  key={item.url}>
             {item.question}
             <button id='item.url' onClick={()=>{ this.setState({selectedQuestion:item.url})}}>Detail</button>
            </li>
          )
          this.setState({questionList:questionDatatable})
        })
      }
     
       render(){
        return (
          <div id='question-list' className='row'>
            <div className='col-sm-6'>
            {this.state.questionList}
            </div>
           <div className='col-sm-6'>

            <QuestionDetailComponent  myQuestion={this.state.selectedQuestion}/>
           </div>
           <div className='col-sm-12'>

            <QuestionCreateComponent  />
           </div>
          </div>
        )
      }
}