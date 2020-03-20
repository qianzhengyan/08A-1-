import React from 'react'

import SwiperGroup from '../component/swp'
import Order from '../component/order'
import Detail from '../component/order/detail'
let routerConfig = [
    {
        type:'route',
        path:'/order',
        component:Order,
    },
    {
        type:'route',
        path:'/detail/:id/:city/:title',
        component:Detail,
    },
    {
        type:'redirect',
        from:'/',
        to:'/order'

    }
]

export default routerConfig