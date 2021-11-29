import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReactState from './react_state';

import reportWebVitals from './reportWebVitals';


//驼峰
let exampleStyle = {
  background:"#ff0000",
  borderBottom:"5px solid #000",
  'border-top': "5px solid #000"

}
const classArr = ['class1','class2']
let elemennt = (
  <div>
    <h1 style={{ height: '200px' }} style={exampleStyle} className={classArr.join(" ")}>
    {/* 不会合并style 后写的style生效 */}
      hello world
    </h1>
  </div> 
)


//函数式组件 首字母大写
function Childcom(props){
  console.log(props)
  let title = props.number > 0.5 ? "world" : "guys"
  return (
    <div>
      <h1>
        hello {title}
      </h1>
    </div>
  )
}

//类组件定义
class HelloWorld extends React.Component{
  render(){
    console.log(this);
    return (
      <div>
        <h1>hello Class Component</h1>
      </div>
    )
  }
}

// 函数式组件比较简单，一般用于静态没有交互事件的页面；
// 类组件 一般称为动态组件，有交互和数据修改 可以使用生命周期函数



setInterval(() => {
  ReactDOM.render(
    // <HelloWorld number={Math.round(1.2)}/>,
    // <Childcom number={Math.random()}/>,
    <ReactState />, //反复渲染同一个组件  不会重新初始化  构造函数不会重新调用，渲染函数会重新调用 所以在render中 重新获取state定义的数据
    document.getElementById('root')
  );
  console.log(new Date())
}, 1000);

ReactDOM.render(
  // <HelloWorld number={Math.round(1.2)}/>,
  // <Childcom number={Math.random()}/>,
  <ReactState />, //反复渲染同一个组件  不会重新初始化  构造函数不会重新调用，渲染函数会重新调用 所以在render中 重新获取state定义的数据
  document.getElementById('root')
);
console.log(new Date())

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
