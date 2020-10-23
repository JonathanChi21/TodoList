import React from 'react';
import { ListItem, Button } from '@material-ui/core';
import '../App.css';

const styles = {
    main:{
        width: '600px',
        backgroundColor: '#ff6b6b',
        color: '#f7fff7',
        marginBottom: '20px',
        borderRadius: '10px',
        padding: '15px',
    },
    doneBtn:{
        backgroundColor: '#f7fff7',
        color: '#ff6b6b',
        float: 'right',
        transform: 'translate(-30px, -35px)',
    }
}

const Item = ({ item, onItemClick }) => {

    var handleRemoveClick = () => {
        onItemClick(item.id);
    }
    
    return(
        <div style={styles.main} className="items">
            <ListItem>{item.task}</ListItem>
            <Button style={styles.doneBtn} onClick={handleRemoveClick}>Done</Button>
        </div>
    )
}

export default Item;