import React, { useState} from 'react';
import { TextField, Button } from '@material-ui/core';
import {v1 as uuid} from "uuid"; 

const styles = {
    addTask: {
        textAlign: 'center',
    },
    addBtn:{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        marginTop: '5px',
        marginLeft: '25px',
    },
}

const TodoForm = ({ addItem }) => {
    const [item, setItem] = useState({
        id: "",
        task: "",
        completed: false
    })

    var handleTask = (event) => {
        setItem({ ...item, task: event.target.value });
    }

    var handleSubmit = (event) => {
        event.preventDefault();
        if(item.task.trim()){
            addItem({ ...item, id: uuid()});
            setItem({ ...item, task: "" });
        }
    }

    return(
        <div className="adding-task" style={styles.addTask}>
            <form onSubmit={handleSubmit}>
                <TextField style={{width: '350px'}} 
                                    name="item" 
                                    label="Task" 
                                    type="text"
                                    value={item.task}
                                    onChange={handleTask}/>
                <Button style={styles.addBtn} type="submit">Add task</Button>
            </form>
        </div>
    )
}

export default TodoForm;