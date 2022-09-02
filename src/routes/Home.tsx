import {useState} from 'react';
import styled from "styled-components";


    

const GirdContainer= styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));

`
const GirdItem = styled.div`
    text-align:center;
    background-color:lightblue;
    border: 1px solid black;
    margin: 10px
`

const TitleBox = styled.div`
text-align : left;
word-wrap: break-word
`

const ContentBox = styled(TitleBox)`
    height : 200px;
`


interface IToDo {
    title : String,
    content : String,
    id : number
}


function ToDo ({DataInfo} : {DataInfo : IToDo}) {
    return(
        <GirdItem>
            <h3> Title </h3>
            <TitleBox>{DataInfo.title} is</TitleBox>
            <h3>Content</h3>
            <ContentBox>{DataInfo.content}</ContentBox>
        </GirdItem>
    )
}

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
    </div>
  );
}

export default Home;