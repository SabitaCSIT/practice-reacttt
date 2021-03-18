import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentF extends Component {
    render() {
        return (
           <UserConsumer>
               {
                   UserName=>{
                    return <div>Hello {UserName}</div>
                   }
               }
           </UserConsumer>
        )
    }
}

export default ComponentF
