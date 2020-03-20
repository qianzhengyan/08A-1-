import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
class App extends Component {
  constructor() {
    super();
    this.state = {
      arr1: [],
      arr2: []
    }
  }
  componentDidMount() {
    console.log(this.props.list)
    let { list } = this.props;
    this.setState({
      arr1: list[0].list,
      arr2: list[1].list,
    })
  }
  changeV1(e) {
    let id = e.target.value;
    let { list } = this.props;
    if (id) {
      let obj = list[0].list.filter(item => item.id == id);
      this.setState({
        arr1: obj
      })
    }else{
      this.setState({
        arr1:list[0].list
      })
    }
  }
  changeV2(e) {
    let id = e.target.value;
    let { list } = this.props;
    if (id) {
      let obj = list[1].list.filter(item => item.id == id);
      this.setState({
        arr2: obj
      })
    }else{
      this.setState({
        arr2:list[1].list
      })
    }
  }
  render() {
    let { list } = this.props;
    let { arr1, arr2 } = this.state;
    return (
      <div>
        <div className="left">
          <select name="" id="" onClick={this.changeV1.bind(this)}>
            <option value="">全部状态</option>
            {
              list && list[0].list.map((item, index) => {
                return <option key={index} value={item.id}>{item.title}</option>
              })
            }
          </select>
          {arr1 && arr1.map(item => {
            return <p>{item.title}</p>
          })}
        </div>

        <div className="right">
          <select name="" id="" onClick={this.changeV2.bind(this)}>
            <option value="">全部状态</option>
            {
              list && list[1].list.map((item, index) => {
                return <option key={index} value={item.id}>{item.title}</option>
              })
            }
          </select>
          {arr2 && arr2.map(item=>{
            return <p>{item.title}</p>
          })}
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      list: state.list
    }
  },
  (dispatch) => {
    return {

    }
  }
)(App);



