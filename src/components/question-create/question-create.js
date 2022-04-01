import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {QuestionService} from '../../core/services/question-service'

export default class QuestionCreateComponent extends Component{
    constructor(props){
        super(props);
        this.state={}
        this._questionService=new QuestionService();
        //#region FIX: Uncaught TypeError: Cannot read property 'setState' of undefined
        this.addChoice = this.addChoice.bind(this);
        this.changeQuestionName = this.changeQuestionName.bind(this);
        this.changeChoiceName = this.changeChoiceName.bind(this);
        this.saveQuestion = this.saveQuestion.bind(this);
        //#endregion
    }
    addChoice(event){
        if(this.state.choices){

            this.state.choices.push(this.state.addChoiceName)
        }else{
            this.state.choices=[this.state.addChoiceName]
        }
        let choiceDatatable=this.state.choices.map(item=>{
            return (<li>
             {item}
         </li>)   
        })
        this.setState({choices:this.state.choices,addChoiceName:'',choiceDatatable:choiceDatatable})
    }
    changeQuestionName(event){
        this.setState({questionName:event.target.value})
    }
    changeChoiceName(event){
        this.setState({addChoiceName:event.target.value})
    }
    saveQuestion(){
        const model={
            question: this.state.questionName,
            choices: this.state.choices
        }
        this._questionService.createQuestion(model).then(res=>{
            this.setState({choices:[],addChoiceName:'',choiceDatatable:[]})
        })
    }
    render(){
        return(
            <div className='row'>
                <div className='col-12'>
                    
          <label>
            Question Name:
            <input type="text" name="name" onChange={this.changeQuestionName} />
          </label>
                </div>
                <div className='col-12'>
          <label>
            Choice Name:
            <input type="text" name="ChoiceName"  onChange={this.changeChoiceName}/>

          <button id='addchoice' onClick={this.addChoice}>Add Choice </button>
          </label>

                </div>
                <div className='col-12'>
                   {this.state.choiceDatatable}
                </div>
                <div className='col-12'>

          <button onClick={this.saveQuestion}>Save</button>
                </div>
          </div>
        )
    }
}