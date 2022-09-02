import {useState} from 'react';
import styled from "styled-components";
import {Link, Outlet} from "react-router-dom";
import {IToDo} from "../utils/types";
import ToDo from "./ToDo";



const GirdContainer= styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));

`

const AddNewTaskButton = styled.button`
    position: fixed;
    background-color:white;
    bottom : 3%;
    right : 3%;
    width : 4rem;
    height : 4rem;
    border-radius:70%
`

const AddNewTaskLink = styled(Link)`
    text-decoration:none;
    &:link &:visited {
        color : black
    }
    &:hover{
        color : blue
    }
    
`

/* const testToDoObject:IToDo[] = [
    {title:'first title', content:'first content', id:1},
    {title:'second title', content:'second content', id:2},
    {title:'third title', content:'third content', id:3},
    {title:'fourth title', content:'fourth content', id:4},
    {title:'fifth title', content:'fifth content', id:5}
]
 */

function Home() {
    const [toDoList, setToDoList] = useState<IToDo[]>([]);
    const handleSetToDoList = (newToDo:IToDo) => {
        setToDoList((prev)=> [...prev, newToDo])
    }
  return (
    <div>
        <GirdContainer>
            {toDoList.length === 0 ? <h1>There is no task yet</h1> : null }
            {toDoList.map((toDo) => <ToDo DataInfo={toDo} key= {toDo.id} />)}
        </GirdContainer>

        <AddNewTaskButton>
            <AddNewTaskLink to ='/fillup'>Add New Task</AddNewTaskLink>
        </AddNewTaskButton>
        <Outlet/>
    </div>
  );
}

export default Home;