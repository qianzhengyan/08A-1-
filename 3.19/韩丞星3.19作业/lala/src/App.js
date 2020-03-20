import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <select name="" id="">
        <option value="">全部状态</option>
        <option value="">业务科室审核</option>
        <option value="">局长签审</option>
        <option value="">代办</option>
        <option value="">归档</option>
        <option value="">科室撤稿</option>
      </select><br></br>
      <select name="" id="">
        <option value="">全部状态</option>
        <option value="">超时提醒</option>
        <option value="">删除</option>
      </select>
    </div>
  );
}

export default App;
