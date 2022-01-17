import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Task extends Component{
    StyleCompleted(){
      return{
        fontSize: "20px",
        color: this.props.task.done ? "#777" : "black",
        textDecoration: this.props.task.done ? "line-through" : "none"
      }
    }
    componentDidUpdate(){
      this.props.saveTasks();
    }
    render(){
        const {task}=this.props;
        return( 
          <p style={this.StyleCompleted()}>
          {task.title}-{task.description}
          <input type="checkbox" onChange={this.props.checkDone.bind(this,task.id)} defaultChecked={this.props.task.done}/>
          <button style={btndelete} onClick={this.props.deleteTask.bind(this,task.id)}>x </button>
        </p>)
    }
}
Task.propTypes={
  task: PropTypes.object.isRequired
}

const btndelete={
  fontSize: "15px",
  background: "red",
  color: 'white',
  border: 'none',
  padding: "4px 8px",
  margin: "0px 4px",
  borderRadius: "50%",
  cursor: "pointer"
}

export default Task;