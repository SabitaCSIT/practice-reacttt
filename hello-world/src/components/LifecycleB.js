import React, { Component } from 'react'

class LifecycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'Sabita'
        }
        console.log('LifecyecleB constructer')
    }

    static getDerivedStateFromProps(props,state){
        console.log("LifecyecleB getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log('LifecycleB componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevstate){
        console.log('LifecycleB getSnapshotBeforeUpdate')
    }

    componentDidUpdate(prevProps,prevstate,snapshot){
        console.log('LifecycleB componentDidUpdate')
        return null
        
    }
    
    render() {
        console.log('LifecycleB render')
        return (
            <div>
                LifecycleB
            </div>
        )
    }
}

export default LifecycleB