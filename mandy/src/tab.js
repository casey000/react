import React from "react";

class Tab extends React.Component{
  constructor(props){
    super(props) //ES6 要求，子类的构造函数必须执行一次 super 函数，否则会报错

    // 设置数据 
    this.state = {
      c1: 'content active',
      c2: 'content'
    };
    this.clickEvent = this.clickEvent.bind(this)
  }
  clickEvent(e){
    console.log(e.target.dataset);
    let indx = e.target.dataset.index;
    if(indx === '1'){
      this.setState({
        c1:'content active',
        c2:'content'
      })
    }
    if(indx === '2'){
      this.setState({
        c1: 'content',
        c2: 'content active'
      })
    }
  }
  
  render(){
    return (
      <div>
        {/* 想传参得用箭头函数() => this.clickEvent(3) 或者 自己绑定this this.clickEvent.bind(this,3) */ }
        <button data-index='1' onClick={this.clickEvent}>  
          内容一
        </button>

        <button data-index='2' onClick={this.clickEvent}>
          内容二
        </button>

        <div className={this.state.c1}>内容一</div> 
        <div className={this.state.c2}>内容二</div>

      </div>
    )
  }
}
export default Tab
