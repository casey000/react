import React from "react";

class Tab extends React.Component{
  constructor(props){
    super(props) //ES6 要求，子类的构造函数必须执行一次 super 函数，否则会报错

    // 设置数据 
    this.state = {
      isActive:"",
      classStr:""
    }
  }

  render(){
    return (
      <div>
        <button>
          内容一
        </button>
        <button>
          内容二
        </button>
      </div>
    )
  }
}