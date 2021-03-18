import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:false
        }
    }
    
    render() {
        return this.state.isLoggedIn && <div>Welcome Sabita</div>

        /* return( this.state.isLoggedIn?
        <div>Welcome sabita</div>:
        <div>Welcome Guest</div>
        ) */
        

        /* let message 
        if(this.state.isLoggedIn){
            message=<div>Welcome Sabita</div>
        }
        else{
            message=<div>Welcome guest</div>
        }
        return <div>{message}</div>
 */

        /* if(this.state.isLoggedIn){
            return(
                <div>
                    Welcome Sabita
                </div>
            )
        }
        else{
            return(
                <div>
                    Welcome Guest
                </div>
            )
        } */
        /* return (
            <div>
                welcome Sabita
                Welcome Guest
            </div> 
        ) */
    }
}

export default UserGreeting
