import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { addMsg,arr,changeCompleted} from './reduce/add-list'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue : ''
    }
  }

  handelChangeInputValue(e){
    this.setState({
      inputValue:e.target.value
    })
  }

  componentDidUpdate(){
    // debugger;
  }
  handelAddMsg(){
    this.props.sendMsg(this.state.inputValue);//this.state.inputValue
    this.setState({
      inputValue : ''
    })
  }

  handelSendId(item){
    // console.log(id)
    // debugger;
    this.props.toggleComplete(item.id);
  }

  handelClick(e){
      console.log(e.target)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
          <input onChange={this.handelChangeInputValue.bind(this)} value={this.state.inputValue} type="text"  />
          <button onClick={this.handelAddMsg.bind(this)}>添加</button>
          <ul className="ul-list">
            {
              this.props.arr.map( (item,index) => {
                return <li 
                           key={index} 
                           onClick={this.handelSendId.bind(this,item)}
                           className={ item.completed ? 'complete':''}
                           >
                消息ID:{item.id}.
                消息类型是：{item.type},
                内容是：{item.text},完成状态：{item.completed? '完成' : '未完成'} <span className="close" onClick={this.handelClick.bind(this)}> X </span></li>
              } )
            }
          </ul> 
         
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  arr : arr(state)
});
const mapDispatchToProps = (dispatch) => ({
  sendMsg : state => dispatch(addMsg(state)),
  toggleComplete : state => dispatch(changeCompleted(state)),
  // del : state => dispatch(delItem(state))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
