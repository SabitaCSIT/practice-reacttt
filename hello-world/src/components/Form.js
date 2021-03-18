import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             Username:'',
             Comments:'',
             Topic:'react'
        }
    }

    handleUsernameChange = (event) =>{
        this.setState({Username:event.target.value})
    }

    handleCommentChange=(event)=>{
        this.setState({
            Comments:event.target.value
        })
    }
    
    handleTopicChange=(event)=>{
        this.setState({
            Topic:event.target.value
        })
    }

    handleSubmit=(event)=>{
        alert(`${this.state.Username} ${this.state.Comments} ${this.state.Topic}`)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type='text' value={this.state.Username} onChange={this.handleUsernameChange} />
                </div>

                <div>
                    <label>Comments:</label>
                    <textarea value={this.state.Comments} onChange={this.handleCommentChange}></textarea>
                </div>

                <div>
                    <label>Topic:</label>
                    <select value={this.state.Topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="node">Node</option>
                        <option value="angular">Angular</option>
                    </select>
                </div>
                <button value="submit">Submit</button>
            </form>
            
        )
    }
}

export default Form
