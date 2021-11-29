import React from "react";
// import { ReactDOM } from "react";

class Clock extends React.Component {
  constructor(props){
    super(props) //ES6 要求，子类的构造函数必须执行一次 super 函数，否则会报错
    //状态（数据） ==> view
    //构造函数初始化数据，将需要改变的数据初始化到state中
    this.state = {
      time:new Date().toLocaleTimeString()
    }
  }

  render(){
    this.state.time = new Date().toLocaleTimeString();  //渲染函数中重新获取 因为构造函数 不重复调用
     return (
      <div>
          <h1>当前时间：{this.state.time}</h1>
      </div>
     )
  }

  // 生命周期函数 开始

  componentDidMount(){
    //组件渲染完成时调用
    console.log('componentDidMount');
    setInterval(() => {
      //  console.log(this.state);  
      // this.state.time = new Date().toLocaleTimeString(); //错误的，不会重新渲染内容

      //正确的修改数据的方式 ， setState是异步的
      this.setState({
        time: new Date().toLocaleTimeString()
      })
      //  console.log(this.state);  

    }, 1000);
  }
}

export default Clock;
