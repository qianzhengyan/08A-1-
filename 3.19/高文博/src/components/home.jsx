
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class home extends Component {
    constructor(){
        super()
        this.state={
            index:0
        }
    }
    fn(i){
        this.setState({
            index:i
        })
    }
    render() {
        return (
            <div>

                <p><span onClick={()=>this.fn(1)}>1</span><span onClick={()=>this.fn(2)}>2</span></p>
                {
                    this.porps.data[this.state.index].map(item=>{
                        return <p>{item}</p>
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data:state.data
    }
}

const mapDispatchToProps =(dispach)=>{
    
}

export default connect(mapStateToProps, mapDispatchToProps)(home)
