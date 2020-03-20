import React,{Component}from 'react'
import RootRouters from '../router'
import './app.css'
import store from '../store'
import {Provider} from 'react-redux'

class App extends Component{
    render(){
        return <Provider store={store}>

            <RootRouters />
        </Provider>
    }
}
export default App;
