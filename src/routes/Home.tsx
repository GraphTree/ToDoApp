import {useState} from 'react';
import styled from "styled-components";
import {IToDo} from "../utils/types";
import ToDo from "./ToDo";



const GirdContainer= styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));

`

const SubmitButton = styled.button`
    position: fixed;
    background-color:white;
    bottom : 3%;
    right : 3%;
    width : 4rem;
    height : 4rem;
    border-radius:70%

`


const testToDoObject:IToDo[] = [
    {title:'first title', content:'first content', id:1},
    {title:'second title', content:'second content', id:2},
    {title:'third title', content:'third content', id:3},
    {title:'fourth title', content:'fourth content', id:4},
    {title:'fifth title', content:'fifth content', id:5}
]


function Home() {
    const [toDoList, setToDoList] = useState<IToDo[]>(testToDoObject);
    const testData:IToDo = {title:'title', content:'content', id:3}

  return (
    <div>
        <GirdContainer>
            {toDoList.map((toDo) => <ToDo DataInfo={toDo} key= {toDo.id} />)}
        </GirdContainer>
        <SubmitButton>Submit</SubmitButton>
    </div>
  );
}

export default Home;