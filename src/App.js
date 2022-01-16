import React,{Component} from 'react';

import tasks from "./sample/tasks.json";
import Tasks from "./components/Tasks"
import Taskform from './components/Taskform';

class App extends Component{
  state={
    tasks:tasks
  }
  findId=()=>{
    const ids=this.state.tasks.map(e=>e.id)
    for(let i=0;i<this.state.tasks.length+1;i++){
      if(!ids.includes(i)){
        return i
      }
    }
  }
  findTitle=()=>{
    if(this.state.tasks.length===0) return "Tarea 1";
    const ldo = this.state.tasks[this.state.tasks.length-1].title;
    const splitted=ldo.split(" ");
    return "Tarea "+(parseInt(splitted.pop())+1);
  }
  addTask=(description)=>{
    const newTask={
      "id":this.findId(),
      "title":this.findTitle(),
      "description":description,
      "done":false
    }
    this.setState({
      tasks:[...this.state.tasks,newTask]
    })
  }
  deleteTask=id=>{
    const newTasks=this.state.tasks.filter(task=>task.id!==id)
    this.setState({tasks:newTasks})
  }
  checkDone=id=>{
    const newTasks=this.state.tasks.map(task=>{
      if(task.id===id) task.done=!task.done
      return task
    })
    this.setState({tasks:newTasks})
  }
  render(){
    return <div>
      <h1>Lista de tareas</h1>
      <Taskform addTask={this.addTask} />
      <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone} /> 

    </div>
  }
}

export default App;
