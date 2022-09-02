import {useState} from 'react';
import styled from "styled-components";
import {useRecoilState } from 'recoil';
import {Link, Outlet} from "react-router-dom";

import ToDo from "./ToDo";
import { ToDoState } from '../utils/atoms';



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



function Home() {
    const [toDoList, setToDoList] = useRecoilState(ToDoState);

  return (
    <div>
        <GirdContainer>
            {toDoList.length === 0 ? <h1>There is no task yet</h1> : null }
            {toDoList.map((toDo) => <ToDo DataInfo={toDo} key= {toDo.id} />)}
        </GirdContainer>

        <AddNewTaskButton>
            <AddNewTaskLink to ={'/fillup'}   >Add New Task</AddNewTaskLink>
        </AddNewTaskButton>

        <Outlet/>
    </div>
  );
}

export default Home;