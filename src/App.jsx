import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Typography } from '@material-ui/core';

const styles = {
    title:{
        color: '#ef476f',
        textAlign: 'center',
        fontFamily: 'Montserrat, sans-serif',
        marginTop: '30px',
        marginBottom: '70px',
    },
}

const App = () => {
    const [items, setItems] = useState([]);

    var addItem = (item) => {
        setItems([item, ...items]);
    }

    /* onItemClick function and set as prop on TodoList below */
    
    var onItemClick = (id) => {
        setItems(items.filter(item => item.id !== id));
    }
    
    return(
        <div className="App">
            <Typography variant="h2" style={styles.title}>Todo-List App</Typography>
            <TodoForm addItem={addItem}/>
            <TodoList items={items} onItemClick={onItemClick} /> 
        </div>
    )
}

export default App;