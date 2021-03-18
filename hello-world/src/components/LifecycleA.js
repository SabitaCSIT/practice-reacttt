import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'Sabita'
        }
        console.log('LifecyecleA constructer')
    }

    static getDerivedStateFromProps(props,state){
        console.log("LifecyecleA getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevstate){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(prevProps,prevstate,snapshot){
        console.log('LifecycleA componentDidUpdate')
    }

    changestate=()=>{
        this.setState({
            name:'Codevolution'
        })
    }
    
    render() {
        console.log('LifecycleA render')
        return (
            <div>
            <div>Lifecycle A</div>
            <button onClick={this.changestate}>Change state</button>
            <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
