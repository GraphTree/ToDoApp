import {useState} from 'react';
import { useNavigate ,useLocation} from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from "styled-components";
import {IToDo} from "../utils/types";
import { ToDoState } from '../utils/atoms';


const ModalDiv = styled.div`
    width : 100%;
    height : 100%;
    position: absolute;
    top: 0;
    left:0;
    background-color: rgba(0,0,0,0.5);
`

const Modal=styled.div`
    width : 30%;
    height : 50%;
    background-color: white;
    border-radius: 5px;
    position : relative;
    left : 35%;
    top:20%
`

const Title=styled.h3`
    text-align : center;
    padding-top :5% ;
    `
const Content=styled(Title)`
    padding-top : 0;`



const TitleBox = styled.textarea`
text-align : left;
width : 90%;
left : 4%;
position : relative;
word-wrap: break-word;
`

const ContentBox = styled(TitleBox)`
height : 200px;
`
const SubmitButton = styled.button`
    position: relative;
    background-color:white;
    bottom : 0%;
    left: 80%;
    width : 3rem;
    height : 3rem;
    border-radius:70%;
    font-size: 0.4rem;
    margin-top:5%
`    

function FillUp() {
    const [toDoList, setToDoList] = useRecoilState(ToDoState);
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const navigate = useNavigate();

    const onChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.currentTarget.value);
    }
    const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.currentTarget.value);
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(title, content);
        setToDoList([...toDoList, {title, content, id: Date.now()}]);
        navigate('/')

    }

    const onClickModalBackground = (e: React.MouseEvent<HTMLElement>) => {

    }


    return (
        <ModalDiv onClick={onClickModalBackground}>
        <Modal>
            <form onSubmit={onSubmit}>
                <Title> Title </Title>
                <TitleBox onChange={onChangeTitle} value = {title} />
                <Content>Content</Content>
                <ContentBox onChange={onChangeContent} value={content}/>
                <SubmitButton>Submit</SubmitButton>
            </form>

        </Modal>
        </ModalDiv>
    )
}

export default FillUp