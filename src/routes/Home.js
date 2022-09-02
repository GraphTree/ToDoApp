

function ToDO (){
    return(
        <div>
            <h3> Title </h3>
            <span>title is</span>
            <h3>Content</h3>
            <span>content is</span>
        </div>
    )
}
    


function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ToDO/>
    </div>
  );
}

export default Home;