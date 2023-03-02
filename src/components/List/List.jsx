import React from 'react'
import ToDoCard from "../TodoCard/ToDoCard.jsx";


const List = ({list}) => {
  return (
    <>
    {list.map((todo) => <ToDoCard key={todo.id} todo={todo}/>)}
    </>
  )
}

export default List