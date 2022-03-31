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
        }

      }
      getQuestionDetail(url){
        this._questionService.getQuestionById();
      } 
      render(){
        if(this.state.selectedQuestion)
        return (
          <div id='question-detail'>
            {this.state.selectedQuestion}
          </div>
        )
        else{
            return <div>no data</div>
        }
      }
}