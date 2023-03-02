import React from 'react'
import classes from './todocard.module.css'
const ToDoCard = ({todo}) => {
    return (
      <div className={classes.todoCard}>
           <h3>{todo.title}</h3>
      </div>
    )


}

export default ToDoCard;