import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {QuestionService} from '../../core/services/question-service'

export default class QuestionDetailComponent extends Component{
    constructor(props) {
        super(props);
        this.state={}
        this._questionService=new QuestionService();

      }
      componentDidMount(){
        this.setState({selectedQuestion:this.props.myQuestion})

      }
      componentDidUpdate(prevProps){
        if (this.props.myQuestion !== prevProps.myQuestion){
            this.setState({selectedQuestion:this.props.myQuestion})
            this.getQuestionDetail(this.props.myQuestion)
        }

      }
      getQuestionDetail(url){
        this._questionService.getQuestionById(url).then(res=>{
        let choiceDatatable;
        if(res.choices){
          
          choiceDatatable=res.choices.map(item=>
            <li  key={item.url}>
           {item.choice} : {item.votes}
           <button title={item.choice} onClick={()=>{ this.voteChoise(item.url,item)}}>Vote</button>
          </li>
        )
        this.setState({choiceList:choiceDatatable,questionTitle:res.question})
      }
        
          
        });
      } 
      voteChoise(url,choice){
        this._questionService.voteQuestionChoice(url,choice).then(res=>{
          this.getQuestionDetail(this.props.myQuestion);
        });
      }
      render(){
        if(this.state.selectedQuestion)
        return (
          <div id='question-detail'>
            <h4>

            {this.state.questionTitle}
            </h4>
            {this.state.choiceList}
          </div>
        )
        else{
            return <div>no data</div>
        }
      }
}