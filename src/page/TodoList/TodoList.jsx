import { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import classes from './todolist.module.css';
import Modal from "../../components/Modal/Modal";
import List from "../../components/List/List.jsx";
const TodoList = () => {
    const [ isShow, setIsShow ] = useState(false);
    const [ newTitle, setNewTitle ] = useState('');
    const [ search, setSearch ] = useState('');
    const list = [
        {
            id:1 , 
            title: 'coding', 

        },
        {
            id:2,
            title: 'eat', 

        },
        {
            id:3,
            title: 'sleep', 

        }
    ]
          
    const handleShow = () => setIsShow(!isShow);


    const handleChangeText = (event) => {
        setNewTitle(event.target.value);
    }
    const handleSearch = (event) => {
        setSearch(event.target.value);
    }
    return (
        <div className={classes.wrapper}>
            <Button handleShow={handleShow}>
                Добавить
            </Button>
            <Input
                placeholder={'search...'}
                onChange={handleSearch}
                value={search}
                name={'search'}
            />
            { isShow && <Modal handleShow={handleShow}>
                <p>{newTitle}</p>
                <Input
                    placeholder={'Добавить'}
                    onChange={handleChangeText}
                    name={'add'}
                    value={newTitle}
                />
            <Button >
                Добавить
            </Button>
            <button onClick={handleShow}>Close</button>
            </Modal> }
            <List list={list}/>
        </div>
    )
}


export default TodoList;