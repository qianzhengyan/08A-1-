import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import 'swiper/css/swiper.css';
import Swiper from 'swiper' ;
import RouterView from '../../router/router.view'
class SwiperGroup extends Component{
    render(){
        return <div>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide" style={{background:'red'}}>slider1</div>
                        <div className="swiper-slide" style={{background:'yellow'}}>slider2</div>
                        <div className="swiper-slide" style={{background:'blue'}}>slider3</div>
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
                <Link to="/main/main/abc">全部状态</Link>
                <Link to="/main/main/def">全部状态</Link>
                
                <RouterView routers={this.props.routers}/>
        </div>
           
    }
    componentDidMount(){
        new Swiper('.swiper-container', {
            loop: true, 
            pagination: {
                el: '.swiper-pagination',
                clickable :true
              },
               
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
        })
    }
}

export default SwiperGroup


