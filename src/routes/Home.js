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


function ToDO (){
    return(
        <GirdItem>
            <h3> Title </h3>
            <TitleBox>title is</TitleBox>
            <h3>Content</h3>
            <ContentBox>content</ContentBox>
        </GirdItem>
    )
}

function Home() {
  return (
    <div>
        <GirdContainer>
            <ToDO/>
        </GirdContainer>
    </div>
  );
}

export default Home;