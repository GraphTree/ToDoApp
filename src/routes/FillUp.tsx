import {useState} from 'react';
import styled from "styled-components";


const TitleBox = styled.textarea`
text-align : left;
word-wrap: break-word
`

const ContentBox = styled(TitleBox)`
height : 200px;
`


function FillUp(){
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');

    const onChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.currentTarget.value);
    }
    const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.currentTarget.value);
    }



    return (
        <div>
            <form>
                <h3> Title </h3>
                <TitleBox onChange={onChangeTitle} value = {title} />
                <h3>Content</h3>
                <ContentBox onChange={onChangeContent} value={content}/>
            </form>

        </div>
    )
}

export default FillUp