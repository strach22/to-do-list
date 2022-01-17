import React, {Component} from 'react';


export default class Taskform extends Component {
    state={
        description:""
    }

    onSubmit=e=>{
        e.preventDefault();
        this.props.addTask(this.state.description);
        this.setState({description:""});
    }

    onChange=e=>{
       this.setState({
           [e.target.name]:e.target.value
       })
    }
render(){

    return(
        <form onSubmit={this.onSubmit} >
            <textarea 
                name="description"
                placeholder="Escribe una descripción"
                onChange={this.onChange} 
                value={this.state.description} 
            />
            <br/>
            <input type="submit"/>
        </form>
    )
}
}

