import styled from "styled-components";
import {IToDo} from "../utils/types";


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


export default ToDo