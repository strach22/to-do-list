import React, {Component} from 'react';


export default class Taskform extends Component {
    state={
        title:"",
        description:""
    }

    onSubmit=e=>{
        e.preventDefault();
        this.props.addTask(this.state.title,this.state.description);
    }

    onChange=e=>{
       this.setState({
           [e.target.name]:e.target.value
       })
    }
render(){

    return(
        <form onSubmit={this.onSubmit}>
            <input 
                type="text" 
                name="title"
                placeholder="Escribe una tarea" 
                onChange={this.onChange} 
                value={this.state.title} 
            />
            <br/>
            <br/>
            <textarea 
                name="description"
                placeholder="Escribe una descripción"
                onChange={this.onChange} 
                value={this.state.description} 
            />
            <input type="submit"/>
        </form>
    )
}
}

