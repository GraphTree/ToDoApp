import styled from "styled-components";
import {IToDo} from "../utils/types";
import { useRecoilState } from 'recoil';
import { ToDoState } from '../utils/atoms';


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
const DeleteButton = styled.button`
    position: relative;
    left : 40%;
    top : 2%;
`


function ToDo ({DataInfo} : {DataInfo : IToDo}) {
    const [toDoList, setToDoList] = useRecoilState(ToDoState);
    const onClickDelete = () => {
        setToDoList(toDoList.filter((toDo) => toDo.id !== DataInfo.id))
    }

    return(
        <GirdItem>
            <DeleteButton onClick={onClickDelete}>Delete</DeleteButton>
            <h3> Title </h3>
            <TitleBox>{DataInfo.title} is</TitleBox>
            <h3>Content</h3>
            <ContentBox>{DataInfo.content}</ContentBox>
        </GirdItem>
    )
}


export default ToDo