import React,{Component} from 'react'
import Mocknetwork from '../../until'
class Order extends Component{
   state={
       list:[],
       headerlist:['业务科室审核超时提醒','局长签审超时提醒','代办删除','科室撤离归档']
   }
   getData=(city)=>{
    Mocknetwork('/content/list',{city:city}).then(data=>{
        this.setState({list:data})
    })
   }
    render(){
       const { list ,headerlist} = this.state
        return <div>
            <div>
                
                {
                    headerlist.map((item,key)=>{
                        return <span key={key} onClick={()=>this.getData(item)}>{item}</span>
                    })
                }
                
            </div>
           {
               list.map((item,index)=>{
                   return <div key={index} style={{background:'#ccc'}} onClick={()=>this.props.history.push('/detail/'+item.id+'/'+item.city+'/'+item.title)}>
                       <p>{item.id}</p>
                       <p>{item.city}</p>
                       <p>{item.title}</p>
                   </div>
               })
           }
        </div>
    }
    componentDidMount(){
        //页面初始化数据请求
        Mocknetwork('/content/list').then(data=>{
            this.setState({list:data})
        })
    }
}
export default Order