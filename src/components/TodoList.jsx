import React from 'react';
import Item from './Item';
import { List } from '@material-ui/core';

const styles = {
    fontFamily: 'Montserrat, sans-serif',
    marginTop: '50px',
    transform: 'translateX(410px)',
}

const TodoList = ({ items, onItemClick}) => {

    return(
        <List style={styles}>
            {items.map(item => (
                <Item 
                    item={item}
                    onItemClick={onItemClick}/>
            ))}
        </List>
    )
}

export default TodoList;